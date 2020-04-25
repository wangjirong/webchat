<template>
    <div id="login" class="flex-column cover fixed">
        <img src="../assets/image/avatar2.jpg" alt="icon" class="chat-icon mb-3">
        <div class="userCount mb-3">
            <Input placeholder="请输入账号|邮箱" size="large" clearable style="width: auto" v-model="user.nickName">
                <Icon type="ios-contact" slot="prefix"/>
            </Input>
        </div>
        <div class="password mb-3">
            <Input placeholder="请输入密码" size="large" type="password" password style="width: auto"
                   v-model="user.password">
                <Icon type="md-lock" slot="prefix"/>
            </Input>
        </div>
        <button class="login mb-3" @click="login">
            <Icon type="md-arrow-round-forward"/>
        </button>
        <div class="forget-password-register">
            <router-link to="/forgetPassword">忘记密码</router-link>
            <span>|</span>
            <router-link to="/register">注册账号</router-link>
        </div>
    </div>
</template>
<script>
    import jwtDecode from 'jwt-decode'
    export default {
        data() {
            return {
                user: {
                    nickName: "",
                    password: ""
                }
            }
        },
        methods: {
            async login() {
                const res = await this.$axios.post('/api/users/login', this.user);
                if(res.status === 200){
                    localStorage.setItem("eleToken",res.data);
                    const user = jwtDecode(res.data);
                    console.log(user);
                    await this.$store.dispatch("setUser",user);
                    this.$Message.success("登录成功");
                    await this.$router.push('/');
                }
            }
        }
    }
</script>


