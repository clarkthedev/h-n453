<template>
  <nav class="navbar ">
    <div class="navbar__wrapper">
      <div class="navbar__logo">
        <router-link to="/" >  <img class="navbar__path" src="/static/img/logo.png" height="70" alt="">
        </router-link>
      </div>
      <ul class="navbar__list">
        <li class="navbar__item" v-for="item in items"> 
            <router-link :to="item.link">{{item.text}}</router-link>
        </li>
        <li class="navbar__item"> <router-link to="/menu" class="navbar__link"> Our Menu</router-link> </li>
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
  background: #fff
  position: fixed
  top: 0
  left: 0 
  right: 0
  z-index: 9
  border-bottom: 1px solid #ccc
  img
    cursor: pointer
  a
    text-decoration: none
    &:not(.navbar__link)
      padding: .5em
      color: #777
      transition: 100ms
      &:hover
        color: #CDB649
        padding-bottom: 1em
        
  &__wrapper
    padding: 0 8rem
    width: 100%
    display: flex
    color: #444
    font-family: "Julius",sans-serif
    justify-content: space-between
    flex-wrap: nowrap
    font-size: .85em
    @media screen and (max-width: 769px)
      padding: 0 .5em
      flex-direction: column
      justify-content: center
      align-item: center
      align-content: center
      .navbar__logo
        justify-content: center
      img
        height: 55px
        position: relative
        top: 1em
      .navbar__item
        margin: 0
  &__logo
    display: flex
    align-items: center
  &__path
    height: 50px
  &__list
    display: flex
    justify-content: space-around
    flex-wrap: nowrap
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

