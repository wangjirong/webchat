<template>
    <div id="chat">
        <div class="top-nav flex-vertical-space">
            <Icon type="ios-arrow-back" @click.native="backToMessage"/>
            <div class="user-group-info flex-column">
                <h3 class="user-group-name">{{toUser.userName}}</h3>
                <h5 class="state">iPhone 11 Pro Max 在线</h5>
            </div>
            <Icon type="md-menu" class="user-group-detail"/>
        </div>
        <div class="center-messages" id="messageBox">
            <div class="message" v-for="message in chatMessage" :key="message.id">
                <!--当前消息是本人发的-->
                <div class="my-message flex-vertical-end"
                     v-if="message.sendUser.nickName === nickName">
                    <span class="msg">{{message.message}}</span>
                    <img :src="message.sendUser.avatar" alt="" class="avatar">
                </div>
                <div class="my-message flex-vertical-start" v-else>
                    <img :src="message.sendUser.avatar" alt="" class="avatar">
                    <span class="msg">{{message.message}}</span>
                </div>
            </div>

        </div>
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
    import Message from "../model/Message";

    export default {
        data() {
            return {
                message: "",
                nickName:this.$store.getters.GET_USER.nickName,
                toUser: this.$store.getters.GET_FRIEND_LIST.find(r => r.nickName === this.$route.query.nickName),
                user: JSON.parse(sessionStorage.getItem("user")),
                chatMessage: this.$store.getters.GET_FRIEND_MESSAGE_LIST,
            }
        },
        methods: {
            backToMessage() {
                this.$router.push('/message')
            },
            sendMessage() {
                this.$socket.emit("sendMessage", new Message(this.message, this.$store.getters.GET_USER, this.toUser));
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
        created() {
            console.log(this.$store.getters.GET_USER.nickName);
            console.log(this.chatMessage)
        }
    }
</script>