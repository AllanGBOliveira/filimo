<template>
  <div class="episodes">
      <h2 class="tit">
        Episodes
      </h2>
    <section class="banner swiper" role="banner">
      <div v-swiper:swiperBanner="swiperOptions" class="swiper-banner swiper-container">
        <div class="swiper-button-prev" />
        <div class="swiper-wrapper">
          <a v-for="(episode, i) in episodes[0].ep" :key="i" class="swiper-slide" :href="'#'">
              <img src="" class="img-cover swiper-lazy">
            <div class="swiper-lazy-preloader" />
          </a>
        </div>
        <div class="swiper-button-next" />
      </div>
      <div class="swiper-pagination" />
    </section>
      
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import SwiperCore, { Navigation, Lazy, Autoplay, Keyboard, A11y, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Lazy, Autoplay, Keyboard, A11y])
export default {
  name: "Episodes",

  props: {
    episodes: {required: true, type: Array}
  },

    directives: {
    swiper: directive
  },

  data() {
    return {
          swiperOptions: {
        a11y: null,
        autoplay: {
          delay: 5000
        },
        keyboard: true,
        lazy: {
          loadPrevNext: true
        },
        loop: true,
        speed: 600,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          992: {
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          }
        }
      }
    }
  },
  mounted() {
   Array.from(this.episodes[0]).forEach(element => {
      console.log(element.ep);
    });
  },
}
</script>