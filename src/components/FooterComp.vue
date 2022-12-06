<template>
    <div>
        <LinksComp :NavbarList="NavbarList"/>

        <LastComp :ListIcons="ListIcons"/>
    </div>
</template>

<script>
import LinksComp from './LinksComp.vue'
import LastComp from './LastComp.vue'

export default {
    name: 'FooterComp',
    components: {
        LinksComp,
        LastComp
    },
    props: {
        NavbarList: Array,
        ListIcons: Array
    }
}
</script>

<style lang="scss" scoped>

</style>