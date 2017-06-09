<template>
  <div id="app">
    <router-view></router-view>

      <navbar> </navbar>
      <slider> </slider>
      <section class="wrapper">
         <div class="aboutUs">
            <div class="aboutUs__details">
              <div class="aboutUs__title title">
                <div class="title__bold">
                  OUR STORY
                </div>
              </div>
              <div class="aboutUs__description">
                <p>
                  Hainanese delights had its bright start in 2011 at robinsons galleria when
                  Our company broadened culinary horizons by branching out into singaporean
                  Cuisine. Already an advocate of chinese food since late 2007, we continued our
                  Passion for asian flavor by bringing singaporean food to the philippines. While
                  Chinese and japanese restaurant already have strong footholds in the filipino,
                  Singaporean dishes still remain largely unknown. However, the creation of
                  Hainanese delights seeks to change that.
                  <a href="" class="link">Read more abous us.</a>
                </p>
              </div>
            </div>
            <div class="aboutUs__image">
      			<img class="aboutUs__image1" src="/static/img/menu/HainaneseDelights_05092014-301.JPG">
      			<img class="aboutUs__image2" src="/static/img/menu/HainaneseDelights_05092014-322.JPG">
            </div>
        </div>
      </section>

	  <branches> </branches>	

      <section class="menu wrapper">
      	<div class="menu__images">
      		<div class="menu__img">
      			<img src="/static/img/menu/HainaneseDelights_05092014-265.JPG">
      		</div>

      		<div class="menu__img">
      			<img src="/static/img/menu/HainaneseDelights_05092014-088.JPG">
      		</div>
      		<div class="menu__img">
      			<img src="/static/img/menu/HainaneseDelights_05092014-039.JPG">
      		</div>
      		<div class="menu__img">
      			<img src="/static/img/menu/HainaneseDelights_05092014-301.JPG">
      		</div>
      		<div class="ourMenu">
      			<div class="ourMenu__border">
      				<div class="ourMenu__text">
      					<div> Our </div> 
      					<strong> MENU </strong>
      				</div>
      			</div>
      		</div>
      	</div>
		<div class="menu__description">
		    <div class="title__bold right">
             OUR FOOD
           </div>
	   	 <p>
			Hainanese Delights wants to expand the palette of the average Filipino by introducing Singaporean cuisine to the general public. The main goal is to put forth delicious dishes that will become staple in the Philippines.

	    </p>
	    <div class="menu__btnWrapper">
	    	<button class="z-depth-1"> VIEW FULL MENU </button>
	    </div>
    	</div>
      </section>
      <foot></foot>


    
  </div>
</template>

<script>
import navbar from './components/nav.vue'
import slider from './components/slider.vue'
import branches from './components/branches.vue'
import foot from './components/foot.vue'



export default {
  name: 'app',
  components: {
    navbar,
    slider,
    branches,
    foot
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
} 
</script>

<style lang="sass">
.ourMenu
	content: ""
	display: table
	position: absolute
	transform: translate(-50%,-50%)
	left: 50%
	top: 50%
	background: rgba(0,0,0,.7)
	height: 180px
	width: 	180px

	&__border
		color: #fff
		text-align: center
		border: 2px solid #CDB649
		height: 165px
		width: 165px
		position: absolute
		top: 50%
		left: 50%
		transform: translate(-50%,-50%)
	&__text
		position: absolute
		top: 50%
		left: 50%
		font-size: 2em
		line-height: 25px
		transform: translate(-50%,-50%)
		> div
			color: #CDB649
			font-family: "Alex Brush", cursive
		> strong
			color: #fff
			font-family: "Julius sans", serif
.t-center
	text-align: center
.pr
  position: relative
.wrapper
  margin: 3em 10em
  padding: 5em 0
  @media screen and (max-width: 769px)
    padding: 4em 0
    margin: 3em
.aboutUs
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  &__details
    width: 50%
    @media screen and (max-width: 940px)
      width: 100%

  &__description
    line-height: 1.65
    color: #555
  &__image
    position: relative
    
  &__image1,
  &__image2
    height: 230px
    border: 2px solid #fff
    @media screen and (max-width: 940px)
      height: initial
      width: 100%
      margin-top: 3em
  &__image2
  	position: absolute
  	top: -1.5em
  	left: -1.5em

  	
.title
  margin-bottom: 1.5em
  &__bold
    font-family: "Roboto",serif
    font-weight: 600
    color: #333
    font-size: 2em
    position: relative
    display: inline
    &::after
    	content: "Discover"
    	font-weight: normal
    	font-family: 'Alex Brush', cursive;
    	position: absolute
    	display: table
    	left: 0
    	top: -40px
    	color: #e4cd63
    	font-size: 3rem
    &.right::after
    	content: "Discover"
    	right: 0
    	left: initial !important

.menu
	display: flex
	justify-content: space-between
	flex-direction: row
	&__btnWrapper
		width: 100%
		button
			background: #CDB649
			color: #fff 
			font-family: "Julius sans",serif
			outline: 0
			border: 1px solid #999
			cursor: pointer
			margin: 1em 0
			font-weight: 700
			transition: 100ms ease
			padding: .5em 3em
			&:hover
				background: #333
	@media screen and (max-width: 1025px)
		flex-direction: column
	&__description
		text-align: right
		width: 	40%
		line-height: 1.65
		@media screen and (max-width: 1025px)
      text-align: center
      margin: auto
      width: 100%

	&__images
		position: relative
		display: inline-flex
		width: 50%
		flex-direction: row
		flex-wrap: wrap
		@media screen and (max-width: 1025px)
			order: 2
			margin: auto
			padding-top: 2em
	&__img
		width: 	50%
		padding: 0 .15rem
		img
			max-width: 100%
			width: 100%

</style>
