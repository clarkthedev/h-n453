<template>
	<section class="slider">
		<div class="slider__wrapper">
			<img src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t31.0-8/14257727_530042183848095_8976476999735116597_o.jpg?oh=2e429bdc4d771667ed1fd8a5299413ad&oe=59AAA93A" alt="">
		</div>
				<div class="slider__wrapper">
			<img src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t31.0-8/17620292_626058120913167_9073651184778952554_o.jpg?oh=33d1bbd51e265d1a846c0023cf447ecd&oe=59E72713" alt="">
		</div>



	</section>
</template>

<script>
export default {
  name: 'slider',
  mounted() {
	  $('.slider').slick({
	  	autoplay: true,
	  	autoplaySpeed: 4000,
	  	arrows: false
	  });
  },
  data () {
    return {
     
    }
   }
  }

</script>


<style scoped lang="sass">
.slider__wrapper
	max-height: 600px
	overflow: hidden
	width: 100%
	@media screen and (max-width: 768px)
		margin-top: 70px
	img
		max-width: 100%
		height: auto
</style>
<style>
	/* Slider */
.slick-slider
{
    position: relative;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
        touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}

.slick-list
{
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
}
.slick-list:focus
{
    outline: none;
}
.slick-list.dragging
{
    cursor: pointer;
    cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list
{
    -webkit-transform: translate3d(0, 0, 0);
       -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
         -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
}

.slick-track
{
    position: relative;
    top: 0;
    left: 0;

    display: block;
}
.slick-track:before,
.slick-track:after
{
    display: table;

    content: '';
}
.slick-track:after
{
    clear: both;
}
.slick-loading .slick-track
{
    visibility: hidden;
}

.slick-slide
{
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
}
[dir='rtl'] .slick-slide
{
    float: right;
}
.slick-slide img
{
    display: block;
}
.slick-slide.slick-loading img
{
    display: none;
}
.slick-slide.dragging img
{
    pointer-events: none;
}
.slick-initialized .slick-slide
{
    display: block;
}
.slick-loading .slick-slide
{
    visibility: hidden;
}
.slick-vertical .slick-slide
{
    display: block;

    height: auto;

    border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
    display: none;
}
</style>

