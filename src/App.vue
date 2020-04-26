<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    // import socket from "./util/socket";


    export default {
        name: "app",
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
            if (user) this.$socket.emit("userLogin", {user})

            //在页面刷新时将vuex里的信息保存到sessionStorage里
            window.addEventListener("beforeunload", () => {
                sessionStorage.setItem("store", JSON.stringify(this.$store.state));
            });
        },
        sockets: {
            connect() {
            },
            reUserLogin(data) {
                console.log(data)
            },
            reAddFriend(data){
                console.log(data);
            }
        }
    }
</script>