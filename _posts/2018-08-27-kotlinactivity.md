---
layout: post
title: Kotlin ile Activityler Arası Geçiş
subtitle: Kotlin Programlama Dili ile Android'de Activityler Arası Geçiş Yapma
gh-repo: ilteriskesk/ilteriskesk.github.io
gh-badge: [star, fork, follow]
tags: [jekyll, git, github, kotlin, android]

---

### Kotlin ile Activityler Arası Geçiş

Merhaba arkadaşlar, bu yazımızda Google'den destek almaya başlayan(uzunca bir süre oldu)
Kotlin programlama dili ile iki adet activity arası geçiş yapmayı öğreneceğiz. 

Bugün yapmayı öğreneceğimiz olay çok basit ama sıkça kullanılan, oldukça gerekli bir konu. Hazırsak hadi başlayalım :)

--------------------------------------

İlk olarak bir proje başlattığınızı ve app kısmından iki adet **empty activity** oluşturduğunuzu
varsayıyorum. Activitylerin içine birer buton ekleyin ve onclick metotlarını doldurun.

Ardından ilk activitye gelin ve şu kodları yazın.

```kotlin
fun changeActivity1(view: View) {
    val intent = Intent(this, activity2::class.java)
    startActivity(intent)
}

fun changeActivity2(view: View) {
    val intent = Intent(this, activity1::class.java)
    startActivity(intent)
}
```

Kodlar bu şekilde olacak arkadaşlar. İki fonksiyondada intent adlı bir sabitimiz var bunlar nasıl karışmıyor? diye düşünecek olursanız, her fonksiyonun etki alanı(scope) kendi içindedir.

Bu şekilde basit bir activity geçiş programı yazmanız mümkündür. İyi çalışmalar :)