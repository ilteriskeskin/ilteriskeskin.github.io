<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Anasayfa</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/about" class="nav-link">Hakkımda</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/advices" class="nav-link">Tavsiyeler</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a href="/old_blog/index.html" class="nav-link" target="_blank">Eski Blogum</a>
          </li>
        </ul>
      </div>
    </nav>
    <br><br>
  </div>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped>


</style>
