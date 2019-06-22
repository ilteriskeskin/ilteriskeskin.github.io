Title: Python'da İşe Yarayan Yöntemler 4
Date: 2019-02-15
Modified: 2019-02-15
Category: Python3
tags: python3

Merhaba, yeni bir [yazı](2018-10-28-pythonserisi1.md) serisine başlama kararı almıştım. Bu seride Python'da oldukça işe yarayan bazı özelliklere değineceğim. Bu özelliklerin kodlarını ve ekran görüntülerini paylaşacağım.

Bu yazımda ise Python'un hayatımızı kolaylaştıracak bazı fonksiyonlarından ve özelliklerinden bahsedeceğim.

**Önemli Not:** Bir GNU/Linux dağıtımında Python kabuğunu açmak için terminali açıp içine **python3** yazıp enter tuşuna basın. Ardından kabuk açılacaktır. Kabuktan
çıkmak için **exit()** ya da ctrl + d

---------------------------------------

İlk olarak Python kabuğu açalım ve aşağıdakileri sırasıyla yazalım.

```Python
x, y = 10, 20
print(x, y) 

x, y = y, x 
print(x, y) 

```

**Ekran Çıktısı:**

![IMG 1]({{ "/img/py4_1.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/py4_1.png }})

İlk kodlarımız bunlar. Burada yaptığımız şey aslında bir swap (takas) işlemi. Python'da iki değişkene örnekteki gibi atama yapmak mümkün. Bu yüzden
takas işlemi oldukça kolay bir şekilde yapıldı.  

--------------------------------------

Şimdi ise ister yeni bir kabuk açın ister aynı kabuktan devam edin.

```Python
a = ["Ali", "Ata", "Bak"]
print(a)
print(" ".join(a))
print(",".join(a))

```

**Ekran Çıktısı:**

![IMG 1]({{ "/img/py4_2.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/py4_2.png }})

Bu kısımda ise bir listemiz var. İçinde üç farklı elemanımız var. Bu elemanların aralarına istediğimiz karakterleri koyarak ekrana basıyoruz.

--------------------------------------

Aynı şekilde ister yeni kabuk açın ister aynı kabuktan devam edin.

```Python
import sys

x = 'A'
y = 'Ali'
z = 1

print(sys.getsizeof(x))
print(sys.getsizeof(y))
print(sys.getsizeof(z))

```

**Ekran Çıktısı:**

![IMG 1]({{ "/img/py4_3.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/py4_3.png }})

Bu kod parçasında **sys** modülünü içine aktardık. Ardından **sys** modülünün **getsizeof()** metodunu kullanarak objelerin bellekte kapladığı yeri
öğrenebiliriz.

--------------------------------------

Son örneğimize gelelim. Zamanla örnekler artacaktır.

```Python
a = [1, 2, 3]

x, y, z = a

print(x)
print(y)
print(z)

```

**Ekran Çıktısı:**

![IMG 1]({{ "/img/py4_4.png" | https://github.com/ilteriskeskin/ilteriskeskin.github.io/tree/master/img/py4_4.png }})

Burada bir listenin elemanlarını tek bir eşitleme ile üç farklı değişkene atadık.

--------------------------------------

Burada yazımı sonlandırıyorum. Bundan sonra az bilinen kütüphaneler, yine az kullanılan özellikler ve çokça
işe yarayan kısayollar ile serilere devam edeceğim. Okuduğunuz için teşekkür ederim.

İyi çalışmalar diliyorum.
