<template>
    <div id="register" class="flex-column cover fixed">
        <img src="../assets/image/avatar2.jpg" alt="icon" class="chat-icon mb-3">
        <div class="userName mb-2">
            <Input placeholder="请输入昵称" size="large" clearable style="width: auto" v-model="user.userName">
                <Icon type="ios-outlet-outline" slot="prefix"/>
            </Input>
        </div>
        <div class="userCount mb-2">
            <Input placeholder="请输入邮箱" size="large" clearable style="width: auto" v-model="user.nickName">
                <Icon type="ios-contact" slot="prefix"/>
            </Input>
        </div>
        <div class="password mb-2">
            <Input placeholder="请输入密码" size="large" type="password" password style="width: auto"
                   v-model="user.password">
                <Icon type="md-lock" slot="prefix"/>
            </Input>
        </div>
        <div class="password mb-2">
            <Input placeholder="确认密码" size="large" type="password" password style="width: auto"
                   v-model="repeatPassword">
                <Icon type="ios-lock-outline" slot="prefix"/>
            </Input>
        </div>
        <button class="register" @click="register">
            <Icon type="md-checkmark"/>
        </button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                user: {
                    userName: "",
                    nickName: "",
                    password: ""
                },
                repeatPassword: ""
            }
        },
        methods: {
            async register() {
                const res = await this.$axios.post('/api/users/register', this.user);
                if(res.status === 200){
                    this.$Message.success("注册成功");
                    this.$Message.info("返回登录界面！");
                    await this.$router.push('/login');
                }

            }
        }
    }
</script>


