<template>
    <header id="header" class="flex-vertical">
        <div class="item center">
            <img src="../assets/image/avatar1.jpg" alt="" class="avatar">
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
        props: {
            item: Object
        },
        mounted() {
            console.log(this.item)
        }
    }
</script>


