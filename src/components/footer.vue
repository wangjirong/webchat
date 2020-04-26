<template>
    <footer id="footer" class="flex-vertical">
        <router-link v-for="item in footerMenu" :key="item.title" :to="item.href"
                     class="flex-column menu-item" @click.native="changeMenu(item)">
            <Icon :type="item.icon"/>
            <span class="menu-title"> {{item.title}}</span>
        </router-link>
    </footer>
</template>
<script>
    export default {
        name: "Footer",
        data() {
            return {
                footerMenu: [
                    {
                        title: "消息",
                        href: "/message",
                        icon: "ios-chatbubbles-outline",
                        topIcon: "ivu-icon-md-notifications-outline"
                    },
                    {
                        title: "联系人",
                        href: "/contact",
                        icon: "ios-contacts-outline",
                        topIcon: "ivu-icon-ios-add-circle-outline"
                    },
                    {
                        title: "我的",
                        href: "/my",
                        icon: "md-person",
                        topIcon: "ivu-icon-md-settings"
                    },
                ]
            }
        },
        methods: {
            changeMenu(item) {
                const obj = {title: item.title, icon: item.topIcon};
                this.$emit('getMenuItem', obj);
            }
        },
        created() {
            const name = this.$route.name;
            let index=0;
            switch (name) {
                case "Message":
                    index = 0;
                    break;
                case "Contact":
                    index = 1;
                    break;
                case "My":
                    index = 2;
                    break;
                default:
                    break;
            }
            const obj = {
                title:this.footerMenu[index].title,
                icon:this.footerMenu[index].topIcon,
            }
            this.$emit("getMenuItem",obj)
        }
    }
</script>


