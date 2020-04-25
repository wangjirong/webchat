<template>
    <header id="header" class="flex-vertical">
        <div class="item">
            <img src="../assets/image/avatar1.jpg" alt="" class="avatar" >
        </div>
        <div class="item">
           {{title}}
        </div>
    </header>
</template>
<script>
    export default {
        name:"Header",
        props:{
            title:{
                type:String,
                required:true
            }
        }

    }
</script>


