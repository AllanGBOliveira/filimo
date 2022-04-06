<template>
  <div class="episodes">
      <h2 class="tit">
        Episodes
      </h2>
    <section class="list-items" role="banner">
      <div class="buttons d-none d-sm-block">
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
          <div :title="ep.name" v-for="(ep, i) in season.episodes" :key="i" class="swiper-slide" :class="isLoading?'fetching': null">
          <button  class="item-thumb">
              <img :src="ep.still_path?`https://image.tmdb.org/t/p/w300`+ ep.still_path: 'img/default.jpg'" class="img-cover">
          </button>
            <p class="item-title">Episode {{ep.episode_number}}</p>
          </div>
        </div>
      </div>
      </div>
      <div id="ep-pagination" class="swiper-pagination d-block d-sm-none" />
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
      this.isLoading = true;
      this.currentSeason = this.data.seasons[0].season_number;
     await this.$store.dispatch('show/tv', {season_number: this.currentSeason }).then( () => {
       this.isLoading = false;
     });
  },

  directives: {
    swiper: directive
  },

  data() {
    return {
        isLoading: false,
        currentSeason : null,
        swiperOptions: {
        keyboard: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 20,
        pagination: {
          el: '#ep-pagination',
            clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1.2,
          },
           575: {
            slidesPerView: 2.2,
          },
          767: {
             slidesPerView: 3,
          },
          992: {
             slidesPerView: 4,
          }
        }
      }
    }
  },
    computed: {
    ...mapState({
      season: state => state.show.season,
      data: state => state.show.data,
    }),
  },
  // mounted() {
  //   console.log(this.data);
  // },

  methods: {
    async changeSeason(season) {
      if(this.currentSeason !== season) {
        this.isLoading = true;
        this.currentSeason = season;
        await this.$store.dispatch('show/tv', {season_number: this.currentSeason }).then( () => {
       this.isLoading = false;
        });
      }
    }
  },
}
</script>

<style lang="scss">
  @import '~/assets/scss/components/episodes.scss';
</style>