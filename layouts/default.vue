<template>
<div>
    <Header />
    <Nuxt />
    <Footer/>
  </div>
</template>

<script>
import { config, dom } from '@fortawesome/fontawesome-svg-core'
export default {
  name: "default",
    created () {
    config.searchPseudoElements = true
    dom.watch()
  },
}
</script>

<style lang="scss">
  @import '~/assets/scss/default/index.scss';
</style>

