<template>
    <div>
        <img :src="require(`../assets/images/${TestimonialCards.img}`)" alt="">
        <h2>{{TestimonialCards.name}}</h2>
        <p><em> {{TestimonialCards.description}}</em></p>
    </div>
</template>

<script>
export default {
    name: 'TestimonialCard',
    props: {
        TestimonialCards: Object
    }
}
</script>

<style lang="scss" scoped>
div {
    margin: 5px;

    img {
        border-radius: 50%;
    }

    h2 {
        color: #1975c0;
        padding: 30px 0px;
    }
}
</style>