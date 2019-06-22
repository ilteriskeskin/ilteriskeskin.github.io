Title: Fedora Sisteme Zsh Kurulumu
Date: 2019-03-31
Modified: 2019-03-31
Category: ZSH
Tags: fedora, zsh

Merhaba ardakaşlar. Bu yazımda şuanda kullandığım Fedora 29 üzerine zsh kabuğunun kurulumunu anlatacağım.

------------------------

### ZSH Nedir?

Zsh aslında Bash'e göre oldukça yeni bir kabuktur. GNU/Linux ve MacOS sistemlerin terminalinde hazır olarak
gelen Bash oldukça eskidir. Bash fanatikleri lütfen bana kızmayın ama bazı noktalarda eksik kalıyor. Zsh son
kullanıcıya terminal tarafında epeyce hız ve kolaylık sağlıyor.

### Fedora Üzerine Kurulumu

Kurulum için aşağıdaki adımları izlemeniz yeterli olacaktır.

```
sudo dnf install zsh

wget --no-check-certificate http://install.ohmyz.sh -O - | sh

sudo chsh -s /usr/bin/zsh
```

Artık hazırsınız ancak tema seçimi nasıl yapılır kısaca buna değineyim.

```
nano ~/.zshrc
```

Açılan ekranda **ZSH_THEME="robbyrussell"** satırını bulun ve robbyrussell kısmını silin.

[Bu adresten](https://github.com/robbyrussell/oh-my-zsh/wiki/Themes) hoşunuza giden bir temanın ismini
robbyrussell'i sildiğiniz yere yazarak yeni temanızı kullanmaya başlayabilirsiniz.

**Not:** Eğer benim kullandığım temayı merak ediyorsanız ben **risto** isimli temayı kullanıyorum.

Umarım hoşlanırsınız. Herkese iyi çalışmalar :)
