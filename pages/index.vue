<template>
 <main>
  <section class="parallax">
    <div class="parallax-img" :style="{ 'background-image': `url(${content.highlight.bg})` }"/>
    <div class="highlight">
      <div class="container my-row">
        <div class="thumb">
          <img :src="content.highlight.thumb" alt="">
        </div>

        <div class="content">
          <h2 class="show-title">
           {{content.highlight.title}}
          </h2>
          <h3 class="show-category">
              {{content.highlight.category}}
          </h3>
         <div class="rate-star">
           <p class="rate-star-count">
             {{content.highlight.rate}}
           </p>
            <b-form-rating  v-model="rating" no-border inline  readonly precision="1"></b-form-rating>
            <div class="imdb-badge">
              <span>{{content.highlight.imdbRate}}/10</span> <img src="img/imdb.png" alt="">
            </div>
         </div>

         <div class="time-local">
            <span>{{this.formatedTime.time + ' '+ this.formatedTime.format}}</span> <span>-</span> <span>USA</span>
         </div>

         <ul class="categories">
           <li v-for="(categorie, index) in content.highlight.categories" :key="index">
             <nuxt-link  :to="{name: 'category/'+ categorie.slug}">
             {{categorie.name}}
             </nuxt-link>
           </li>
         </ul>
         <div class="desc">
           <p>
             {{content.highlight.desc}}
           </p>
         </div>
        </div>
        <div class="action-buttons">
          <nuxt-link class="btn-default" :to="{path:'movies-and-series/' + content.highlight.slug }">
          <span>Play</span>  <font-awesome-icon :icon="['fas', 'play']"  />
          </nuxt-link>
          
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

  <section class="test">

  </section>
 </main>
</template>

<script>
import conf from "../conf"
export default {
  name: 'Index',
    async asyncData({$content}) {
     const content = await $content(conf.CONTENT).fetch();
    return {content};
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
    }
  },


  mounted() {
    this.saceleRate(this.content.highlight.rate);
    this.formatTime(new Date(this.content.highlight.time));
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
    }
  },
}
</script>


<style lang="scss">
  @import '~/assets/scss/views/index.scss';
</style>