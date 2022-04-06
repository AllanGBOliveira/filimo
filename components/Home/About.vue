<template>
  <div class="about">
    <h2 class="tit">About</h2>
    <div class="my-row">
    <CoolLightBox 
      :items="items" 
      :index="index"
      @close="index = null">
    </CoolLightBox>

    <button class="thumb" @click="index = 0">
     <img :src="thumb" alt="Thumb">
     <div class="play-icon"><font-awesome-icon :icon="['fas', 'play']"  /></div>
    </button>

    <ul class="info">
      <li>
        <span class="info-tit">Summery:</span>
        <span class="info-desc">{{context.overview}}</span>
      </li>
      <li>
        <span class="info-tit">Crew:</span>
       <span class="info-desc list" > <span class="list-item" v-for="(crew, index) in this.crew" :key="index">{{crew.name}}</span> </span>
      </li>
      <li>
        <span class="info-tit">Casts:</span>
        <span class="info-desc list" > <span class="list-item" v-for="(cast, index) in this.cast" :key="index">{{cast.name}}</span> </span>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import { mapState } from 'vuex'

export default {
  name: "About",

  components: {
    CoolLightBox,
  },

  props: {
    context: {required: true, type: Object}
  },

  data() {
    return {
      index: null,
      items: [],
      item: {
        src: '',
        autoplay: true,
      },
      thumb: null
    }
  },
  
  computed: {
    ...mapState({
      video: state => state.show.video,
      cast: state => state.show.cast,
      crew: state => state.show.crew
    }),
  },
  mounted() {
    this.thumb = `https://img.youtube.com/vi/${this.video.key}/maxresdefault.jpg`;
    this.item.src = `https://www.youtube.com/watch?v=${this.video.key}`;
    this.items.push(this.item);
  },
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/about.scss';
</style>