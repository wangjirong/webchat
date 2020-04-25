<template>
    <div id="friends">
        <div class="friendList flex-column-top" v-for="list in friendList" :key="list.id">
            <span class="list-name">{{list.nav}}</span>
            <router-link :to="{path:'/chat',query:{nickName:friend.nickName}}" v-for="friend in list.friends"
                         :key="friend.id"
                         class="friend flex-vertical-start">
                <img :src="friend.avatar" alt="" class="avatar">
                <span class="friend-name">{{friend.nickName}}</span>
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
                                nickName: "冯明强"
                            },
                            {
                                avatar: require('../../assets/image/avatar1.jpg'),
                                nickName: "王岩松"
                            },
                            {
                                avatar: require('../../assets/image/avatar1.jpg'),
                                nickName: "谢江涛"
                            },
                            {
                                avatar: require('../../assets/image/avatar1.jpg'),
                                nickName: "张三"
                            },
                            {
                                avatar: require('../../assets/image/avatar1.jpg'),
                                nickName: "李四"
                            },
                            {
                                avatar: require('../../assets/image/avatar1.jpg'),
                                nickName: "王五"
                            },
                            {
                                avatar: require('../../assets/image/avatar1.jpg'),
                                nickName: "谢广坤"
                            },
                        ]
                    },


                ]
            }
        }

    }
</script>
