<template>

 <header>
   <nav class="navbar navbar-expand justify-content-center justify-content-xl-between">
    <b-navbar-brand  :to="{name: 'index'}">
      <img  src="img/logo.png" alt="Filimo">
    </b-navbar-brand>
      <b-navbar-nav class="center-nav">
        <b-nav-item >Home</b-nav-item>
        <b-nav-item >Movie & Series</b-nav-item>
        <b-nav-item >Live</b-nav-item>
        <b-nav-item >Popular</b-nav-item>
        <b-nav-item >My List</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="right-nav">
        <form action="search" class="form-inline" v-on:submit.prevent="sendSearch()">
          <input type="search" placeholder="Search">
          <button type="submit">
          <font-awesome-icon :icon="['fas', 'search']"  />
          </button>
        </form>
        <b-nav-item-dropdown right>
          <template #button-content>
             <button class="avatar-btn"> <img src="https://picsum.photos/id/10/200/300" alt=""></button>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
   </nav>
  </header>
</template>

<script>
export default {
  name: "Header",


  mounted() {
    // this.menuFixedOnScroll()

    window.addEventListener("scroll", () => {
      this.menuFixedOnScroll()
    });
    window.addEventListener("resize", () => {
      this.menuFixedOnScroll()
    });
  },

  methods: {
    sendSearch() {
      console.log("Search")
    },

    outerHeight (elem) { // Calculate the outer height (el + padding + margin) of an element
      let curStyle = elem.currentStyle || window.getComputedStyle(elem)
      let outerHeight = elem.offsetHeight
      outerHeight += parseInt(curStyle.marginTop)
      outerHeight += parseInt(curStyle.marginBottom)
      return outerHeight
    },
    menuFixedOnScroll () { // Toggle Nav Small
      let nav = document.querySelector('header')
      let wrapper = document.querySelector('main')

      if (!this.navHeight) {
        this.navHeight = this.outerHeight(nav)
      }

      let windowTop = document.documentElement.scrollTop;

      if (windowTop > this.navHeight && this.isMobile() === true) {
        nav.classList.add('nav-small')
        // wrapper.style.paddingTop = this.navHeight + 'px'
      } else {
        nav.classList.remove('nav-small')
        // wrapper.style.paddingTop = 0
      }
    },
    isMobile() {
       if(window.matchMedia("(min-width: 1199.98px)").matches) {
         return true
       }
       return false
    }
  },
}
</script>

<style lang="scss">
  @import '~/assets/scss/components/header.scss';
</style>

