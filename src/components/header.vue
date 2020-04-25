<template>
    <header id="header" class="flex-vertical">
        <div class="item center">
            <img :src="user.avatar" alt="" class="avatar">
        </div>
        <div class="item center">
            {{item.title}}
        </div>
        <div class="item center">
            <Icon :custom="item.icon"></Icon>
        </div>
    </header>
</template>
<script>
    export default {
        name: "Header",
        data(){
            return{
                user:JSON.parse(sessionStorage.getItem('user')),
            }
        },

        props: {
            item: Object
        },
    }
</script>


