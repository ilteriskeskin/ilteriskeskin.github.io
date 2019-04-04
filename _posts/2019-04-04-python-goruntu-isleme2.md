---
layout: post
title: Python ile Görüntü İşleme-2
subtitle: Resmi döküman takibi ile OpenCV kütüphanesine giriş.
gh-repo: ilteriskeskin/ilteriskeskin.github.io
gh-badge: [star, fork, follow]
tags: [jekyll, git, github, OpenCV, Python3]

---

Merhaba arkadaşlar. [Python İle Görüntü İşleme-1](/2019-03-10-python-goruntu-isleme1) isimli bir yazı yazmıştım. Bu yazıda Python ile görüntü işlemeye giriş yapmıştık. Bu yazımda ise OpenCV kütüphanesine giriş yapacağız ve biraz daha kullanışlı fonksiyonları göreceğiz. Yazıya başlamadan önce bazı kurulumlar gerekli.

Kurulumları tamamlayarak başlayalım.

---------------------------------------

### Gereklilikler

**Kurulumlar ve işlemler tamamiyle GNU/Linux dağıtımı olan Fedora üzerinde yapılacaktır.**

İlk olarak bilgisayarınızda Python3, pip3, Numpy ve Matplotlib, Tkinter ve OpenCV kurulu olmalıdır.

Kurmak için:

```
sudo dnf install python3

sudo dnf install python3-pip

sudo pip3 install numpy

sudo pip3 install matplotlib

sudo yum install python3-tkinter
```

Fedoraya OpenCV kurulumu için [bu](/2019-04-01-fedora-opencv-kurulum), Ubuntuya OpenCV kurulumu için ise [bu](/2018-12-20-opencvkurulum) yazıyı takip edebilirsiniz.

Kurulumları tamamladıysanız artık başlayabiliriz.

### OpenCV ile Görüntü Okuma

Bir görüntüyü okumak için cv2.imread() fonksiyonunu kullanabiliriz. Bir görüntüyü okuyabilmek için görüntü, çalıştığımız dizinde olmalı veya tam yolunu vermeliyiz.

Görüntüyü renkli bir şekilde açmak için cv2.IMREAD_COLOR,
Görüntüyü gri tonlarında açmak için cv2.IMREAD_GRAYSCALE,
Görüntüyü alfa kanalında açmak için cv2.IMREAD_UNCHANGED

bayraklarını kullanabiliriz. Ancak bunlar yerine direkt **1,0,-1** değerleri vererek çok daha rahat kullanabiliriz. Gelin aşağıdaki kodumuzu inceleyelim.

```Python
import numpy as np
import cv2

# Görüntüyü gri tonlarda okumak için
img = cv2.imread('opencv-logo.png',0) # img = cv2.imread('opencv-logo.png',cv2.IMREAD_GRAYSCALE) ile aynı işi yapar.
```

Bu kodu çalıştırdığınızda ekranda herhangi bir değişiklik olmayacaktır. Bunun nedeni ise henüz görüntüyü ekranda göstermememiz.

---------------------------------------

### OpenCV ile Görüntüyü Gösterme

Okuduğumu bir görüntüyü ekranda görmek için cv2.imshow() fonksiyonunu kullanabiliriz.

Kodumuz:

```Python
import numpy as np
import cv2

# Görüntüyü gri tonlarda okumak için
img = cv2.imread('opencv-logo.png',0)

cv2.imshow('image',img) # İlk parametre açılan pencerenin ismi ikincisi ise okunan görüntümüzdür.
cv2.waitKey(0) # Bir tuşa basmamızı bekler, böylece görüntümüz ekranda açık kalır.
cv2.destroyAllWindows() # Tüm pencereleri kapatmamızı sağlar.
```

Kodumuzu çalıştırdığımızda şöyle bir görüntü elde ederiz:

![IMG 1]({{ "/img/pyopencv1.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/pyopencv1.png }})

---------------------------------------

### OpenCV ile Görüntüyü Yazma

Okuduğumuz bir görüntüyü bilgisayarımıza kaydetmek için cv2.imwrite() fonksiyonunu kullanabiliriz.

Kodumuz:

```Python
import numpy as np
import cv2

img = cv2.imread('opencv-logo.png',cv2.IMREAD_GRAYSCALE)

cv2.imshow('image', img)
cv2.imwrite('deneme.png',img)

cv2.waitKey(0)
cv2.destroyAllWindows()
```

![IMG 1]({{ "/img/pyopencv2.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/pyopencv2.png }})

---------------------------------------

### Matplotlib Kullanımı

Matplotlib, Python için size çok çeşitli çizim metodları veren bir çizim kütüphanesidir. Şimdi gelin Matplotlib ile görsellerimizi nasıl göstereceğimize bakalım.

Kodumuz:

```Python
import numpy as np
import cv2
from matplotlib import pyplot as plt

img = cv2.imread('messi5.jpg',0)
plt.imshow(img, cmap = 'gray', interpolation = 'bicubic')
plt.xticks([]), plt.yticks([])  # to hide tick values on X and Y axis
plt.show()
```

![IMG 1]({{ "/img/pyopencv3.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/pyopencv3.png }})

---------------------------------------

Bu yazımızı burada sonlandıralım arkadaşlar. Umarım faydalı olmuştur.

Herkese iyi çalışmalar diliyorum :)
