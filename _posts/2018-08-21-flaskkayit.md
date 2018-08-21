---
layout: post
title: Flask ve SQLAlchemy ile Kayıt Uygulaması
subtitle: Python Microframewor'u olan Flask ile register uygulaması
gh-repo: ilteriskesk/ilteriskesk.github.io
gh-badge: [star, fork, follow]
tags: [jekyll, git, github, flask, sqlalchemy]

---

### Flask ve SQLAlchemy Kullanarak Basit Bir Kullanıcı Kayıt Sayfası Oluşturma

Öncelikle herkese iyi bayramlar. Bayramın ilk günü beklediğimden daha az yoğun geçiyordu bende fırsat
bulmuşken bir yazı yazayım dedim.
[Flask](http://flask.pocoo.org/) bildiğiniz gibi python ile yazılmış bir microframework (mikro çatı).
Oluşturacağım küçük web projelerini flask ile yapmayı tercih ediyorum. Ancak daha karmaşık projeleri
küçük küçük kütüphaneler kurarak kolayca yapmanız mümkün.

Bu yazıda **Flask** ve **SQLAlchemy** kullanılarak basit bir kayıt olma sistemi yapacağız. Hazırsak hadi
gelin başlayalım.

---------------------------------------

İlk olarak bir .py uzantılı bir dosya açalım. İçine şu kodları ekleyelim.

```Python

from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SECRET_KEY'] = 'linuxdegilgnulinux'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////home/ilteriskeskin/fla/data.db' # Burada data.db adlı veritabanını nereye kaydettiyseniz orayı yazın.
db = SQLAlchemy(app)

class User(db.Model):
        """ Veri Tabanı İçin Kullanıcı Tablosu Oluşturuldu"""
        id = db.Column(db.Integer, primary_key=True)
        username = db.Column(db.String(80), unique=True)
        password = db.Column(db.String(80))

        def __init__(self, username, password):
                self.username = username
                self.password = password

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/register/', methods=['GET', 'POST'])
def register():
        """Kayıt Formu"""
        if request.method == 'POST':
                new_user = User(username=request.form['username'], password=request.form['password'])
                db.session.add(new_user)
                db.session.commit()
                return render_template('login.html')
        return render_template('register.html')

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)

```
Projemizin Back-End kısmı bu kadar. Bundan sonrası oldukça sade ve basit template kısmı. Gelelim orayı yapmaya.

Hemen ilk olarak base.html adında bir dosya oluşturalım ve içine şunları ekleyelim.

```Html
<html>
  <head>
    <title>Flask Kayıt Olma</title>
  </head>
  <body>
    <div><a href="/">Flask Kayıt Olma</a></div>
		
    <hr>
    {% block content %}
    
    {% endblock %}
  </body>
</html>

```
Ardından index.html adlı bir dosya açıp, anasayfamızın içeriğini dolduralım.

```Html
{% extends "base.html" %}
{% block content %}
 
<a href="/register">Register</a>

{% endblock %}

```

Bunuda hallettiysek zaman kaybetmeden register.html adlı bir dosya açalım ve kayıt formumuzu oluşturalım.

```Html
{% extends "base.html" %}
{% block content %}

<h2>Kayıt Ol</h2>
<hr>
<form action="/register/" method="POST">
  <input type="username" name="username" placeholder="Username">
  <input type="password" name="password" placeholder="Password">
  <input type="submit" value="Log in">
</form>

{% endblock %}

```

Ve son olarak kullanıcı kaydolduktan sonra yönlendireceğimiz giriş yap yani login.html sayfamızı oluşturup içine
şunları ekleyelim.

```Html
{% extends "base.html" %}
{% block content %}

<h1>Giriş Yap</h1>

{% endblock %}

```

İşte şimdi tamam. Projemiz artık hazır. Ben nasıl olması gerektiğine dair ekran görüntüleri paylaşacağım. Bazı noktalar var
öncelikle onları belirteyim.

* Projemiz tasarım amaçlı olmayıp yalnızca kayıt olma formu nasıl yapılır anlatmak içindir.
* Tasarımı kendi imkanlarınız ile güzelleştirebilirsiniz.
* Proje kodlarını [GitHub](https://github.com/ilteriskesk) hesabımda paylaşmadım ancak isteyen olursa mail atabilirim.
* Daha sonra login olma ile ilgili bir yazı gelecek.

Hemen görüntüleri paylaşayım.

![alt text](https://github.com/ilteriskesk/ilteriskesk.github.io/tree/master/img/home_yazi.png "IMG 1")

**Anasayfa görüntümüz bu şekilde olacaktır arkadaşlar.**

![alt text](https://github.com/ilteriskesk/ilteriskesk.github.io/tree/master/img/register_yazi.png "IMG 1")

**Kayıt bölümü bu şekildedir ve formu doldurup kaydolalım.**

![alt text](https://github.com/ilteriskesk/ilteriskesk.github.io/tree/master/img/sqlitebrowser_yazi.png "IMG 1")

**Sqlitebrowser adlı program yardımıyla oluşan veritabanımızı açalım ve içine bakalım.**

![alt text](https://github.com/ilteriskesk/ilteriskesk.github.io/tree/master/img/db_yazi.png "IMG 1")

**Bu şekilde kullanıcı adınız ve parolanız kaydoldu ise programınız sorunsuz bir şekilde çalışıyor.**
