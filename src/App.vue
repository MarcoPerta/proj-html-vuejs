<template>
  <div id="app">

    <HeaderComp :ListIcons="Icons" :NavbarList="Navbar"/>

    <MainComp/>

    <FooterComp/>

  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp
  },
  data() {
    return {
      // array per icone social dinamiche
      Icons: [
        {
          "logo": 'fa-brands fa-facebook'
        },
        {
          "logo": 'fa-brands fa-twitter'
        },
        {
          "logo": 'fa-brands fa-instagram'
        },
        {
          "logo": 'fa-brands fa-youtube'
        }
      ],
      // array per elementi dinamici navbar
      Navbar: [
        {
          "name": 'Home',
          "link": '#http://a.com'
        },
        {
          "name": 'Rates',
          "link": '#http://b.com'
        },
        {
          "name": 'Testimonials',
          "link": '#http://c.com'
        },
        {
          "name": 'FAQ',
          "link": '#http://d.com'
        },
        {
          "name": 'Blog',
          "link": '#http://e.com'
        },
        {
          "name": 'Contact',
          "link": '#http://f.com'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
