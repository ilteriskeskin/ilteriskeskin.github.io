<template>
  <div>
    <div class="div-footer">
      <p>
        aliilteriskeskin@gmail.com
      </p>
      <p>
        <a href="https://twitter.com/ilteriskeskin" class="fa fa-twitter" target="_blank"></a>
        <a href="https://github.com/ilteriskeskin/" class="fa fa-github" target="_blank"></a>
        <a href="https://www.linkedin.com/in/aliilteriskeskin/" class="fa fa-linkedin" target="_blank"></a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  * {
    margin: 0 auto;
    padding: 0;
  }

  p {
    width: 100%;
    display: block;
    text-align: center;
  }

  a{
    margin-left: 14px;
    color: #f2f2f2;
  }

  a:hover{
    color: deepskyblue;
    text-decoration: none;
    width: 35px;
  }

  .div-footer {
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    left: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    padding: 10px;
    color: #f2f2f2;
    background-color: #343a40;
  }

</style>
