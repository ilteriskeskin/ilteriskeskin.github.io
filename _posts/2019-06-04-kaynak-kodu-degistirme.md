---
layout: post
title: Özgür Bir Projenin Kaynak Kodunda Oynama Yapmak
subtitle: Özgür bir projeyi ihtiyaçlarımız doğrultusunda değiştireceğiz.
gh-repo: ilteriskeskin/ilteriskeskin.github.io
gh-badge: [star, fork, follow]
tags: [jekyll, git, github, FreeSoftware]

---

Merhaba arkadaşlar. Öncelikle bugün ne yapacağımızı kısaca açıklayayım. Özgür bir projenin kaynak kodlarını bilgisayarımıza indirip kodlarında oynama yapacağız. Bir projeyi ihtiyaçlarımız doğrultusunda nasıl değiştiririz ona bakacağız. Çok küçük bir değişiklik olacak.

Bu yazı için [sl](https://github.com/mtoyoda/sl/) projesini seçtim arkadaşlar. Projenin kaynak kodlarını bilgisayarımıza klonlayarak başlayalım.

---------------------------------------

**Anlatımım Fedora 29 üzerinde gerçekleşecektir ancak GNU/Linux dağıtımlarının birçoğu için geçerlidir.**

İlk olarak üzerinde oynama yapacağımız projenin lisansına bakmalıyız. Eğer lisansında onu değiştiremeyeceğimize dair bir şey yazıyorsa değiştirmememiz gerekir.

![IMG 1]({{ "/img/license-sl.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/license-sl.png }})

---------------------------------------

Ardından projeyi kendi bilgisayarımıza klonlamamız lazım. Klonlamak için aşağıdaki komutu yazabilirsiniz.

```
git clone https://github.com/mtoyoda/sl.git
```

![IMG 1]({{ "/img/clone-sl.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/clone-sl.png }})

---------------------------------------

Artık kodlarımızı incelemenin vakti geldi. Proje **C Programlama Dili** ile yazılmış. Benim amacım **sl** programı çalıştığında geçen trende oynama yapmak.

Öncelikle projeyi derleyelim ve çalıştıralım. Bunun için ise klonladığınız projenin içince girin.

```
cd sl

make

./sl
```

![IMG 1]({{ "/img/compile-sl.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/compile-sl.png }})

---------------------------------------

Artık projemizi derledik ve çalıştırdık şimdi sıra kodlar üzerinde oynama yapmada. Gelin ilk olarak projemizde hangi dosyalar var bakalım.

Bizi ilgilendiren iki dosya var. Birisi sl.h ve diğeri sl.c.

**sl.c:**

![IMG 1]({{ "/img/main-sl.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/main-sl.png }})

**sl.h:**

![IMG 1]({{ "/img/header-sl.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/header-sl.png }})

Görsellerde de gördüğünüz gibi benim ilgileneceğim dosya **sl.h** dosyası. Çünkü ben yukarıda da belirttiğim gibi trenin görüntüsüyle oynayacağım.

**sl.h** dosyasını açıyorum ve düzenliyorum. Aşağıdaki görselde yaptığım değişikliği görebilirsiniz.

![IMG 1]({{ "/img/change-code-sl.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/change-code-sl.png }})

Ardından kaydedip çıkıyorum ve sırasıyla aşağıdaki komutları çalıştırıyorum.

```
make

./sl
```

Ve programımın çalışır hali:

![IMG 1]({{ "/img/run-sl.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/run-sl.png }})

---------------------------------------

Gördüğünüz gibi aslında oldukça basit bir şekilde değişiklik yaptık.

Bu yazımızı burada sonlandıralım arkadaşlar. Umarım faydalı olmuştur.

Herkese iyi çalışmalar diliyorum :)
