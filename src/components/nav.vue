<template>
  <nav class="navbar">
    <div class="navbar__wrapper">
      <div class="navbar__logo">
        <img class="navbar__path" src="/static/img/logo.png" height="70" alt="">
      </div>
      <ul class="navbar__list">
        <li class="navbar__item" v-for="item in items"> 
            <router-link :to="item.link">{{item.text}}</router-link>
        </li>
        <li class="navbar__item"> <a class="navbar__link" href="#">Our Menu </a> </li>
      </ul>
    </div>

  </nav>
</template>

<script>


export default {
  name: 'navbar',
  data () {
    return {
      items: [
        {
          text: "Home",link: "/"
        },
        {
          text: "About Us",link:"/about"
        },
        {
          text: "Contact Us",link:"contact"
        },
      ]
     
    }
  }
}
</script>


<style scoped lang="sass">
$yellow: #CDB649
.navbar
  &__wrapper
    padding: 0 10em
    width: 100%
    height: 75px
    display: flex
    color: #444
    font-family: "Julius",sans-serif
    justify-content: space-between
    flex-wrap: wrap
    font-size: .85em
  &__logo
    display: flex
    align-items: center
  &__path
    height: 50px
  &__list
    display: flex
    justify-content: space-around
  &__link
    color: #fff
    padding: .5em 1em
    border-radius: 25px
    background: $yellow
    text-decoration: none
  &__item
    display: inline-block
    line-height: 75px
    margin: 0 1em
    &:hover
      color: $yellow
      cursor: pointer

</style>

