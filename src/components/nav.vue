<template>
  <nav class="navbar">
    <div class="navbar__wrapper">
      <div class="navbar__logo">
        <img src="/static/img/logo.png" height="70" alt="">
      </div>
      <ul class="navbar__list">
<!--         <li class="navbar__item" v-for="item in items"> {{item.text}} </li>
        <li class="navbar__item"> <a class="navbar__link" href="#">Our Menu </a> </li> -->

         

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
          text: "Home"
        },
        {
          text: "About Us"
        },
        {
          text: "Contact Us"
        },
        {
          text: "Branches"
        }
      ]
     
    }
  }
}
</script>


<style scoped lang="sass">
$yellow: #CDB649
.navbar
  &__wrapper
    width: 100%
    height: 75px
    display: flex
    font-weight: 600
    color: #444
    font-family: "Julius",sans-serif
    justify-content: space-between
    flex-wrap: wrap
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

