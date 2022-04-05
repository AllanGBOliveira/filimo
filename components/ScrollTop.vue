<template>
  <button id="scroll-top" class="scroll-top" aria-label="Voltar ao Topo" @click="scrollTop()" @keypress="skipLink('skipForContent')">
     <font-awesome-icon :icon="['fas', 'chevron-up']"  />
  </button>
</template>

<script>
export default {
  mounted () {
    const btnScroll = document.getElementById('scroll-top')

    window.onscroll = () => {
      if (window.pageYOffset >= 500) {
        btnScroll.classList.add('active')
      } else {
        btnScroll.classList.remove('active')
      }
    }
  },
  methods: {
    scrollTop () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/components/scroll-top.scss";
</style>
