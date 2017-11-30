<template>
<section class="content-container">
  <h1 class="post-title"> {{ post.title }} </h1>
  <h2> ingredients </h2>
  <nuxtent-body :body="post.body" />
</section>
</template>

<script>
export default {
  asyncData: async ({ app, route }) => ({
    post: await app.$content('/wholesome/recipes').get('/wholesome/recipes/' + route.params.section + '/' + route.params.slug)
  })
}
</script>

<style>
.content-container
{
  width: 38rem;
  margin: 0 auto
}

.post-title
{
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: #35495e;
}
</style>
