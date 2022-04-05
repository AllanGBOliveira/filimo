<template>
  <div class="episodes">
      <h2 class="tit">
        Episodes
      </h2>
    <section class=" list-episodes" role="banner">
      <div class="buttons">
        <button title="Next" class="swiper-button-prev" >
          <font-awesome-icon :icon="['fas', 'chevron-left']"  />
        </button>
        <button title="Previous" class="swiper-button-next">
          <font-awesome-icon :icon="['fas', 'chevron-right']"  />
        </button>
      </div>
      <div class="swiper-box">
      <div class="seasons">
        <ul class="seasons-container"> 
          <li v-for="(season, i) in data.seasons" :key="i" :class="season.season_number === currentSeason?'active': null" v-on:click="changeSeason(season.season_number)">
            <span>{{season.season_number }}</span>
          </li>
        </ul>
      </div>
      <div v-swiper:swiperBanner="swiperOptions" class="swiper-episodes swiper-container">
        <div class="swiper-wrapper">
          <div :title="ep.name" v-for="(ep, i) in season.episodes" :key="i" class="swiper-slide">
          <button  class="ep-thumb">
              <img :src="ep.still_path?`https://image.tmdb.org/t/p/original`+ ep.still_path: '/img/default.jpg'" class="img-cover">
          </button>
            <p class="ep-title">Episode {{ep.episode_number}}</p>
          </div>
        </div>
      </div>
      </div>
      <div class="swiper-pagination d-none" />
    </section>    
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { directive } from 'vue-awesome-swiper'
import SwiperCore, { Navigation, Lazy, Autoplay, Keyboard, A11y, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Lazy, Autoplay, Keyboard, A11y])
export default {
  name: "Episodes",
    async fetch () {
      this.currentSeason = this.data.seasons[0].season_number;
     await this.$store.dispatch('show/tv', {season_number: this.currentSeason }).then( () => {
       this.loading = false;
     });
  },

  directives: {
    swiper: directive
  },

  data() {
    return {
        currentSeason : null,
        eps: [ '/img/ep-1.png', '/img/ep-3.png', '/img/ep-4.png' ],
        swiperOptions: {
        keyboard: true,
        speed: 600,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
            clickable: true
        }
        // breakpoints: {
        //   992: {

        //   }
        // }
      }
    }
  },
    computed: {
    ...mapState({
      season: state => state.show.season,
      data: state => state.show.data,
    }),
  },
  mounted() {
    console.log(this.data);
  },

  methods: {
    async changeSeason(season) {
      if(this.currentSeason !== season) {
      this.currentSeason = season;
        await this.$store.dispatch('show/tv', {season_number: this.currentSeason }).then( () => {
       this.loading = false;
        });
      }
    }
  },
}
</script>

<style lang="scss">
  @import '~/assets/scss/components/episodes.scss';
</style>