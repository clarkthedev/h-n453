<template>
  <div id="app">
      <navbar> </navbar>

      <router-view> </router-view>
      <foot> </foot>    
  </div>
</template>

<script>
import navbar from './components/nav.vue'
import foot from './components/foot.vue'

export default {
  name: 'app',
  components: {
    navbar,
    foot
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
  
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
.pa
  position: absolute
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
p
  line-height: 1.6
</style>
