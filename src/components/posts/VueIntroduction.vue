<template>
  <div id="app" class="main">
    <div class="container">
      <img src="../../assets/img/vue-logo.png" alt="">
      <h3 class="postTitle">{{ post.title }}</h3>
      <p class="postContent">
        Merhaba uzun süredir blog yazmıyordum. Hem biraz yoğundum hem de boş vakitlerimi başka şeylere ayırmıştım. Ancak
        blog yazmadığım
        dönemde güzel bir Vue.js öğrenme maceram oldu. Bu yazımda biraz bundan bahsetmek istiyorum. Ayrıca blogum yeni
        tema ve altyapı
        ile yayında. Yeni blogum artık Vue.js kullanıyor. Biraz da bunun nedeninden bahsedeceğim.
      </p>

      <hr>

      <h5 class="postSubTitle">Neden ve Nasıl Vue.js Öğreniyorum?</h5>
      <p class="postContent">
        Aslında frontend teknolojilerine oldukça uzak biriyim. Bir backend geliştirici olarak tüm vaktimi Python yazarak
        geçiriyorum. Ancak işim gereği Vue.js kullanmam gerekti ve haliyle önce öğrenmem gerekti. Peki nerden
        başlayacaktım? Aslında ilk işim Github star sayısına bakmak oldu :) Aslında tamamiyle meraktan baktım ama orda
        150k star görmek insanı etkiliyor :) Sonrasında dokümanını incelemeye başladım. Kendi forumunu ve Redit'te
        "vuejs" subredditini inceledim. Benim için yeterli bir topluluğu olduğunu farkettim. Ardından Youtube üzerinde
        <a href="https://twitter.com/fatihacet">Fatih Acet'in</a> Vuejs eğitim serilerini gördüm. Hemen izlemeye
        başladım.
        Hem o videoları izliyorum hem öğrendiklerimle bir şeyler yapmaya çalışıyorum. Video serisi bittikten sonra kendi
        kendime biraz daha küçük küçük projeler yaptım. Ne yalan söyleyeyim oldukça hoşuma gitti. Sonrasında
        haftasonları blogumu Vuejs ile yazmaya başladım. Ne kadar mantıklı bilmiyorum ancak hem benim için Vuejs
        antrenmanı oluyor hem de haftasonları oyalanacak bir proje niteliğindeydi.
      </p>

      <hr>

      <h5 class="postSubTitle">Blogumu Vue.js'e Geçirme Süreci ve Yeni Tema</h5>
      <p class="postContent">
        <a href="/old_blog/index.html" target="_blank">Eski Blogum</a> Pelican altyapısı kullanıyordu. Bir Python fanı
        olarak zamanında blogumu Pelican ile hazırlamıştım. Tema olarak hazır bir Pelican şablonu kullanıyordum. Kendime
        ait olmayan bir tema kullanmak pek içime sinmemişti ancak bir türlü başlamaya cesaret edememiştim. Vuejs ile
        blogumu yeniden hazırlamaya karar verdiğim zaman temayı da bana ait olan bir blog hazırlamak istedim. İyisiyle
        kötüsüyle benim hazırladığım bir tema olacaktı. İçime bu fikir çok sindi ve yazmaya başladım. Bazı yerleri
        kendim yazdım bazılarında <a href="https://getbootstrap.com/">Boostrap</a> kullandım bazen de
        <a href="https://github.com/uguryuce">Uğur Yüce'den</a> CSS yardımı aldım :) Beni <u>aşırının aşırısı çok
        sevdiği
        için</u> her seferinde yardım etti. Tabi tema kısmında bana çok faydası olan bir site ise <a
        href="https://www.w3schools.com/">W3Schools</a> oldu.
      </p>
      <p class="postContent">
        Vuejs kısmında ise yer yer çok bunaldım çünkü frontend teknolojilerinde hiç tecrübem yoktu. Bazen ise
        dikkatsizliğime gelen noktalar oldu. Peki ne oldu şimdi? Şimdi blogum artık Vuejs kullanıyor ve tema olarak
        kendi hazırladığım bir tema kullanıyor. Ben sonuçtan memnun kaldım umarım siz de kalırsınız :)
      </p>

      <p class="postContent">
        Herkese iyi çalışmalar dilerim.
      </p>

      <hr>

      <p class="postDate">Paylaşılma Tarihi: {{ post.date }}</p>
    </div>
  </div>
</template>

<script>
  import jsonPosts from '../../statics/posts/posts';

  export default {
    name: "Post",

    data() {
      return {
        id: this.$route.params.id,
        post: [],
      }
    },

    watch: {
      '$route'(to, from) {
        this.id = to.params.id;
      },
    },

    created() {
      this.post = jsonPosts.posts[this.id - 1];
    }
  }
</script>

<style scoped>

  hr {
    border-top: 1px solid #ccc;
    margin-bottom: 30px;
    margin-top: 30px;
  }

  img {
    width: 100%;
    max-width: 150px;
    height: 100%;
    max-height: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }

  .main {
    margin-bottom: calc(20% + 10px);
  }

  .postContent {
    line-height: 30px;
    color: #d1cec9;
  }

  .postDate {
    margin-top: 15px;
    color: #d1cec9;
  }

  .postTitle {
    margin-bottom: 20px;
    font-weight: bold;
    color: #f2f2f2;
  }

  .postSubTitle {
    margin-bottom: 20px;
    font-weight: bold;
    color: #f2f2f2;
  }

</style>
