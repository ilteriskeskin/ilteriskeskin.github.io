---
layout: post
title: Python'da İşe Yarayan Yöntemler 1
subtitle: Python'da çok işe yarayan yöntemlerden bahsedeceğiz.
gh-repo: ilteriskesk/ilteriskesk.github.io
gh-badge: [star, fork, follow]
tags: [jekyll, git, github, python3]

---

Merhaba, yeni bir yazı serisine başlama kararı aldım. Bu seride Python'da oldukça
işe yarayan bazı özelliklere değineceğim. Bu özelliklerin kodlarını ve ekran görüntülerini paylaşacağım.

Kahvenizi hazırlayın, masanıza oturun ve hazırsanız başlayalım :)

**Not:**
Maalesef benim masam yok o yüzden yatağımda idare edeceğim... Ama oldukça güzel bir kahvem var, hepimize afiyet 
olsun :)

---------------------------------------

İlk olarak bir py1.py isimli bir dosya açalım. İçine şu kodları ekleyelim.

**py1.py**

```Python
def dispatch_if(operator, x, y):
    if operator == 'add':
        return x + y
    elif operator == 'sub':
        return x - y
    elif operator == 'mul':
        return x * y
    elif operator == 'div':
        return x / y
    else:
        return None

def dispatch_dict(operator, x, y):
    return {
        'add': lambda: x + y,
        'sub': lambda: x - y,
        'mul': lambda: x * y,
        'div': lambda: x / y,
    }.get(operator, lambda: None)()

print("dispatch_if func  : ", dispatch_if('mul', 2, 8))
print("dispatch_dict func: ", dispatch_dict('mul', 2, 8))
print("dispatch_if func  : ", dispatch_if('unknown', 2, 8))
print("dispatch_dict func: ", dispatch_dict('unknown', 2, 8))

```

**Ekran Çıktısı:**

![IMG 1]({{ "/img/p1.png" | https://github.com/ilteriskesk/ilteriskesk.github.io/tree/master/img/p1.png }})

İlk kodlarımız bunlar. Karşılaştırıp aradaki bağlantıyı bulabilirsiniz :)

-------------------------------------------------

Şimdi ise py2.py isimli bir dosya açalım. İçine şu kodları ekleyelim.

**py2.py**

```Python
string = "Hello Python"
  
print(string[::-1])
print(string[::-1][::-1])
print(string[::2])
print(string[::3])
print(string[2::-1])
print(string[3::-1])
print(string[4::-1])

```

**Ekran Çıktısı:**

![IMG 1]({{ "/img/p2.png" | https://github.com/ilteriskesk/ilteriskesk.github.io/tree/master/img/p2.png }})

Burada ise stringler ile güzel işlemler yaptığımız bir program yazdık.

-------------------------------------------------

Son olarak py3.py isimli bir dosya açalım. İçine şu kodları ekleyelim.

**py3.py**

```Python
my_list = [1, 2, 3, 4, 5]
print(my_list)

del my_list[:] # my_list adındaki listenin elemanlarını siler
print(my_list)

# del my_list # my_list adında oluşturulan listeyi tamamen siler
# print(my_list) # Hata verecektir. O yüzden yorum satırı

a = my_list
my_list[:] = [7, 8, 9]
print(my_list)
print(a)
print(a is my_list)

b = my_list[:]
print(b)
print(b is my_list)

```

**Ekran Çıktısı:**

![IMG 1]({{ "/img/p3.png" | https://github.com/ilteriskesk/ilteriskesk.github.io/tree/master/img/p3.png }})


Burada ise listeler ile işlemler yaptık.

--------------------------------------

Burada yazımı sonlandırıyorum. Bundan sonra az bilinen kütüphaneler ve yine az kullanılan özellikler ile 
serilere devam edeceğim. Okuduğunuz için teşekkür ederim. 

İyi çalışmalar diliyorum.

--------------------------------------

**Yazı Hazırlanılırken Dinlenilen Şarkılar:**

[Cem Karaca - Kerkük Zindanı](https://www.youtube.com/watch?v=BqJ-4ePe_Pk)

[Cem Karaca - Tamirci Çırağı](https://www.youtube.com/watch?v=9KkAtcPku2k)

[Sagopa Kajmer & Bergen - Affetmem](https://www.youtube.com/watch?v=-dlJ1S4GHM8)

[DJ Tarkan ft. Sagopa Kajmer - Oldu Olanlar](https://www.youtube.com/watch?v=dcEbtq4ezXk)