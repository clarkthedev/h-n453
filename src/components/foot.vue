<template>
  <footer class="footer wrapper">
    <div class="footer__image">
      <img src="/static/img/logo.png" alt="">
    </div>
        <div class="footer__socialApp">
       <div class="footer__title">ADDRESS</div>
        <p style="text-align:"> 5 Bingo Street. <br>
        Brgy. Seinna Sta. Mesa Heights <br>  
        Quezon City
        </p>
    </div>
    <div class="footer__contact">

      <div class="footer__title">CONTACT US</div>

      <div class="footer__wrapperLabel">
        <label for="" class="footer__bold"><i class="fa footer__cIcon fa-phone"> </i> CALL US</label>
        <div class="footer__result"> (+63) 922 423 2345</div>
      </div>

    </div>

    <div class="footer__socialApp">
       <div class="footer__title">CONNECT WITH US</div>
       <div class="footer__icons">
         <i class="fa fa-facebook"> </i>
         <i class="fa fa-twitter"> </i>
         <i class="fa fa-google"> </i>
       </div> 
    </div>


  </footer>
</template>

<script>
export default {
  name: 'foot'
}
</script>


<style scoped lang="sass">
.footer
  display: flex
  justify-content: space-around
  flex-wrap: wrap
  min-height: 200px
  position: relative
  align-items: center
  &__image
    @media screen and (max-width: 1280px)
      width: 100%
      img
        display: block
        margin: 0 auto 1em auto
  @media screen and (max-width: 768px)
    align-items: flex-start !important
    flex-direction: column
    padding-top: 0 !important
    img
      height: 75px !important
      position: relative
      right: 1em
    >div+div
      margin-top: 2.5em
    >div
      width: 100%
    >*
      text-align: center
  p
    color: #333
  &::after
    position: absolute
    content: ""
    display: table
    width: 100%
    height: 1px
    background: #ccc
    top: -20px
    
  &__title
    color :#9F8635
    font-weight: 800
    padding-bottom: 1.25rem
    font-size: 1.25rem
  &__wrapperLabel
    margin-bottom: .5rem
  &__bold
    font-weight: 800
    color: #333
    font-size: .85rem
  &__cIcon
    width: 13px
    line-height: 2
    color: #aaa
  &__result
    color: #333
    font-family: "Julius Sans",sans-serif
  &__image
    >img
      height: 100px
  &__contact
  &__socialApp
  &__icons
    margin-bottom: 1em
    .fa
      height: 35px
      width: 35px
      line-height: 35px
      background: #f7f7f7
      text-align: center
      color: #aaa
      font-size: 2rem
      transition: 500ms all ease
      cursor: pointer
      &:hover
        background: #D10092
        color:#fff
</style>

