<template>
 <main>
  <section class="parallax">
    <div class="parallax-img" :style="{ 'background-image': `url(https://image.tmdb.org/t/p/original${content.backdrop_path})` }"/>
    <div class="highlight">
      <div class="container my-row">
        <div class="thumb">
          <img :src="`https://image.tmdb.org/t/p/original${content.poster_path}`" alt="">
        </div>

        <div class="content">
          <h2 class="show-title">
           {{content.title}}
          </h2>
          <h3 class="show-category">
              {{this.camelCase(type)}}
          </h3>
          <div class="rate-star">
           <p class="rate-star-count">
             {{content.vote_average}}
           </p>
            <b-form-rating  v-model="rating" no-border inline  readonly precision="1"></b-form-rating>
            <div class="imdb-badge">
              <span>{{content.vote_average}}/10</span> <img src="img/imdb.png" alt="">
            </div>
         </div>
         
         <!-- <div class="time-local">
            <span>{{content.runtime + " Minutes"}}</span> <span v-show="content.production_companies">-</span> <span v-show="content.production_companies">{{content.production_companies[content.production_companies.length - 1].origin_country}}</span>
         </div> -->
            <ul class="categories">
           <li v-for="(genre, index) in content.genres" :key="index">
             <div class="cat">
             {{genre.name}}
             </div>
           </li>
          </ul>
         <div class="desc">
           <p>
             {{content.overview}}
           </p>
         </div> 
        </div>
        <div class="action-buttons">
          <button class="btn-default">
          <span>Play</span>  <font-awesome-icon :icon="['fas', 'play']"  />
          </button>
           <label for="wish-list" class="wish-list btn-default transparent">
              <input type="checkbox" name="wish-list" id="wish-list" v-model="wishList">
              <span>Add to Wishlist</span> <font-awesome-icon :icon="[wishList?'fas':'far', 'bookmark']" />
          </label>
          <a href="img/thumb.png" class="btn-default transparent" download>
             <span>Download</span>  <font-awesome-icon :icon="['fas', 'cloud-download-alt']"  />
          </a>

          <div class="btn-default transparent">
            <span>Your Rate</span>           
            <div class="rate-star">
             <b-form-rating  v-model="clientRate" no-border inline  precision="1"></b-form-rating>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="list-items">
   <div class="container main-row">
     <About :context="content" />
      
    <Episodes v-if="type == 'tv'"/>
   </div>
  </section>
 </main>
</template>

<script>
import About from "../components/Home/About.vue"
import Episodes from "../components/Home/Episodes.vue"
import { mapState } from 'vuex'
export default {
  name: 'Index',
  async asyncData (context) {
    let content = await context.store.dispatch('show/load')
    return { content }
  },
  components: {
    About,
    Episodes
  },

  data() {
    return {
      clientRate: null,
      rating: 0,
      formatedTime: {
       time: '',
       format: '',
      },
      wishList: false,
      show: null,
    }
  },

  computed: {
      ...mapState({
      type: state => state.show.type,
      episodes: state => state.show.episodes,
    }),
  },

  mounted() {
    // this.saceleRate(this.content.imDbRating);
    // this.formatTime(new Date(this.content.highlight.time));
  },

  methods: {
    saceleRate(rate) {
      this.rating = rate/ (2);
    },

    formatTime(time) {
    this.formatedTime.format = "Minutes";
     if(time.getHours() > 0) {
        this.formatedTime.time =   this.formatedTime.time  +time.getHours() + ":"
         this.formatedTime.format = "Hours";
     }
       this.formatedTime.time =   this.formatedTime.time + time.getMinutes()
    },
    camelCase(camel) {

      camel = camel.charAt(0).toUpperCase() + camel.slice(1);
      return camel;
    }
  },
}
</script>
<style lang="scss">
  @import '~/assets/scss/views/index.scss';
</style>