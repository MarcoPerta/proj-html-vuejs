<template>
    <div class="bg">
        <div class="container">
            <h6>HAPPY COSTUMERS</h6>
            <h2>Testimonials</h2>
            <div class="container-cards">
                <!-- ciclo per card dinamiche testimonial -->
                <TestimonialCard v-for="(elem,index) in TestimonialCards" :key="index" :TestimonialCards="elem"/>
            </div>
            <button class="btn-blue">READ MORE TESTIMONIALS</button>
        </div>
    </div>
</template>

<script>
import TestimonialCard from './TestimonialCard.vue'

export default {
    name: 'TestimonialComp',
    components: {
        TestimonialCard
    },
    props: {
        TestimonialCards: Array
    }
}
</script>

<style lang="scss" scoped>

.bg{
    background-image: url(../assets/images/avada-movers-testimonial-background.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    .container {
    width: 80%;
    margin: auto;

    h6 {
        color: #585858;
        padding-top: 40px;
    }

    h2 {
        color: #6bbb14;
        padding: 20px 0px;
    }

    .container-cards {
        display: flex;
    }
    .btn-blue {
        color: white;
        border: none;
        padding: 15px;
        background-color: #1975c0;
        border-radius: 30px;
        margin-left: 15px;
        margin: 40px 0px;
    }
}
}
</style>