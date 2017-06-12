<template>
	<section class="wrapper">
		<h1> CONTACT US </h1>
		<div class="contactWrapper">

			<form class="form" id="contact-form" method="post" action="//formspree.io/torjacklark@gmail.com" >
				<div class="form-ui">
					<input type="text" name="Name" placeholder="Full Name">
					<i class="fa pa fa-user"> </i>
				</div>
				<div class="form-ui">
					<input type="Email" name="Email" placeholder="E-mail">
					<i class="fa pa fa-envelope"> </i>
				</div>
				<div class="form-ui">
					<textarea placeholder="Message" name="message" rows="5"> </textarea>
					<i class="fa pa fa-comment	"> </i>
				</div>
				<div class="form-ui">
					<input type="submit"  @click="send" value="Send Message">
				</div>
					<input class="is-hidden" type="text" name="_gotcha" hidden>
					<input type="hidden" name="_subject" value="Subject">
					<input type="hidden" name="_cc" value="email@cc.com">





			</form>
		  <iframe id="map"
		  width="50%"
		  height="450"
		  frameborder="0" style="border: 1px solid #ccc"
		  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAtZjsh7LOHcPul5mKM28x0uEmayyYu7fs
		    &q=5+Bingo+street+quezon+city" allowfullscreen>
		</iframe>
    </div>
	</section>
</template>

<script>
export default{
	mounted(){

	},methods: {
			send: function(){
				var $contactForm = $('#contact-form');
				$contactForm.submit(function(e) {
					e.preventDefault();
					$.ajax({
						url: '//formspree.io/torjacklark@gmail.com',
						method: 'POST',
						data: $(this).serialize(),
						dataType: 'json',
						beforeSend: function() {
							$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
						},
						success: function(data) {
							$contactForm.find('.alert--loading').hide();
							$contactForm.append('<div class="alert alert--success">Message sent!</div>');
						},
						error: function(err) {
							$contactForm.find('.alert--loading').hide();
							$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
						}
					});
});
			}

	}
}
</script>
<style scoped lang="sass">
input[type="submit"]
	padding: .5em 2.5em
	border: 1px solid #ccc
	outline 0
	background: 
	color: #fff
	background: #1FB6FF
	
.fa
	line-height: 40px
	padding-left: 20px
	color: #ccc
	z-index: 9
	top: 0
.form
	width: 50%
	padding: 0 3em 0 1em
.form-ui
	position: relative
.form-ui+.form-ui
	margin-top: 1em
	font-family: "Roboto", sans-serif
input,
textarea
	padding: 0 1em 0 50px
	width: 100%
	min-height: 40px
	outline: 0
	border: 1px solid #C0CCDA
	&:focus
		border: 1px solid #1FB6FF
		&+.fa
			color: #1FB6FF
textarea
	padding-top: 12px
.wrapper
	padding: .1em 0
.contactWrapper
	background: #f3f3f3
	padding: 3em
	display: flex
	justify-content: space-between
#gmap_canvas img
	max-width:none!important
	background:none!important
</style>