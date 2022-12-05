<template>
    <div>
        <HeadMainComp/>

        <!-- componente con all'interno le card ciclate -->
        <ServiceComp :ServicesCards="ServicesCards"/>

        <JumbotronMainComp/>

        <TestimonialComp :TestimonialCards="TestimonialCards"/>

        <FreeQuoteMainComp/>
    </div>
</template>

<script>
import HeadMainComp from './HeadMainComp.vue'
import ServiceComp from './ServiceComp.vue'
import JumbotronMainComp from './JumbotronMainComp.vue'
import TestimonialComp from './TestimonialComp.vue'
import FreeQuoteMainComp from './FreeQuoteMainComp.vue'

export default {
    name: 'MainComp',
    components: {
        HeadMainComp,
        ServiceComp,
        JumbotronMainComp,
        TestimonialComp,
        FreeQuoteMainComp
    },
    props: {
        ServicesCards: Array,
        TestimonialCards: Array
    }
}
</script>

<style lang="scss" scoped>

</style>