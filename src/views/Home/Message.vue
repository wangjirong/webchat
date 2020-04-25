<template>
    <div id="message" class="home-center flex-vertical-top message">
        <Input search placeholder="搜索"/>
        <ul class="msg-group">
            <li class="msg-item flex-vertical-start" v-for="msg in msgList" :key="msg.time">
                <img :src="msg.avatar" alt="" class="avatar" width="50">
                <span class="title">{{msg.nickName}}</span>
                <span class="time">{{msg.time}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msgList: [
                    {
                        avatar: require('../../assets/image/avatar1.jpg'),
                        nickName: "web技术交流",
                        time: "10:24"
                    },
                    {
                        avatar: require('../../assets/image/avatar1.jpg'),
                        nickName: "冯明强",
                        time: "02:22"
                    }, {
                        avatar: require('../../assets/image/avatar1.jpg'),
                        nickName: "web技术交流",
                        time: "11:44"
                    }, {
                        avatar: require('../../assets/image/avatar1.jpg'),
                        nickName: "web技术交流",
                        time: "00:35"
                    },


                ]
            }
        }
    }
</script>

