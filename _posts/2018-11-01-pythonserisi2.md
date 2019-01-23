---
layout: post
title: Python'da İşe Yarayan Yöntemler 2 - Turtle Modülü
subtitle: Python'da çok işe yarayan yöntemlerden bahsedeceğiz.
gh-repo: ilteriskeskin/ilteriskeskin.github.io
gh-badge: [star, fork, follow]
tags: [jekyll, git, github, python3, turtle]

---

Merhaba, yeni bir [yazı](2018-10-28-pythonserisi1.md) serisine başlama kararı almıştım. Bu seride Python'da oldukça
işe yarayan bazı özelliklere değineceğim. Bu özelliklerin kodlarını ve ekran görüntülerini paylaşacağım.

Bu yazımda ise Python'un Turtle modülünden bahsedeceğim. çocuklara Python öğretmek istediğinizde siyah 
ekran sıkıcı geldiğinde ortama biraz renk ve eğlence katması açısından oldukça hoş bir modül.

**Not:**
Bir süredir sınavlarım dolayısıyla yazamıyordum. Müsait bir an buldum ve hemen yazayım dedim :)

---------------------------------------

İlk olarak turtle1.py isimli bir dosya açalım. İçine şu kodları ekleyelim.

**turtle1.py**

```Python
import turtle

kaplumbaga = turtle.Turtle()
kaplumbaga.circle(200)
turtle.getscreen()._root.mainloop()

```

**Ekran Çıktısı:**

![IMG 1]({{ "/img/t1.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/t1.png }})

İlk kodlarımız bunlar. Burada 150 birim çapında bir çember oluşturuyoruz.

-------------------------------------------------

Şimdi ise turtle2.py isimli bir dosya açalım. İçine şu kodları ekleyelim.

**turtle2.py**

```Python
import turtle

kaplumbaga = turtle.Turtle(shape = "turtle")
kaplumbaga.circle(200)
turtle.getscreen()._root.mainloop()

```

**Ekran Çıktısı:**

![IMG 1]({{ "/img/t2.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/t2.png }})

Burada ise ilk programın hemen hemen aynısını yaptık. Sadece burada çizim yapan aracımızın şekli (shape) 
kaplumbağa.

-------------------------------------------------

Şimdi turtle3.py isimli bir dosya açalım. İçine şu kodları ekleyelim.

**turtle3.py**

```Python
from turtle import *

color('red', 'yellow')
begin_fill()

while True:
    forward(200)
    left(170)
    if abs(pos()) < 1:
        break

end_fill()

done()

```

**Ekran Çıktısı:**

![IMG 1]({{ "/img/t3.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/t3.png }})

Burada ise Python3 turtle dökümantasyonundan yardım alarak karmaşık ama hoş görünümlü bir şekil çizdirdik.

--------------------------------------

Şimdi turtle4.py isimli bir dosya açalım. İçine şu kodları ekleyelim.

**turtle4.py**

```Python
import turtle

kaplumbaga = turtle.Turtle()
turtle.bgcolor("Black") # Arka plan rengi
kaplumbaga.speed(0) # Varsayılan hız

turtle.title("Kaplumbaaaaa") # Başlık

def drawRainbow():
    for i in range(500):
        kaplumbaga.color('white') # kalem rengi
        kaplumbaga.backward(i)
        kaplumbaga.left(110) # 110 derece sola dönüş

    kaplumbaga.color('white') # kaplumbağa rengi
    kaplumbaga.hideturtle() # kaplumbağa görünmez
    kaplumbaga.setpos(20, 0) # x = 20, y = 0 koordinat ayarlama

drawRainbow()

```

**Ekran Çıktısı:**

![IMG 1]({{ "/img/t4.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/t4.png }})

Burada ise yine karmaşık ancak güzel bir çizim yaptırdık kaplumbağamıza.

--------------------------------------

Burada yazımı sonlandırıyorum. Bundan sonra az bilinen kütüphaneler, yine az kullanılan özellikler ve çokça 
işe yarayan kısayollar ile serilere devam edeceğim. Okuduğunuz için teşekkür ederim. 

İyi çalışmalar diliyorum.

--------------------------------------

**Yazı Hazırlanılırken Dinlenilen Şarkılar:**

[Teoman - N'apim Tabiatım Böyle](https://www.youtube.com/watch?v=Sdw7eaCSzhg)
[Teoman - Serseri](https://www.youtube.com/watch?v=qsqeRdgySiI)
[Mor ve Ötesi - Bir Derdim Var](https://www.youtube.com/watch?v=7RW8n4iXZbA)
[Cem Karaca - Tamirci Çırağı](https://www.youtube.com/watch?v=9KkAtcPku2k)
[Adamlar - Eski Dostum Tankla Gelmiş](https://www.youtube.com/watch?v=PC78PmiYob0)

**Kaynak**

[Halit Alptekin](http://www.halitalptekin.com/python-turtle-modulu.html)
[Python3 Docs](https://docs.python.org/3/library/turtle.html)
