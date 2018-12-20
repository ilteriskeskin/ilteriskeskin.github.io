---
layout: post
title: Ubuntu 18.04 Üzerine OpenCV Kurulumu
subtitle: Resmi döküman takibi ile Ubuntu üzerine OpenCV kurulumu. 
gh-repo: ilteriskesk/ilteriskesk.github.io
gh-badge: [star, fork, follow]
tags: [jekyll, git, github, OpenCV, Ubuntu]

---

Merhaba ardakaşlar. Ekipçe TeknoFest 2019'a hazırlanmaya başladık. Ekipte içinde ben yazılım kısmıyla ilgileniyorum.
Yani görüntü işleme ile epeyce içli dışlı olacağım. Daha önce OpenCV kurmamış arakdaşlar kurulumda zorlanıyorlardı. İlk 
OpenCV kurulumumumda (bundan 1 yıl önce) resmen ağlamıştım :). 1-2 hafta önce yeniden kurdum. Oldukça sancısız geçti. E 
durum böyle olunca bir yazı yazayım dedim.

Hadi başlayalım.

---------------------------------------

### Gerekli Kütüphanelerin Yüklenmesi ve Kurulum

**Not:**

* Mümkünse internetini iyi olan bir yerde indirme yapın.
* Ubuntu 18.04 ve 16.04 üzerinde denenmeştir.

**Gerekli Paketler**

* GCC 4.4.x or later
* CMake 2.8.7 or higher
* Git
* GTK+2.x or higher, including headers (libgtk2.0-dev)
* pkg-config
* Python 2.6 or later and Numpy 1.5 or later with developer packages (python-dev, python-numpy)
* ffmpeg or libav development packages: libavcodec-dev, libavformat-dev, libswscale-dev
* [optional] libtbb2 libtbb-dev
* [optional] libdc1394 2.x
* [optional] libjpeg-dev, libpng-dev, libtiff-dev, libjasper-dev, libdc1394-22-dev
* [optional] CUDA Toolkit 6.5 or higher

Şimdi bu paketleri kuralım.

```
sudo apt-get install build-essential
sudo apt-get install cmake git libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev libswscale-dev
sudo apt-get install python-dev python-numpy libtbb2 libtbb-dev libjpeg-dev libpng-dev libtiff-dev libjasper-dev libdc1394-22-dev
```

---------------------------------------

Şimdi ise OpenCV GitHub reposunu klonlayalım. Bu işlemleri gerçekleştirmek istediğiniz dizine girip orada yapın.

```
git clone https://github.com/opencv/opencv.git
git clone https://github.com/opencv/opencv_contrib.git
```

---------------------------------------

Artık indirme işlemleri bitti. Klonladığımız opencv reposuna girelim. Girdiğimiz dizinde build adında bir dizin daha
oluşturup içine girelim. Komutlar aşağıdaki gibidir.

```
cd opencv/
mkdir build
cd build
```

Bu adımlar tamamlandıysa şimdi cmake'i çalıştırıyoruz.

```
cmake -D CMAKE_BUILD_TYPE=Release -D CMAKE_INSTALL_PREFIX=/usr/local ..
```

Bu adımı da başarıyla tamamladıysanız sıra son aşamalardan birine geldi. Dişinizi sıkın az kaldı.

Şimdi OpenCV kütüphanesini build edeceğiz. Bu kısım biraz uzun sürebilir. Bilgisayarınız fan çalıştırabilir. Sakin
olun :).

```
make -j7
```

Son adımımızı yapalım ve bitirelim.

```
sudo make install
```

---------------------------------------

OpenCV kütüphanesini Python ile kullanacaksanız iki adımımız daha kaldı. Gerekli iki modülümüzü yükleyelim.

```
pip3 install opencv-python
pip3 install opencv-contrib-python
```

Kontrol edelim ve bitirelim. Kontrol etmek için bir Python dosyası açın (opencv_deneme.py) ve içine aşağıdaki kodları yazın.

```
import cv2

print(cv2.__version__)
```

ve çalıştırın. Eğer çıktınız aşağıdaki gibi ise herhangi bir sorun yok demektir.

![IMG 1]({{ "/img/opencv.png" | https://github.com/ilteriskesk/ilteriskesk.github.io/tree/master/img/opencv.png }})

Okuduğunuz için teşekkür ederim :)

---------------------------------------

**Yazı Hazırlanılırken Dinlenilen Şarkılar:**

[Adamlar - Koca Yaşlı Şişko Dünya](https://www.youtube.com/watch?v=ehanblxZeA4)

[Eddie Vedder - Society - Into The Wild - HD 1080p - Soundtrack - lyrics](https://www.youtube.com/watch?v=cl4cLEToPfc)

[Cem Adrian & Hande Mehan - Sen Benim Şarkılarımsın (Official Audio)](https://www.youtube.com/watch?v=brRnhthvnKs)

[Pilli Bebek - Haram Geceler](https://www.youtube.com/watch?v=a4ddJyBkRVo)