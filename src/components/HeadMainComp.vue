<template>
    <div class="bg-lightgrey">
        <div class="container">
            <h5>HEADACHE FREE</h5>
            <h2>Award Winning <br> Moving Company</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur culpa magnam maxime dolores amet quo temporibus et, totam porro exercitationem odio molestiae est aspernatur debitis, ducimus facilis iusto eos ex.</p>
            <button class="btn-blue">READ OUR TESTIMONIAL</button>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'HeadMainComp',
    }
</script>

<style lang="scss" scoped>
.bg-lightgrey{
    background-color: #e9e9e9;
    .container{
        text-align: center;
        padding: 30px 120px;
        
        h5{
            color: #585858;
        }
        h2{
            color: #6bbb14;
        }

        p{
            line-height: 30px;
        }
        .btn-blue{
                color: white;
                border: none;
                padding: 15px;
                background-color: #1975c0;
                border-radius: 30px;
                margin-left: 15px;
            }
        h5,h2,p{
            padding-bottom: 20px;
        }    
    }
}
</style>