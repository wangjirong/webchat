<template>
    <div id="group" class=" flex-column-top">
        <a href="" class="group-item flex-vertical-start" v-for="item in groupList" :key="item.id" >
            <img :src="item.avatar" alt="" class="avatar">
            <span class="group-name">{{item.groupName}}</span>
        </a>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                groupList: [
                    {
                        avatar: require('../../assets/image/avatar1.jpg'),
                        groupName: "编译原理（1-3班）"
                    },
                    {
                        avatar: require('../../assets/image/avatar1.jpg'),
                        groupName: "人民日报"
                    },
                    {
                        avatar: require('../../assets/image/avatar1.jpg'),
                        groupName: "前端菜鸡互啄群"
                    },
                    {
                        avatar: require('../../assets/image/avatar1.jpg'),
                        groupName: "vue从入门到放弃"
                    },
                    {
                        avatar: require('../../assets/image/avatar1.jpg'),
                        groupName: "数据挖掘导论李老板"
                    },
                    {
                        avatar: require('../../assets/image/avatar1.jpg'),
                        groupName: "网络协议2017"
                    },
                ]
            }
        }
    }
</script>
