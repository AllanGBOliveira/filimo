<template>
 <main>
  <section class="parallax">
    <div class="parallax-img" :style="{ 'background-image': `url(${imageSrc})` }"/>
    <div class="highlight">
      <div class="container">
        <div class="thumb">
          <img src="img/thumb.png" alt="">
        </div>

        <div class="content">
          <h2 class="show-title">
            Breaking Bad: S3 E6
          </h2>
          <h3 class="show-category">
              Series
          </h3>
         <div class="rate-star">
           <p class="rate-star-count">
             {{rate}}
           </p>
            <b-form-rating  v-model="rating" no-border inline  readonly precision="1"></b-form-rating>
            <div class="imdb-badge">
              <span>{{imdbRate}}/10</span> <img src="img/imdb.png" alt="">
            </div>
         </div>

         <div class="time-local">
            <span>{{this.formatedTime.time + ' '+ this.formatedTime.format}}</span> <span>-</span> <span>USA</span>
         </div>

         <ul class="categories">
           <li v-for="(categorie, index) in categories" :key="index">
             <nuxt-link  :to="{name: 'category/'+ categorie.slug}">
             {{categorie.name}}
             </nuxt-link>
           </li>
         </ul>
         <div class="desc">
           <p>
             A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing 
              and selling methamphetamine in order to secure his family's future.
           </p>
         </div>
        </div>
      </div>
    </div>
  </section>
 </main>
</template>

<script>
export default {
  name: 'Index',
  
  data() {
    return {
      imageSrc: '',
      rating: 0,
      rate: 9.4,

      imdbRate: 9.5,

      show: null,
      time: new Date('December 17, 1995 00:43:00'),
      formatedTime: {
       time: '',
       format: '',
      },

      categories: [
        {
          name: 'Action',
          slug: 'action'
        },
         {
          name: 'Crime',
          slug: 'crime'
        },
         {
          name: 'Drama',
          slug: 'drama'
        },
         {
          name: 'Fantasy',
          slug: 'fantasy'
        },
        {
          name: 'Thriller',
          slug: 'thriller'
        },
      ]
    }
  },

  mounted() {
    this.imageSrc = 'img/bg.png';
    this.saceleRate(this.rate);
    this.formatTime(this.time);
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