<template>
  <div class="my-row">
    <CoolLightBox 
      :items="items" 
      :index="index"
      @close="index = null">
    </CoolLightBox>

    <button class="thumb" @click="index = 0">
     <img :src="context.thumb" alt="">
     <div class="play-icon"><font-awesome-icon :icon="['fas', 'play']"  /></div>
    </button>

    <ul class="info">
      <li>
        <span class="info-tit">Summery:</span>
        <span class="info-desc">{{context.summery}}</span>
      </li>
      <li>
        <span class="info-tit">Creator:</span>
        <span class="info-desc">{{context.creator}}</span>
      </li>
      <li>
        <span class="info-tit">Casts:</span>
        <span class="info-desc list" > <span class="list-item" v-for="(cast, index) in context.casts" :key="index">{{cast}}</span> </span>
      </li>
    </ul>
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
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
      }
    }
  },

  mounted() {
    this.item.src = this.context.trailer;
    this.items.push(this.item);
    console.log(this.items);
  },
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/about.scss';
</style>