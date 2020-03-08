<template>
  <div id="app">
    <navbar></navbar>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <footers></footers>
  </div>
</template>

<script>
  import navbar from './components/Navbar';
  import footer from './components/Footer';

  export default {
    name: 'app',
    components: {
      'navbar': navbar,
      'footers': footer
    }
  }
</script>

<style>

  body {
    background-color: #1c1e1f;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 0.5s ease-out forwards;
    transition: opacity 0.5s;
  }

  .slide-leave-active {
    animation: slide-out 0.5s ease-out forwards;
    transition: opacity 0.5s;
    opacity: 0;
  }

  @keyframes slide-in {
    from {
      transform: translateY(120px);
    }
    to {
      transform: translateY(0px);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(120px);
    }
  }

</style>
