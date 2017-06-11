<template>
	<section class="branches">
		<div class="branches__wrapper wrapper">
			<div class="branches__title  pr t-center">
				<strong class="title__bold">OUR BRANCHES</strong>
			</div>
			<div class="branches__container">
				<div class="branches__data" v-for="branch in branches">
					<div class="branches__store"> 
						<div class="branches__result"> 
							<div class="result__mall"> {{branch.location}} </div>
							<div class="result__floor"> 4/F, Robinsons Place Manila </div>
							<div> Midtown Wing, Pedro Gil cor. </div>
							<div> Adriatico Street, Ermita  </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyDr_FxFCkvHvoOhN6O-pXRbhlKPu0BDWMQ",
    authDomain: "hainanese-delights.firebaseapp.com",
    databaseURL: "https://hainanese-delights.firebaseio.com",
    projectId: "hainanese-delights",
    storageBucket: "hainanese-delights.appspot.com",
    messagingSenderId: "102778988316"
}
let app = Firebase.initializeApp(config)
let db = app.database();
let branchRef = db.ref('branches')



export default {

  name: 'branches',
   firebase: {
    branches: branchRef
  },
  data () {
    return {
     
    }
  }
}
</script>


<style scoped lang="sass">
.result
	&__mall
		font-weight: 800
		margin-bottom: .75em
.branches
	background: #f8f8f8
	width: 100%
	&__container
		margin-top: 3em
		display: flex
		flex-wrap: wrap
		justify-content: flex-start
	&__data
		width: 33.333333%
		display: flex
		padding: 1rem
		@media screen and (max-width: 1025px) and (min-width: 768px)
			width: 50%
		@media screen and (max-width: 767px)
			width: 100%
	&__store
		border-left: 3px solid #efdd8d
		width: 100%
		box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)
		display: flex
		padding: 1em
		color: #555
		background: #fff
	&__icon
		display: inline-block
		font-size: 1.75em
		color: #d9d9d9
		min-width: 30px
	&__result
		display: inline-block

</style>

