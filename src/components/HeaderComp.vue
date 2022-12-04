<template>
    <div>
        <PhoneIconsComp :ListIcons="ListIcons"/>
    </div>
</template>

<script>
import PhoneIconsComp from './PhoneIconsComp.vue'

    export default {
    name: 'HeaderComp',
    components: {
        PhoneIconsComp
    },
    props: {
        ListIcons: Array
    },
    data(){
    return{
       
    }
  }
    }
</script>

<style lang="scss" scoped>

</style>