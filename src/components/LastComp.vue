<template>
    <div>
        <div class="container">
            <p>Copyright 2012-2020 | Avada Theme by Theme Fusion | All Rights Reserved | Powereb by Marco Perta</p>
            <div class="container-icons">
                <IconsComp v-for="(elem,index) in ListIcons" :key="index" :ListIcons="elem"/>
            </div>
        </div>
    </div>
</template>

<script>
import IconsComp from './IconsComp.vue'

export default {
    name: 'LastComp',
    components: {
        IconsComp
    },
    props: {
        ListIcons: Array
    }
}
</script>

<style lang="scss" scoped>
.container{
    background-color: #6bbb14;
    color: white;
    padding: 30px 0px;
    p{
            padding-bottom: 25px;
        }
    .container-icons{
        display: flex;
        justify-content: center;
    }
}
</style>