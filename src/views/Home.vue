<template>
    <div id="home">
        <elHeader :title="currentTitle"></elHeader>
        <router-view></router-view>
        <elFooter @getMenuTitle="getMenuTitle"></elFooter>
    </div>
</template>
<script>
    export default {
        name:"Home",
        data(){
            return {
                currentTitle:""
            }
        },
        components:{
            elHeader:()=>import('../components/header'),
            elFooter:()=>import('../components/footer')
        },
        methods:{
            getMenuTitle(title){
                this.currentTitle = title;
            }
        }

    }
</script>


