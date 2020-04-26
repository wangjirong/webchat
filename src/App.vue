<template>
    <div id="app">
        <Modal
                v-model="modal"
                :title="`${applyUser.userName}请求添加你为好友`"
                width="300"
                ok-text="同意"
                @on-ok="addFriend">
            <img :src="applyUser.avatar" alt="" class="avatar" height="40" width="40">
            <p>{{applyUser.nickName}}</p>
        </Modal>
        <router-view></router-view>
    </div>
</template>
<script>
    // import socket from "./util/socket";


    export default {
        name: "app",
        data() {
            return {
                modal: false,
                applyUser: {}
            }
        },
        methods: {
            async addFriend() {
                const res = await this.$axios.post('/api/users/addFriend', {
                    id: this.$store.getters.GET_USER._id,
                    to_id: this.applyUser._id
                });
                if (res.status === 200) {
                    this.$Message.success("添加成功");
                } else this.$Message.error("添加失败")
            }

        },
        created() {
            //在页面加载时读取sessionStorage里的状态信息
            if (sessionStorage.getItem("store")) {
                this.$store.replaceState(
                    Object.assign(
                        {},
                        this.$store.state,
                        JSON.parse(sessionStorage.getItem("store"))
                    )
                );
                // sessionStorage.clear();
            }
            const user = this.$store.getters.GET_USER;
            if (user) this.$socket.emit("userLogin", {user});

            //在页面刷新时将vuex里的信息保存到sessionStorage里
            window.addEventListener("beforeunload", () => {
                sessionStorage.setItem("store", JSON.stringify(this.$store.state));
            });
        },
        sockets: {
            connect() {
            },
            reUserLogin() {
            },
            reAddFriend(data) {
                this.applyUser = data.user;
                this.modal = true;
            },
            getMessage(data) {
                const messageList = this.$store.getters.GET_FRIEND_MESSAGE_LIST;
                messageList.push(data);
                this.$store.dispatch('setFriendMessageList', messageList)
                console.log(this.$store.getters.GET_FRIEND_MESSAGE_LIST)
            },
            disconnect() {

            }
        }
    }
</script>