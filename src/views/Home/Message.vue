<template>
    <div id="message" class="home-center flex-vertical-top">
        <Input search placeholder="搜索"/>
        <ul class="msg-group">
            <li class="msg-item" v-for="msg in msgList" :key="msg.id">
                <router-link :to="{path:'/chat',query:{nickName:msg.nickName}}" class="flex-vertical-space">
                    <img :src="msg.receiver.avatar" alt="" class="avatar" width="50">
                    <span class="title">{{msg.receiver.userName}}</span>
                    <span class="time">17:45</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msgList: [...this.$store.getters.GET_FRIEND_MESSAGE_LIST, ...this.$store.getters.GET_GROUP_MESSAGE_LIST]
            }
        },
        created() {
            console.log(this.msgList)
        }
    }
</script>

