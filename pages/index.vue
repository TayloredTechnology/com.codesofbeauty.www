<template>
  <section class='container'>
    <div>
      <logo/>
      <h1 class='title'>
        com.imortalnutrition.www
      </h1>
      <h2 class='subtitle'>
        Nuxt.js project
      </h2>
      <h2 class='slogan'>
        Seamlessly use content files in your Nuxt.js sites.
      </h2>
      <div class='links'>
        <nuxt-link to='/hello-world' class='button--green'>See Your First Post</nuxt-link>
        <a href='https://github.com/nuxt-community/content-module' target='_blank' class='button--grey'>Learn More on Github</a>
        <a href='https://nuxtjs.org/' target='_blank' class='button--green'>Documentation</a>
        <a href='https://github.com/nuxt/nuxt.js' target='_blank' class='button--grey'>GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  // },
  // created () {
  //   if (process.browser) {
  //     let netlifyCmsScript = document.createElement('script')
  //     netlifyCmsScript.setAttribute('src', 'https://identity.netlify.com/v1/netlify-identity-widget.js')
  //     document.head.appendChild(netlifyCmsScript)
  //
  //     if (window.netlifyIdentity) {
  //       window.netlifyIdentity.on('init', user => {
  //         if (!user) {
  //           window.netlifyIdentity.on('login', () => {
  //             document.location.href = '/cms/'
  //           })
  //         }
  //       })
  //     }
  //   }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.slogan
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
