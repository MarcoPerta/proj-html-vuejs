<template>
    <div class="bg-photo">
        <div class="square">
                <h4>WE REMOVE THE HEADACHE FROM MOVING</h4>
                <h2>Move With Ease</h2>
                <p>With our simple service we can take you from getting a quote,
                    right through to being in your home with all of your belongings
                    securely packed and safely delivered, even in the rooms of your choice.
                </p>
                <button class="btn-blue">GET A FREE QUOTE NOW</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'JumbotronMainComp',

    }
</script>

<style lang="scss" scoped>
.bg-photo {
    height: 500px;
    background-image: url(../assets/images/avada-movers-movewithease-background-new.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    padding-right: 45px;
    .square {
            width: 455px;
            background-color: #6bbb14;
            border: 10px solid #4c8d53;
            color: white;
            align-self: center;
            padding: 30px;

            h4,h2,p{
                padding: 10px 0px;
            }

            h2{
                border-bottom: 1px solid white;
                
            }

            p{
                line-height: 25px;
            }
    
            .btn-blue {
                color: white;
                border: none;
                padding: 15px;
                background-color: #1975c0;
                border-radius: 30px;
                margin-left: 15px;
                margin-bottom: 15px;
            }
        }
    }
</style>