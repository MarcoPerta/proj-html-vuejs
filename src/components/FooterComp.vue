<template>
    <div>
        <LinksComp :NavbarList="NavbarList"/>
    </div>
</template>

<script>
import LinksComp from './LinksComp.vue'

export default {
    name: 'FooterComp',
    components: {
        LinksComp
    },
    props: {
        NavbarList: Array
    }
}
</script>

<style lang="scss" scoped>

</style>