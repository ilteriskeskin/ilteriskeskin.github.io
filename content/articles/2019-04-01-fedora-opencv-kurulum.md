Title: Fedora 29 Üzerine OpenCV 4.0.0 Kurulumu
Date: 2019-04-01
Modified: 2019-04-01
Category: OpenCV
Tags: opencv, fedora, görüntü işleme, image processing

Merhaba ardakaşlar. Ekipçe TeknoFest 2019'a hazırlanmaya başladığımızı ve ekip içinde yazılım ile ilgilendiğimi daha önce söylemiştim. Görüntü işleme ile uğraşmaya başladım. İlgimi çekmeye başladı
ancak hala web uygulamaları geliştirirken aldığım keyfi görüntü işlemeden alamıyorum :)

Kendime bir süre önce Thinkpad x200s almıştım. Neden aldın filan gibi şeyler diyenler şimdi aslında güzel ya lazım böyle bir şey der oldular. Alma sebebim taşınabilir olması, güzel olması, efsane kasa olması. Zaten almak için şartları çok çok zorlamıştım ve sonunda sahibi olmuştum. Neyse işte gel zaman git zaman bu Thinkpad üzerine ben Fedora 29 kurdum. Sonra yanımda sürekli bu bilgisayarı taşımaya başladığım için buna OpenCV kurmam gerekiyordu.

Şimdi size nasıl kurduğumu anlatacağım.

---------------------------------------

**Kuruluma geçmeden önce bilgisayarımın özelliklerini şöyle bırakayım**

![IMG 1]({{ "/img/screenfetch.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/screenfetch.png }})

---------------------------------------

### Gerekli Kütüphanelerin Yüklenmesi ve Kurulum

**Not:**

* Mümkünse interneti iyi olan bir yerde indirme yapın.
* Fedora 29 üzerinde denenmiştir.
* Dökümandaki gereksiz ve eski paketler kaldırılmış, eksik paketler eklenmiştir.

```
sudo dnf install cmake
sudo dnf install python-devel numpy
sudo dnf install gcc gcc-c++
sudo dnf install gtk2-devel
sudo dnf install libdc1394-devel
sudo dnf install gstreamer-plugins-base-devel
sudo dnf install libpng-devel
sudo dnf install libjpeg-turbo-devel
sudo dnf install jasper-devel
sudo dnf install openexr-devel
sudo dnf install libtiff-devel
sudo dnf install libwebp-devel
sudo dnf install tbb-devel
sudo dnf install eigen3-devel
sudo dnf install doxygen
```

---------------------------------------

Şimdi ise OpenCV GitHub reposunu klonlayalım. Bu işlemleri gerçekleştirmek istediğiniz dizine girip orada yapın.

```
git clone https://github.com/opencv/opencv.git
git clone https://github.com/opencv/opencv_contrib.git
```

---------------------------------------

Artık indirme işlemleri bitti. Klonladığımız opencv reposuna girelim. Girdiğimiz dizinde build adında bir dizin daha oluşturup içine girelim. Komutlar aşağıdaki gibidir.

```
cd opencv/
mkdir build
cd build
```

Bu adımlar tamamlandıysa şimdi cmake konfigürasyonu yapıp cmake'i çalıştırıyoruz.

```
cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX=/usr/local ..

cmake -D WITH_TBB=ON -D WITH_EIGEN=ON ..

cmake -D BUILD_DOCS=ON -D BUILD_TESTS=OFF -D BUILD_PERF_TESTS=OFF -D BUILD_EXAMPLES=OFF ..

cmake -D WITH_OPENCL=OFF -D BUILD_opencv_gpu=OFF -D BUILD_opencv_gpuarithm=OFF -D BUILD_opencv_gpubgsegm=OFF -D BUILD_opencv_gpucodec=OFF -D BUILD_opencv_gpufeatures2d=OFF -D BUILD_opencv_gpufilters=OFF -D BUILD_opencv_gpuimgproc=OFF -D BUILD_opencv_gpulegacy=OFF -D BUILD_opencv_gpuoptflow=OFF -D BUILD_opencv_gpustereo=OFF -D BUILD_opencv_gpuwarping=OFF ..

cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX=/usr/local ..
```

Bu adımı da başarıyla tamamladıysanız sıra son aşamalardan birine geldi. Dişinizi sıkın az kaldı.

Şimdi OpenCV kütüphanesini build edeceğiz. Bu kısım biraz uzun sürebilir. Bilgisayarınız fan çalıştırabilir. Sakin olun :).

```
make -j2
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

![IMG 1]({{ "/img/opencv-fedora.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/opencv-fedora.png }})

Okuduğunuz için teşekkür ederim :) Bundan sonraki yazım Python ile Görüntü İşleme serisinin 2. yazısı olacak.

Herkese iyi çalışmalar :)

---------------------------------------
