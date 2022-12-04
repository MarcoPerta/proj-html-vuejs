<template>
    <div>
        <PhoneIconsComp :ListIcons="ListIcons"/>

        <JumbotronComp :NavbarList="NavbarList"/>
    </div>
</template>

<script>
import PhoneIconsComp from './PhoneIconsComp.vue'
import JumbotronComp from './JumbotronComp.vue'

export default {
    name: 'HeaderComp',
    components: {
        PhoneIconsComp,
        JumbotronComp
    },
    props: {
        ListIcons: Array,
        NavbarList: Array
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>

</style>