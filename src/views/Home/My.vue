<template>
    <div id="my" class="flex-column">
        <img src="../../assets/image/avatar1.jpg" alt="头像" title="头像" class="avatar">
        <div class="item flex-vertical-start" v-for="item in list" :key="item.title">
            <span class="pre-title">{{item.title}}</span>
            <span>{{item.value}}</span>
        </div>
        <button class="out-login">退出登录</button>
    </div>
</template>
<script>
    export default {
        name: "My",
        data() {
            return {
                list:[
                    {
                        title:"账号",
                        value:"408718358"
                    },
                    {
                        title:"昵称",
                        value:"408718358"
                    },
                    {
                        title:"GitHub",
                        value:"http://www.github.com/wangji……"
                    },

                ]
            }
        }
    }
</script>


