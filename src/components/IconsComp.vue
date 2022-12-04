<template>
    <div>
        <a href="#"><font-awesome-icon :icon="ListIcons.logo"/></a>
    </div>
</template>

<script>
    export default {
        name: 'IconsComp',
        props: {
            ListIcons: Object
        }
        
    }
</script>

<style lang="scss" scoped>
a{
    color: white;
    // 16 px
    font-size: 1rem; 
    margin: 0px 5px;
}
</style>