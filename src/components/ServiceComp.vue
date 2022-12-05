<template>
    <div>
        <div class="container">
            <h5>WE ARE PROFESSIONAL</h5>
            <h2>Full-Service Solution</h2>
            <!-- ciclo sulla singola card in array di oggetti -->
            <div class="container-cards">
                <ServiceCard v-for="(elem,index) in ServicesCards" :key="index" :ServicesCards="elem" class="bg-lightgray"/>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceCard from './ServiceCard.vue'

export default {
    name: 'ServiziComp',
    components: {
        ServiceCard
    },
    props: {
        ServicesCards: Array
    }
}
</script>

<style lang="scss" scoped>
div {
    margin-bottom: 40px;

    .container {
        width: 80%;
        margin: auto;

        h5 {
            color: #585858;
            padding: 20px 0px;
        }

        h2 {
            color: #6bbb14;
            padding-bottom: 20px;
        }

        .container-cards {
            display: flex;

            .bg-lightgray {
                background-color: #e9e9e9;
            }
        }
    }
}
</style>