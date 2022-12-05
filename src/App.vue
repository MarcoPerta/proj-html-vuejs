<template>
  <div id="app">

    <HeaderComp :ListIcons="Icons" :NavbarList="Navbar"/>

    <MainComp :ServicesCards="ServicesCards"/>

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
      ],
      // array per le card dinamiche del main -- ServiceComp
      ServicesCards: [
        {
          "img": 'avada-movers-serviceonephoto-final-400x255.jpg',
          "title": 'Two Man Teams',
          "paragraph": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque aliquam, maxime labore esse pariatur accusamus, facilis odit voluptatum non, obcaecati quaerat saepe accusantium. Fuga facere harum veniam ducimus reprehenderit?'
        },
        {
          "img": 'avada-movers-servicetwophoto-final-400x255.jpg',
          "title": 'We Do All The Lifting',
          "paragraph": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque aliquam, maxime labore esse pariatur accusamus, facilis odit voluptatum non, obcaecati quaerat saepe accusantium. Fuga facere harum veniam ducimus reprehenderit?'
        },
        {
          "img": 'avada-movers-servicethreephoto-final-400x255.jpg',
          "title": 'Coast To Coast',
          "paragraph": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque aliquam, maxime labore esse pariatur accusamus, facilis odit voluptatum non, obcaecati quaerat saepe accusantium. Fuga facere harum veniam ducimus reprehenderit?'
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
