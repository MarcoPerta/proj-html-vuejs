<template>
    <div class="bg">
        <div>
            <h2>Request A Free Quote</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed deleniti temporibus iste sit sequi quibusdam, cum voluptate nostrum, itaque animi placeat blanditiis doloremque accusamus veritatis nobis debitis obcaecati numquam asperiores?</p>
            <button class="btn-blue">CLICK HERE</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FreeQuoteMainComp',
    }
</script>

<style lang="scss" scoped>
div {
    padding: 60px;
    .bg {
        background-image: url(../assets/images/avada-movers-request-quote-background.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        border-bottom: 10px solid #69b14f;

        h2 {
            color: #6bbb14;
            padding-bottom: 20px;
        }

        p {
            line-height: 25px;
            padding-bottom: 20px;
        }

        .btn-blue {
            color: white;
            border: none;
            padding: 15px;
            background-color: #1975c0;
            border-radius: 30px;
            margin-left: 15px;
        }
    }
}
</style>