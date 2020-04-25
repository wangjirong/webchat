<template>
    <div id="home">
        <elHeader :item="item"></elHeader>

        <router-view></router-view>
        <elFooter @getMenuItem="getMenuItem"></elFooter>
    </div>
</template>
<script>
    export default {
        name: "Home",
        data() {
            return {
                item: {}
            }
        },
        components: {
            elHeader: () => import('../components/header'),
            elFooter: () => import('../components/footer')
        },
        methods: {

            getMenuItem(item) {
                this.$nextTick(() => {
                    this.item = item;
                })


            }
        },
        // created() {
        //     console.log(this)
        //     this.$socket.emit('login', {
        //         username: '老王',
        //         password: 'password'
        //     });
        //
        //     //接收服务端的信息
        //     this.sockets.subscribe('relogin', (data) => {
        //         console.log(data)
        //     })
        // }

    }
</script>


