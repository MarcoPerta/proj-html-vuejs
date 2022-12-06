<template>
    <div>
        <div class="container">
            <div>
                <h4>ABOUT</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem dicta possimus eius explicabo perspiciatis ipsam reiciendis ab laborum tempora nam alias exercitationem aliquid ipsa animi, asperiores quis delectus numquam culpa?</p>
                <img src="../assets/images/avada-movers-logo.png" alt="">
            </div>
            <div>
                <h4>AVADA MOVERS</h4>
                <ul>
                    <li><a href=""><font-awesome-icon icon="fa-solid fa-chevron-right" />{{NavbarList[0].name}}</a></li>
                    <li><a href=""><font-awesome-icon icon="fa-solid fa-chevron-right" />{{NavbarList[1].name}}</a></li>
                    <li><a href=""><font-awesome-icon icon="fa-solid fa-chevron-right" />{{NavbarList[2].name}}</a></li>
                    <li><a href=""><font-awesome-icon icon="fa-solid fa-chevron-right" />{{NavbarList[4].name}}</a></li>
                    <li><a href=""><font-awesome-icon icon="fa-solid fa-chevron-right" />Free Quote</a></li>
                </ul>
            </div>
            <div>
                <h4>RECENTS POSTS</h4>
                <ul>
                    <li><a href=""><font-awesome-icon icon="fa-solid fa-chevron-right" />Heading Out To College?</a></li>
                    <li><a href=""><font-awesome-icon icon="fa-solid fa-chevron-right" />Moving Your Business?</a></li>
                    <li><a href=""><font-awesome-icon icon="fa-solid fa-chevron-right" />Outstanding Quality</a></li>
                    <li><a href=""><font-awesome-icon icon="fa-solid fa-chevron-right" />Cost of Moving</a></li>
                    <li><a href=""><font-awesome-icon icon="fa-solid fa-chevron-right" />Best Moving Tips</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LinksComp',
    props: {
        NavbarList: Array
    }
}
</script>

<style lang="scss" scoped>
.container{
    width: 80%;
    margin: auto;
    display: flex;
    text-align: left;
    padding: 20px 0px;

    div{
        width: calc(100% / 3);
        color: black;

        p{
            line-height: 25px;
        }

        h4{
            padding-bottom: 25px;
        }

        ul{
            list-style: none;
            li{
                padding: 20px 0px;
            }
        }

        a{
            text-decoration: none;
            color: black;
        }

        img{
            padding: 20px 0px;
        }

        .fa-chevron-right{
            padding: 0px 5px;
            font-size: 0.813rem;
        }
    }

    li a:hover {
        color: #6bbb14;
    }
}
</style>