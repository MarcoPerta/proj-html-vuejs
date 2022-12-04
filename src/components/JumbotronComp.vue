<template>
    <div>
        <div class="img-background">
            <div class="container">
                <img src="../assets/images/avada-movers-logo.png" alt="">
                <div class="navbar-button">
                    <!-- navbar con elementi dinamici -->
                    <NavbarComp v-for="(elem, index) in NavbarList" :key="index" :NavbarList="elem" />
                    <button class="btn-blue">FREE QUOTE</button>
                </div>
            </div>
            <div class="jumbotron-text">
                <h6>MOVING WITHOUT THE HASSLE</h6>
                <h2>WE MAKE IT SIMPLE</h2>
                <h6>PROFESSIONAL SERVICE WITH QUALITY AND CUSTOMER SATISFACTION</h6>
            </div>
        </div>
        <div class="free-quote">
            <font-awesome-icon icon="fa-regular fa-paper-plane" />
            <span>GET A FREE QUOTE ONLINE NOW!</span>
        </div>
    </div>
</template>

<script>
import NavbarComp from './NavbarComp.vue'

    export default {
    name: 'JumbotronComp',
    components: {
        NavbarComp
    },
    props: {
        NavbarList: Array
    }
    }
</script>

<style lang="scss" scoped>
.img-background{
    background-image: url(../assets/images/avada-movers-homeherobackground-final.jpg);
    height: 350px;
    background-repeat: no-repeat;
    background-size: cover;
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0px;
        width: 80%;
        margin: auto;
        .navbar-button{
            display: flex;
            padding: 0 5px;
            align-items: center;
            .btn-blue{
                color: white;
                border: none;
                padding: 15px;
                background-color: #1975c0;
                border-radius: 30px;
                margin-left: 15px;
            }
        }
    }
    .jumbotron-text{
        padding-top: 65px;
    }
}
.free-quote{
    color: white;
    background-color: #1b74c3;
    padding: 40px 0px;
    span{
        margin-left: 8px;
    }
}
</style>