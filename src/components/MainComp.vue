<template>
    <div>
        <HeadMainComp/>

        <!-- componente con all'interno le card ciclate -->
        <ServiceComp :ServicesCards="ServicesCards"/>

        <JumbotronMainComp/>
    </div>
</template>

<script>
import HeadMainComp from './HeadMainComp.vue'
import ServiceComp from './ServiceComp.vue'
import JumbotronMainComp from './JumbotronMainComp.vue'

export default {
    name: 'MainComp',
    components: {
        HeadMainComp,
        ServiceComp,
        JumbotronMainComp
    },
    props: {
        ServicesCards: Array
    }
}
</script>

<style lang="scss" scoped>

</style>