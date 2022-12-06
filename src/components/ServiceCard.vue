<template>
        <div>
            <div class="container-img">
                <img :src="require(`../assets/images/${ServicesCards.img}`)" alt="">
            </div>
            <h3>{{ServicesCards.title}}</h3>
            <p>{{ServicesCards.paragraph}}</p>
            <button class="btn-blue">READ MORE</button>
        </div>
</template>

<script>
export default {
    name: 'ServiceCard',
    props: {
        ServicesCards: Object
    }
}
</script>

<style lang="scss" scoped>

div {
    margin: 5px;

    img,h3,p{
        padding-bottom: 20px;
    }

    img{
        width: 90%;
        padding: 10px;
        transition: transform 1s;
    }

    .container-img :hover {
        transform: scale(1.1,1.1);
    }

    p{
        line-height: 25px;
    }

    h3{
        color: #1975c0;
    }

    .btn-blue {
        color: white;
        border: none;
        padding: 15px;
        background-color: #1975c0;
        border-radius: 30px;
        margin-left: 15px;
        margin-bottom: 10px;

    }
}
</style>