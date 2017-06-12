<template>

	<section class="wrapper" id="about">
		<h1>ABOUT US</h1>
		<div class="about-page">
			<div class="half-width about">
				<p>
			Hainanese Delights had its bright start in 2011 at robinsons galleria when our company broadened culinary horizons by branching out into singaporean cuisine. already an advocate of chinese food since late 2007, we continued our passion for asian flavor by bringing singaporean food to the philippines. While chinese and japanese restaurant already have strong footholds in the filipino, singaporean dishes still remain largely unknown. However, the creation of hainanese delights seeks to change that. The cuisine which centers on singaporean’s national dish hainanese chicken appeals to filipino taste being both <span> savory and affordable </span> . But it allso has the exotic singaporean flavor which adds a different twist to the dishes, yet remain affordable price.
			</p>
			<p>
			We have a strong history with asian cuisine, having two successful chinese restaurants under our belt. <span> The first ever restaurant chinoy king</span>, put up in december 2017; thereafter, in september 2008, shainghai cuisine was launched to great results. so, already seasoned restaurateurs, we know the ins and outs of building a thriving restaurant. The experience in putting up food business gives us a working knowledge about creating the best restaurant possible. now we set our sights on advancing singaporean food. Our new venture hainanese delights benefits from that working knowledge. We have crafted the best restaurant possible, with experienced chefs and staff to provide an <span> excellent dining experience to our valued guests </span>. And with a mindset of quality above anything else, and an adventorous spirit, we hope to give filipino clients more hainanese delights. And with a passion for cooking and a wealth of restaurant experience, the results are a restaurant that has top quality in terms of ambiance, service and most especially food.
			</p>
		</div>
		<div class="half-width policyWrapper ">
			<div class="about-page__policy">
			<h2><i class="fa fa-bullseye"> </i> Mission</h2> 
				
				<p>Our mission is to create the best specialty restaurant possible by offering quality food experience by serving the best hainanese dishes possible. we will strive to reach this goal through employing the best staff, using top quality ingredients and creating relaxed and modern interior restaurant ambiance.</p>
			</div>
			<div class="about-page__policy">
			<h2><i class="fa fa-eye"> </i> Vision</h2>
	
				<p>Hainanese delghts wants to expand the palate of the average filipino by introducing singaporean cuisine to the general public. the main goal is to put forth delicious dishes that will become staple in the philippines.</p>
			</div>
			<div class="about-page__policy">
			<h2><i class="fa fa-file-text-o"></i> Company Policy</h2>
				
				<p>Making utmost effort to provide excellent service and high quality food by continously assessing its validity and making improvement as needed.</p>
			</div>
		</div>
	</div>
	</section>	
</template>
<script>
	export default{

	}
</script>
<style lang="sass" scoped>
.wrapper
	padding: 2em 0
	@media screen and(max-width: 769px)
		margin: 6em .15em 0 .15em
		padding: 0 1em	
.fa
	height: 20px
	width: 20px
	font-family: ""
	margin-right: .25em
	background: #CDB649
	color: #CDB649
h2
	margin-bottom: .5em
.policyWrapper
	display: flex
	flex-direction: column
	justify-content: space-between
	margin-left: 5em
	
h1,
h2
	margin-top: 0
	color: #444
	font-family: "Roboto", serif
.about-page
	display: flex
	@media screen and (max-width: 1025px)
		flex-direction: column
	&__policy
		padding: 0 1em 1em
		border-left: 1px solid #CDB649
		&+.about-page__policy
			margin-top: 1em
span
	color: #CDB649
p
	color: #555
.full-width
	width: 40%
.half-width
	width: 50%
	@media screen and (max-width: 1025px)
		width: 100%
		margin: 1em 0
p+p
	margin-top: 16px
</style>