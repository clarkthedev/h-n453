     <template>
     <section>
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
                   <router-link to="/about" class="link">Read more about us.</router-link>
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
	    	<router-link to="/menu" > 
       <button @click="gotop" class="z-depth-1"> VIEW FULL MENU </button>
        </router-link> 
	    </div>
    	</div>
      </section>
     </section>
      </template>

      <script>
				import slider from './slider.vue'
				import branches from './branches.vue'

				export default{
					name :'home',
					components:{
						branches,
						slider
					},
          methods:{
            gotop(){
              $(window).scrollTop(0);
            }
          }
				}
      </script>