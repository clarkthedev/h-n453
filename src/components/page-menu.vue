<template>
	<div class="menuList wrapper">
		<div class="menuList__wrapper">
				<div class="menuList__filter">
					<h1>Menu</h1>
				<ul class="filter__list">
					<li class="filter__item filter__item--is-active"> <a href="javascript:void(0);"> All</a></li>
					<li class="filter__item"> <a href="javascript:void(0);"> Rice Dishes</a></li>
					<li class="filter__item"> <a href="javascript:void(0);"> Entree</a></li>
					<li class="filter__item"> <a href="javascript:void(0);"> Noodles & Soup</a></li>
					<li class="filter__item"> <a href="javascript:void(0);"> Drinks & Dessert</a></li>
				</ul>
			</div>
			<div class="menuList__list">
				<div class="menuList__item" v-for="n in 9">
					<div class="menuList__color pr">
						<div class="menuList__img">
							<img class="menuList__path" v-lazy="'static/img/menu/_MG_0570.JPG'">
							<div v-lazy:background-image="imgObj"></div>
						</div>
						<div class="menuList__details pr">
							<strong class="menuList__name"> Hainanese Chicken </strong>
							<div class="menuList__description">Lorem ipsum dolor sit amet, consectetur adipisicing epariatur quisquam ut dicta quis, voluptatem s</div>
							<div class="pa menuList__price">P400.00</div>
							<div class="pa menuList__category">Rice Dishes </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				 imgObj: {
	        src: 'static/img/menu/_MG_0570.JPG',
	        error: 'http://placehold.it/150',
	        loading: '/static/img/loading.gif'
		      }
		    }
			}
		}
	
</script>

<style scoped lang="sass">
h1
	font-family: "Roboto Slab",serif
	font-weight: normal
	color: #333
.wrapper
	padding: 2em 0
	@media screen and (max-width: 880px)
		padding: .5em
		margin: 0
.menuList
	@media screen and (max-width: 550px)
		h1
			text-align: center
	ul
		list-style: none
	&__wrapper
		display: flex
		flex-direction: row
		flex-wrap: nowrap
		justify-content: space-between
		@media screen and (max-width: 880px)
			flex-wrap: wrap
	&__list
		width: 85%
		font-size: .85em
		@media screen and (max-width: 880px)
			width: 100%
	&__filter
		text-align: right
		padding-right: 1.5em
		border-right: 1px dashed #ccc
		@media screen and (max-width: 880px)
			border: 0
			padding: 0
			text-align: left !important
	&__item
		padding: .35em
		width: 33.33%
		display: inline-block
		@media screen and(max-width: 880px)
			width: 50%
		@media screen and(max-width: 426px)
			width: 100%
	&__color
		display: flex
		padding: 2em 1em
		background: #f7f7f7
		border: 1px solid #eee
		@media screen and (max-width: 1280px)
			flex-direction: column
	&__path
		max-width: 100%
		width: 300px
		padding-right: .55rem
		@media screen and (max-width: 880px)
			width: 100%
	&__description
		margin: 1em 0 2.5em 0
		color: #777
		word-break: break-word
	&__price
		right: 0
		bottom: -15px
		color: #C41C8C
		font-weight: 800
	&__category
		bottom: -15px
		color: #aaa

.filter
	&__list
		text-align: right
		@media screen and (max-width: 880px)
			text-align: center
		a
			color: #333
			text-decoration: none
	&__item
		padding: .5em
		@media screen and (max-width: 880px)
			display: inline-block
			text-align: left
		&+.filter__item
			margin-top: 1em
		&--is-active
			a
				color: #CDB649

</style>


