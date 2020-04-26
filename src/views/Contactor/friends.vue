<template>
    <div id="friends">
        <div class="friendList flex-column-top" v-for="list in friendList" :key="list.id">
            <span class="list-name">{{list.nav}}</span>
            <router-link :to="{path:'/chat',query:{nickName:friend.nickName}}" v-for="friend in list.friends"
                         :key="friend.id"
                         class="friend flex-vertical-start">
                <img :src="friend.avatar" alt="" class="avatar">
                <span class="friend-name">{{friend.userName}}</span>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                friendList: [
                    {
                        nav: "好友列表",
                        friends: [
                            {
                                avatar: require('../../assets/image/avatar1.jpg'),
                                userName: "408718358",
                                nickName:"408718358@qq.com"
                            },
                            {
                                avatar: require('../../assets/image/avatar1.jpg'),
                                userName:"54136072",
                                nickName: "54136072@qq.com"
                            },

                        ]
                    },


                ]
            }
        }

    }
</script>
