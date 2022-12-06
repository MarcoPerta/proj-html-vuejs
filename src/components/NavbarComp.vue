<template>
    <div>
        <a :href="NavbarList.link"><strong>{{ NavbarList.name }}</strong></a>
    </div>
</template>

<script>
export default {
    name: 'NavbarComp',
    props: {
        NavbarList: Object
    }
}
</script>

<style lang="scss" scoped>
a{
    color: black;
    padding: 0px 5px;
    text-decoration: none;
}

div a:hover{
    color: #6bbb14;
}
</style>