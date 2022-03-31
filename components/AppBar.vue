<template>
  <div class="app-bar">
      <div class="container">
        <b-nav>
           <b-nav-item :to="{name: 'index'}" exact>
              <font-awesome-icon :icon="['fas', 'home']"  />
           </b-nav-item>
           <b-nav-item>
              <font-awesome-icon :icon="['fas', 'list']"  />
           </b-nav-item>

            <b-nav-item>
              <font-awesome-icon :icon="['fas', 'search']"  />
           </b-nav-item>

          <b-nav-item-dropdown right>
          <template #button-content>
             <button class="avatar-btn"> <img src="https://picsum.photos/id/10/200/300" alt=""></button>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
       </b-nav>
      </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMObile",

  data() {
    return {
      mobileDefice: false,
    }
  },

  mounted() {
    this.isMobile();
    window.addEventListener("resize", () => {
        this.isMobile();
      })
  },

  methods: {
      isMobile() {
        //  let footer = document.querySelector('header')
        //  let main = document.querySelector('main')

        //  if (!this.navHeight) {
        //   this.navHeight = this.outerHeight(nav)
        //  }
        let appBar = document.querySelector(".app-bar");
        let main =  document.querySelector("main");
       if(window.matchMedia("(min-width: 1199.98px)").matches) {
            appBar.classList.remove("active")
            main.style.paddingBottom = 0;
           return false;
        }
         appBar.classList.add("active") 
         main.style.paddingBottom = appBar.clientHeight + "px";
        return true;
   }
  },
}
</script>

<style lang="scss">
  @import '~/assets/scss/components/appBar.scss';
</style>
