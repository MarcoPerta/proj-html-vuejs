<template>

    <div class="bg-Lima">
        <div class="set-father">
            <div class="phone-box">
                <font-awesome-icon icon="fa-solid fa-phone" class="phone"/>
                <span>Call us for a Free Quote: 1.800.555.6789</span>
            </div>
            <div class="icons">
                <!-- componente per icone social dinamiche -->
                <IconsComp v-for="(elem,index) in ListIcons" :key="index" :ListIcons="elem"/>
            </div>
        </div>
    </div>
</template>

<script>
import IconsComp from './IconsComp.vue'

    export default {
        name: 'PhoneIconsComp',
        components: {
        IconsComp
    },
    props: {
        ListIcons: Array
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.bg-Lima{
    background-color: #6bbb14;
    width: 100%;
    .set-father {
            width: 80%;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: white;
            padding: 8px 0px;
            .phone-box {
                    .phone{
                        margin: 0 10px;
                    }
                }
            .icons{
                display: flex;
            }    
        }
}
</style>