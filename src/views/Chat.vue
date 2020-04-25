<template>
    <div id="chat">
        <div class="top-nav flex-vertical-space">
            <Icon type="ios-arrow-back" @click.native="backToMessage"/>
            <div class="user-group-info flex-column">
                <h3 class="user-group-name">{{toUser}}</h3>
                <h5 class="state">iPhone 11 Pro Max 在线</h5>
            </div>
            <Icon type="md-menu" class="user-group-detail"/>
        </div>
        <div class="center-messages" id="messageBox"></div>
        <div class="input-text-area flex-column">
            <div class="send">
                <Input class="input-message" v-model="message" placeholder="" size="large" style="width: auto"
                       @on-enter="sendMessage"/>
                <Button type="primary" size="large" @click.native="sendMessage">发送</Button>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                message: "",
                toUser:this.$route.query.nickName,
                user: JSON.parse(sessionStorage.getItem("user"))
            }
        },
        methods: {
            backToMessage() {
                this.$router.push('/message')
            },
            sendMessage() {
                this.$socket.emit("sendMessage", this.message);
                this.handleMessage('my-message', this.user, this.message)
                this.message = '';
            },
            handleMessage(type, user, message) {

                //头像
                const avatar = document.createElement('img');
                avatar.setAttribute("src", user.avatar);
                avatar.className = "avatar";
                //消息
                const newMessage = document.createElement('span');
                newMessage.innerHTML = message;
                newMessage.className = "msg";
                const div = document.createElement('div');
                if (type === 'my-message') {
                    div.className = 'my-message flex-vertical-end';
                    div.appendChild(newMessage);
                    div.appendChild(avatar);
                } else {
                    div.className = 'my-message flex-vertical-start';
                    div.appendChild(avatar);
                    div.appendChild(newMessage);
                }
                let msgBox = document.getElementById('messageBox');
                msgBox.appendChild(div);
            }
        },
        mounted() {
            this.$socket.on("getMessage", m => {
                this.handleMessage('others', m.user, m.message);
            })
        }
    }
</script>