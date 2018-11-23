---
layout: post
title: Python'da İşe Yarayan Yöntemler 3
subtitle: Python'da çok işe yarayan yöntemlerden bahsedeceğiz.
gh-repo: ilteriskesk/ilteriskesk.github.io
gh-badge: [star, fork, follow]
tags: [jekyll, git, github, python3]

---

Merhaba, yeni bir [yazı](2018-10-28-pythonserisi1.md) serisine başlama kararı almıştım. Bu seride Python'da oldukça işe yarayan bazı özelliklere değineceğim. Bu özelliklerin kodlarını ve ekran görüntülerini paylaşacağım.

Bu yazımda ise Python'un hayatımızı kolaylaştıracak bazı fonksiyonlarından ve özelliklerinden bahsedeceğim.

---------------------------------------

İlk olarak dosya1.py isimli bir dosya açalım. İçine şu kodları ekleyelim.

**dosya1.py**

```Python
sayi1 = 97
harf1 = 'a'
harf2 = 'A'
karakter1 = '/'
karakter2 = '*'

print("sayi1 = 30, ASCII   : ", chr(sayi1))
print("harf1 = a, ASCII    : ", ord(harf1))
print("harf2 = A, ASCII    : ", ord(harf2))
print("karakter1 = /, ASCII: ", ord(karakter1))
print("karakter2 = *, ASCII: ", ord(karakter2))

```

**Ekran Çıktısı:**

![IMG 1]({{ "/img/sss1.png" | https://github.com/ilteriskesk/ilteriskesk.github.io/tree/master/img/sss1.png }})

İlk kodlarımız bunlar. Burada yaptığımız şey sayıların, harflerin ve karakterlerin ASCII karşılığını
görüntülememizi sağlamak. **chr** ile sayıların, **ord** ile harf ve karakterlerin ASCII karşılığını
görüntülüyoruz.

**Not:** Harflerde birer karakterdir.

--------------------------------------

Şimdi ise dosya2.py adında bir dosya açalım ve içine aşağıdaki kodları ekleyelim.

**dosya2.py**

```Python
sayi = 12.87654

print(round(sayi))
print(round(sayi, 0))
print(round(sayi, 1))
print(round(sayi, 2))
print(round(sayi, 3))

```

**Ekran Çıktısı:**

![IMG 2]({{ "/img/sss2.png" | https://github.com/ilteriskesk/ilteriskesk.github.io/tree/master/img/sss2.png }})

**round** fonksiyonu ondalıklı sayıları, kendine en yakın tam sayıya yuvarlar. Ancak yanına verdiğimiz
parametreler ile yuvarlama hassasiyetini arttırıp azalttık.

--------------------------------------

Burada yazımı sonlandırıyorum. Bundan sonra az bilinen kütüphaneler, yine az kullanılan özellikler ve çokça
işe yarayan kısayollar ile serilere devam edeceğim. Okuduğunuz için teşekkür ederim.

İyi çalışmalar diliyorum.
