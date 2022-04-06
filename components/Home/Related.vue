<template>
  <div class="related">
      <h2 class="tit">
        More Like This 
      </h2>
      <section class="list-items">
      <div class="buttons d-none d-sm-block">
        <button title="Next" class="swiper-button-prev" >
          <font-awesome-icon :icon="['fas', 'chevron-left']"  />
        </button>
        <button title="Previous" class="swiper-button-next">
          <font-awesome-icon :icon="['fas', 'chevron-right']"  />
        </button>
      </div>
      <div class="swiper-box">
      <div v-swiper:swiperBanner="swiperOptions" class="swiper-episodes swiper-container">
        <div class="swiper-wrapper">
          <div :title="show.name" v-for="(show, i) in related.results" :key="i" class="swiper-slide">
          <button  class="item-thumb">
              <img :src="show.poster_path?`https://image.tmdb.org/t/p/w300`+ show.poster_path: 'img/default.jpg'" class="img-cover">
          </button>
            <p class="item-title">{{show.name}}</p>
          </div>
        </div>
      </div>
      </div>
      <div id="rel-pagination" class="swiper-pagination d-block d-sm-none" slot="pagination" />
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
  name: "Related",

  async fetch () {
     await this.$store.dispatch('show/related').then( () => {
      //  this.loading = false;
     });
  },

    directives: {
    swiper: directive
  },


  data() {
    return {
        swiperOptions: {
        keyboard: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 28,
        pagination: {
          el: '#rel-pagination',
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
             slidesPerView: 3.2,
          },
          992: {
             slidesPerView: 4,
          },
          1200: {
             slidesPerView: 5,
          }
        }
      },
    }
  },

  computed: {
    ...mapState({
      related: state => state.show.related,
    }),
  },
}
</script>

<style lang="scss">
  @import '~/assets/scss/components/related.scss';
</style>