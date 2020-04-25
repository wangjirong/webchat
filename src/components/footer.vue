<template>
    <footer id="footer" class="flex-vertical">
        <router-link v-for="item in footerMenu" :key="item.title" :to="item.href"
                     class="flex-column menu-item" @click.native="changeMenu(item.title)">
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
                        icon: "ios-chatbubbles-outline"
                    },
                    {
                        title: "联系人",
                        href: "/contact",
                        icon: "ios-contact"
                    },
                    {
                        title: "我的",
                        href: "/my",
                        icon: "md-person"
                    },

                ]
            }
        },
        methods:{
            changeMenu(title){
                this.$emit('getMenuTitle',title);
            }
        }
    }
</script>


