<template>
    <div id="home">
        <elHeader :item="item"></elHeader>

        <router-view></router-view>
        <elFooter @getMenuItem="getMenuItem"></elFooter>
    </div>
</template>
<script>
    export default {
        name: "Home",
        data() {
            return {
                item: {}
            }
        },
        components: {
            elHeader: () => import('../components/header'),
            elFooter: () => import('../components/footer')
        },
        methods: {

            getMenuItem(item) {
                this.$nextTick(() => {
                    this.item = item;
                })
            }
        },
    }
</script>


