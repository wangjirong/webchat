<template>
    <div id="contact" class="home-center flex-column-top">
        <Input search placeholder="搜索" v-model="nickName" @on-click="searchPerson" @on-enter="searchPerson"/>
        <router-link to="chat" class="new-friend-box flex-vertical-space">
            <span class="new-friend">新朋友</span>
            <Icon type="ios-arrow-forward"/>
        </router-link>
        <div class="person-group ">
            <router-link to="/contact/friends">好友</router-link>
            <router-link to="/contact/group">群聊</router-link>
        </div>
        <router-view></router-view>
        <Modal
                v-model="modal"
                :title="foundUser.userName"
                width="300"
                ok-text="添加好友"
                @on-ok="addFriend">
            <img :src="foundUser.avatar" alt="" class="avatar" height="40" width="40">
            <p>{{foundUser.nickName}}</p>
        </Modal>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                modal: false,
                nickName: "",
                foundUser: {}
            }
        },
        methods: {
            async searchPerson() {
                const res = await this.$axios.get(`/api/users/searchPerson?nickName=${this.nickName}`);
                if (res.status === 200) {
                    this.foundUser = res.data;
                    this.modal = true;
                } else if (res.status === 211) this.$Message.error("抱歉，没有找到");
            },
            async addFriend() {

            }
        }
    }
</script>



