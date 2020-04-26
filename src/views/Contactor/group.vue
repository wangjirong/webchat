<template>
    <div id="group" class=" flex-column-top">
        <a href="" class="group-item flex-vertical-start" v-for="item in groupList" :key="item.id">
            <img :src="item.avatar" alt="" class="avatar">
            <span class="group-name">{{item.groupName}}</span>
        </a>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                //群聊列表
                groupList: this.$store.getters.GET_GROUP_LIST,
            }
        }
    }
</script>
