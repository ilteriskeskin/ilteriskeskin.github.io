---
layout: post
title: Python ile Görüntü İşleme-1
subtitle: Resmi döküman takibi ile Pillow kütüphanesine giriş.
gh-repo: ilteriskeskin/ilteriskeskin.github.io
gh-badge: [star, fork, follow]
tags: [jekyll, git, github, Pillow, Python3]

---

Merhaba ardakaşlar. [Batuhan Taşkaya](https://twitter.com/isidentical?lang=tr)'nın bir
[tweetinin](https://twitter.com/isidentical/status/1104698057403387904) altında python ile
görsel işleme konulu yazı isteği gördüm. Bu yazımda Pillow kütüphanesine giriş yapacağım.

Hadi başlayalım.

---------------------------------------

### Pillow Nedir?

Pillow, PIL (Python Image Library) kütüphanesinin forklanıp geliştirilmeye devam edildiği
kullanışlı, hafif, görüntü üzerinde işlemler yapmayı sağlayan bir kütüphanedir.

### Pillow Nasıl Kurulur?

**Bu kurulum GNU/Linux üzerine kurulumu baz alarak anlatılacaktır**

```
pip3 install Pillow
```

Bu komut ile Pillow kütüphanesi kurulmuş olacaktır.

### Tutorial Takibine Başlayalım

**Bu yazımda Pillow kütüphanesinin resmi [tutorialı](https://pillow.readthedocs.io/en/stable/handbook/tutorial.html) karışık takip edilecektir. Yani tutorialın sırası ile gidilmeyecektir.**

İlk olarak .py uzantılı bir Python dosyası açmak yerine etkileşimli kabukta kodlarımızı yazalım. Böylece
ilk komutlarımızı hızlıca görelim. Daha uzun örneklerde dosyalar açmaya başlayacağız.

Kabuğu açmak için terminal açıyoruz ve python3 yazıyoruz.

Pillow'daki en önemli sınıflardan biri **Image** sınıfıdr.

**Not:** Görseliniz nerede ise terminalden o dizine gelerek kabuğu açın. Yani eğer görseliniz masaüstünde
ise

```
cd ~/Masaüstü
python3
```

komutlarını çalıştırın.

Kabuğa aşağıdaki satırları yazalım.

```
>>> from PIL import Image
>>> im = Image.open("a.jpeg")
```

Burada ne yaptık biz? Aslında oldukça basit bir şey yaptık. PIL yani yeni adıyla Pillow kütüphanesinin
Image sınıfını import ettik. İmport etme yerine tanımladık diyebiliriz. Ardından im adlı bir değişkene
a.jpeg görüntümü atadım. Ve görüntüyü okumak için Image sınıfının open() fonksiyonunu kullandım.

Eğer ekranınızda herhangi bir değişiklik olmadıysa endişelenmeyin. Zaten olmaması gerekiyor :)

Şimdi kaldığınız yerden itibaren şunları yazın.

```
>>> print(im.format, im.size, im.mode)
```

Bu size görüntünüzün format, boyut ve mod özelliklerini verecektir.

![IMG 1]({{ "/img/pil1.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/pil1.png }})

Şimdi ise show() fonksiyonu yardımıyla görüntümüzü ekrana basalım.

```
im.show()
```

komutu ile görüntünüzü ekranda gösterebilirsiniz.

![IMG 1]({{ "/img/pil2.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/pil2.png }})

### Görüntüleri Okuma ve Yazma

Pillow kütüphanesi çok çeşitli görüntü dosyası formatlarını desteklemektedir. Dosyaları
okumak için Image sınıfının open() fonksiyonunu kullanmıştık. Bir görüntüyü açmak için formatını
bilmeniz gerekmez.

Görüntüleri kaydetmek için ise Image sınıfının save() fonksiyonunu kullanacağız.

Şimdi .py uzantılı bir dosya açın ve içine aşağıdaki kodları yazın. Ardından kaydedin ve
çalıştırmadan önce biraz bekleyin :)

```Python
from PIL import Image, ImageFilter

im = Image.open('a.jpeg')

blur_im = im.filter(ImageFilter.BLUR)

blur_im.show()
blur_im.save('blur.jpeg')
```

Şimdi burada neler yaptık? İlk iki satırı bildiğinizi düşünüyorum ancak kısac bahsetmek
gerekirse ilk satırda PIL kütüphanesinden Image ve ImageFilter sınıflarını dahil ettik.
Hemen altındaki satırda a.jpeg görüntüsünü okuduk ve im değişkenine atadık.

Asıl kısım burada başlıyor.

Image sınıfının filter() fonksiyonunu çağırdık ve ImageFilter.BLUR parametresini içine yazdık.
Bu parametre bizim görüntümüzü blur yapmamıza yarıyor. Peşine show() fonksiyonu ile görselimizi
ekranda gösterdik. Sonrasında ise save() fonksiyonu ile görüntümüzü kaydettik. Kayıt ismine ben
blur.jpeg dedim. Eğer **blue_im.save('~/Belgeler/Deneme/blur.jpeg')** gibi bir şey deseydiniz
görüntüyü belirttiğiniz yola kayıt yapacaktı.

![IMG 1]({{ "/img/pil3.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/pil3.png }})

### Görüntüyü Kırpma

Kırpma işlemi için crop() fonksiyonunu kullanacağız. Pillow görüntünün sol üst köşesini (0,0) noktası
olarak alır.

```Python
from PIL import Image, ImageFilter

im = Image.open('a.jpeg')

box = (200, 200, 400, 400)
region = im.crop(box)
print('Kırpılmış görüntünün boyutu: ', region.size)
region.show()
```

Burada kırpılan kısım 200x200 pikseldir. box adındaki değişkene verdiğim değerler benim kırpmak istediğim
bölgeyi gösterir. Ardından crop() ile kırparak region değişkenine atadık. Sonrasında ekranda görüntüledik.

![IMG 1]({{ "/img/pil4.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/pil4.png }})

Şimdilik yazıyı burada sonlandırmak istiyorum. Eğer yazıyı güzelce okuduysanız kırptığınız görüntüyü
nasıl kaydedeceğinizi biliyorsunuzdur. Bir deneyin bakalım olacak mı? Herkese iyi çalışmalar

---------------------------------------

**Yazı Hazırlanılırken Dinlenilen Şarkılar:**

[Contra - Çivi](https://www.youtube.com/watch?v=ww2nAj6c3cQ)

[Kamuran Akkor - Bir Ateşe Attın](https://www.youtube.com/watch?v=oKMgBYS6MZA)

[Ceylan Ertem - El Adamı](https://www.youtube.com/watch?v=thk64emxwjo)

[Teoman - Güzel Bir Gün](https://www.youtube.com/watch?v=2at-8ZbjRXs)

[Yol'a Düş - Mavi Türkü](https://www.youtube.com/watch?v=-x9GxGYA7nE)

[Norm Ender - Sözler Şerefsiz Oldu](https://www.youtube.com/watch?v=b9QApLJ3TI0)
