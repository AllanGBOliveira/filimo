<template>
  <footer>
    <div class="container">
      <div class="row">
        <ul class="col-sm-6 col-md-4 col-lg-2 item">
          <li>
              <nuxt-link to="/">
                Home
              </nuxt-link>
          </li>
          <li>
              <nuxt-link to="/">
                Contact us
              </nuxt-link>
          </li>
          <li>
              <nuxt-link to="/">
                Terms of service
              </nuxt-link>
          </li>
          <li>
              <nuxt-link to="/">
                About us
              </nuxt-link>
          </li>
        </ul>

        <ul class="col-sm-6 col-md-4 col-lg-2 item">
          <li>
              <nuxt-link to="/">
                Live
              </nuxt-link>
          </li>
          <li>
              <nuxt-link to="/">
                FAQ
              </nuxt-link>
          </li>
          <li>
              <nuxt-link to="/">
                Premium
              </nuxt-link>
          </li>
          <li>
              <nuxt-link to="/">
                Privacy Policy
              </nuxt-link>
          </li>
        </ul>

        <ul class="col-sm-6 col-md-4 col-lg-2 item">
          <li>
              <nuxt-link to="/">
                Popular
              </nuxt-link>
          </li>
          <li>
              <nuxt-link to="/">
                Recently Released
              </nuxt-link>
          </li>
          <li>
              <nuxt-link to="/">
                250 IMDB
              </nuxt-link>
          </li>
          <li>
              <nuxt-link to="/">
                Advertise with us
              </nuxt-link>
          </li>
        </ul>

        <div class="col-lg-4 last-item">
          <div class="footer-logo">
            <img src="img/logo.png" alt="Logo">
          </div>
          <div class="info">
            <p>
              Filimo is the world’s leading community for creators to share, grow, and get hired.
            </p>
          </div>
          <ul class="socials">
            <li>
                <a href="https://www.instagram.com/" title="Instagram" target="_blank" rel="noreferrer">
                  <font-awesome-icon :icon="['fab', 'instagram']"  />
                </a>
            </li>
            <li>
                <a href="https://api.whatsapp.com/send?phone=5542999999999" title="Whatsapp" target="_blank" rel="noreferrer">
                  <font-awesome-icon :icon="['fab', 'whatsapp']"  />
                </a>
            </li>
            <li>
                <a href="#" title="Telegram" target="_blank" rel="noreferrer">
                  <font-awesome-icon :icon="['fab', 'telegram']"  />
                </a>
            </li>
             <li>
                <a href="https://facebook.com/" title="Facebook" target="_blank" rel="noreferrer">
                  <font-awesome-icon :icon="['fab', 'facebook']"  />
                </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style lang="scss">
  @import "~/assets/scss/components/footer.scss";
</style>
