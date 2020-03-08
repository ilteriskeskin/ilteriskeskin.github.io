<template>
  <div id="app" class="main">
    <div class="container">

      <h2 class="advicesH2">
        Neyin Tavsiyesi Bu?
      </h2>

      <span class="advices-span">
        Bazen bilgisayarımdan uzak bir şekilde Twitter'da dolanırken harika projeler veya güzel blog yazıları
        görüyorum. Daha sonra bakmak için Telegram'a kaydediyorum. Bundan sonra bu bölümde o yazıları ve projeleri
        sizlerle paylaşacağım.
      </span>

      <hr class="advices-hr">

      <ul id="advices-li">
        <li>
          <a href="https://twitter.com/linuxcu/status/1230726281458675712?s=09" target="_blank" class="advices-a">"Test
            veya ufak tefek işler için ufak
            bir
            Web Server'a ihtiyacınız var, Nginx ile vs. de uğraşasınız yok, o zaman tanıştırayım, "Updog" :)"</a>
        </li>
        <li>
          <a href="https://twitter.com/efsaneflood/status/1229477300183404544?s=09" target="_blank" class="advices-a">Twitterın
            gelişmiş arama özelliğini
            bilmeyenler için yararlı flood</a>
        </li>
        <li>
          <a href="https://twitter.com/ZetLorento/status/1229099744682823685?s=09" target="_blank" class="advices-a">Birbirinden
            güzel web
            uygulamaları</a>
        </li>
        <li>
          <a href="https://twitter.com/bunal/status/1229763674920882177?s=09" target="_blank" class="advices-a">CSS ile
            Ubuntu Terminal görünümü</a>
        </li>
        <li>
          <a href="https://twitter.com/GurayYildirimTR/status/1229667227659591680?s=09" target="_blank"
             class="advices-a">Python ile hiç frontend
            kodlamadan
            web sitesi yapabilmeyi amaçlayan, asenkron çalışan ve önde VueJS'i yazılımcı dokunmadan otomatik yöneten
            proje: JustPy</a>
        </li>
        <li>
          <a href="https://twitter.com/mhk_developer/status/1229320404168269824?s=09" target="_blank" class="advices-a">Ülkemizin
            yazılım ve ilişkili
            alanlarda uzman kişilerinden 13 kişiye, 2020 yılında yazılım trendlerinin ne olacağını sorduk ve yanıtları
            e-kitap haline getirdik:
            Yazılım Dünyasında 2020 Trendleri</a>
        </li>
        <li>
          <a href="https://twitter.com/GurayYildirimTR/status/1229150523430965250?s=09" target="_blank"
             class="advices-a">Kendi bilgisayarınızda
            geliştirme
            yaparken, hata vermeyen, geçerli bir sertifika kullanmayı kolaylaştıran; kendisi bir sertifika otoritesi
            üretip tanıtan, sonra da istediğiniz alan adına sertifika tanımlayan proje: localdots</a>
        </li>
        <li>
          <a href="https://twitter.com/SelmanKahyaX/status/1227281192447201280?s=09" target="_blank" class="advices-a">bir
            web uygulamasini 0 kullanicidan
            100 bin kullaniciya nasil scale edersin?</a>
        </li>
        <li>
          <a href="https://twitter.com/mertcangokgoz/status/1227247833318907905?s=09" target="_blank" class="advices-a">Açık
            çok fazla sekmeler yüzünden
            Mozilla Firefox fazlaca bellek mi tüketiyor? Bellek kullanımını optimize eden ve yüksek bellek
            kullanımlarını
            ortadan kaldıran Firemin ile tanışın. Belleğinizin önemli bir bölümü size kalsın.</a>
        </li>
        <li>
          <a href="https://twitter.com/mertcangokgoz/status/1226103681000628225?s=09" target="_blank" class="advices-a">Django'da
            kullanılan normal
            Session
            yapısını ek ip bilgisi ve lokasyonu, user-agent bilgisi ve durumu hakkında bilgiler sunan eklenti</a>
        </li>
        <li>
          <a href="https://twitter.com/aliorhun/status/1226150460861698053?s=09" target="_blank" class="advices-a">VNC
            altyapısı ile herhangi bir cihazı
            ikinci monitör olarak kullanmaya yarayan ilginç bir uygulama olmuş. </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Advices"
  }
</script>

<style scoped>
  .main {
    margin-bottom: calc(15% + 10px);
  }

  .advicesH2 {
    font-weight: 900;
    margin-bottom: 20px;
    color: #f2f2f2;
  }

  .advices-a:link {
    color: #d1cec9;
    text-decoration: none;
  }

  .advices-a:visited {
    color: #d1cec9;
    text-decoration: none;
  }

  .advices-span {
    color: #d1cec9;
  }


  li:hover {
    font-weight: bold;
  }

  #advices-li {
    line-height: 2em;
    font-style: italic;
    color: #d1cec9;
  }

  .advices-hr {
    margin-top: 4%;
    margin-bottom: 4%;
    border: 1px solid #d1cec9;
  }

</style>
