<template>
  <div id="app" class="main">
    <div class="container">
      <div class="posts" v-for="post in posts">
        <h3 class="postTitle">{{ post.title }}</h3>
        <p class="postPreview">{{ post.preview }}</p>
        <p class="postDate">Paylaşılma Tarihi: {{ post.date }}</p>
        <router-link :to="{ name: 'Post', params: { id: post.id } }">Devamını Oku</router-link>
        <hr class="homeHr">
      </div>
    </div>
  </div>
</template>

<script>
  import jsonPosts from '../statics/posts/posts';

  export default {
    name: "Home",
    data() {
      return {
        posts: [],
      }
    },
    created() {
      this.posts = jsonPosts.posts;
    }
  }
</script>

<style scoped>

  .homeHr {
    border: 1px solid #d1cec9;;
    border-radius: 4px;
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .main {
    margin-bottom: calc(15% + 10px);
  }

  .postTitle {
    font-weight: bold;
    margin-bottom: 20px;
    color: #f2f2f2;
  }

  .postPreview {
    color: #d1cec9;
  }

  .postDate {
    font-style: italic;
    color: #d1cec9;
  }

</style>
