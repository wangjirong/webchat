<template>
    <div id="friends">
        <!--        <div class="friendList flex-column-top" v-for="list in friendList" :key="list.id">-->
        <span class="list-name">好友列表</span>
        <router-link :to="{path:'/chat',query:{nickName:friend.nickName}}" v-for="friend in friendList"
                     :key="friend.id"
                     class="friend flex-vertical-start">
            <img :src="friend.avatar" alt="" class="avatar">
            <span class="friend-name">{{friend.userName}}</span>
        </router-link>
    </div>
    <!--    </div>-->
</template>
<script>
    export default {
        data() {
            return {
                //好友列表
                friendList: this.$store.getters.GET_FRIEND_LIST,
            }
        },
        methods: {
            async getFriendList() {
                // if (!this.friendList) {
                const res = await this.$axios.get(`/api/users/friendList?_id=${this.$store.getters.GET_USER._id}`);
                if (res.status === 200) {
                    this.$store.dispatch("setFriendList", res.data);
                }
                // }
            }
        },
        async created() {
            await this.getFriendList();
        }

    }
</script>
