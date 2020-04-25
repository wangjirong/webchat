<template>
    <div id="my" class="flex-column-top home-center">
        <img :src="user.avatar" alt="头像" title="头像" class="avatar">
        <div class="item flex-vertical-start" v-for="item in list" :key="item.title">
            <span class="pre-title">{{item.title}}</span>
            <span>{{item.value}}</span>
        </div>
        <button class="out-login" @click="outLogin">退出登录</button>
    </div>
</template>
<script>
    export default {
        name: "My",
        data() {
            return {
                user:JSON.parse(sessionStorage.getItem("user")),
                list:[
                    {
                        title:"昵称",
                        value:""
                    },
                    {
                        title:"账号",
                        value:""
                    },
                    {
                        title:"GitHub",
                        value:"http://www.github.com/wangji……"
                    },
                ]
            }
        },
        methods:{
            outLogin(){
                this.$router.push('/login');
            }

        },
        created() {
            const user = this.$store.getters.GET_USER;
            this.list[0].value = user.userName;
            this.list[1].value = user.nickName;
        }
    }
</script>


