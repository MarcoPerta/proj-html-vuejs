<template>
    <div>
        <HeadMainComp/>

        <!-- componente con all'interno le card ciclate -->
        <ServiceComp :ServicesCards="ServicesCards"/>
    </div>
</template>

<script>
import HeadMainComp from './HeadMainComp.vue'
import ServiceComp from './ServiceComp.vue'

export default {
    name: 'MainComp',
    components: {
        HeadMainComp,
        ServiceComp
    },
    props: {
        ServicesCards: Array
    }
}
</script>

<style lang="scss" scoped>

</style>