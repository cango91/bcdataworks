import self from "../img/self.webp"
import mock1 from "../img/mock1.webp"
import mock2 from "../img/mock2.webp"
import mock3 from "../img/mock3.webp"
import mock4 from "../img/mock4.webp"
import mock5 from "../img/mock5.webp"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Burak",
    lastName: "Ceylan",
    initials: "bc", // the example uses first and last, but feel free to use three or more if you like.
    position: "Analist ve veri bilimciyim",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'Türkiye'
        },
        {
            emoji: "💼",
            text: "Enpara.com'da analitik yöneticisi"
        },
        {
            emoji: "📧",
            text: "ceylann.burakk@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com/brkcyln92",
            icon: 'fab fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/burakceylan.92",
            icon: 'fab fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://medium.com/@ceylann.burakk",
            icon: "fa-brands fa-medium",
            label: 'medium'
        },
        {
            link: "https://www.linkedin.com/in/burak-ceylan92/",
            icon: "fab fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/burakceylann",
            icon: "fab fa-twitter",
            label: 'twitter'
        }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Merhaba! Adım Burak CEYLAN. Enpara.com'da Analitik Yöneticisiyim. Marmara Universitesi'nde Ekonometri okudum ve İşletme Finansı'nda master yaptım. 'Uluslararası Ticarette Rekabet ve Kurumsal Yönetişim Kavramlarının Hisse Senedi Getirileri Üzerindeki Etkileri' kitabının yazarıyım.",
    skills:
    {
        proficientWith: ['Python', 'SQL', 'IBM SPSS', 'Stata', 'Eviews','R'],
        exposedTo: ['PowerBI', 'SAS','MatLAB']
    }
    ,
    hobbies: [
        {
            label: 'ekonomi',
            emoji: '💹'
        },
        {
            label: 'felsefe',
            emoji: '🧐'
        },
        {
            label: 'tarih',
            emoji: '🎥'
        },

        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Bankacılıkta Kredi Riski Analitiği ve Tahmin",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1,
            description: 'Müşteri kredi skorları üzerinden C-level Yönetimi bankanın kredi riskine dair bilgilendirme',
        },
        {
            title: "Bankacılıkta Risk İzleme ve Modelleme",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2,
            description: 'Erken uyarı sisteminin yönetimi ve analitik çalışmaların yürütülmesi',
        },
        {
            title: "Tarımda Müşteri Davranış Modellemesi",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3,
            description: 'CRM stratejilerinin geliştirilmesi, pazarlama analitiği ve müşteri segmentasyonları ile müşteri hayat yolculuğunun tasarımı',
        },
        {
            title: "Sağlıkta IK Analitiği ve ArGe Proje Yönetimi",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4,
            description: 'IK ve sağlıkta dijitalleştirme projelerinin yönetimi ve işgücü analizleriyle optimizasyon çalışmalarının yürütülmesi',
        },
        {
            title: "Sigorta Sektöründe Kayıp/Zarar Analizleri",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5,
            description: 'Termik enerji santralleri, stadyumlar, barajlar ve rüzgar türbinlerinin risk ve hasar analizlerinin yapılması',
        }
    ],
    collabs: ["IBM SPSS ile Akademiz Tez Danışmanlığı", "Süreç Yönetimi ve Optimizasyon Danışmanlığı", "Müşteri Davranış Analizi ve Segmentasyon", "Risk Segmentasyonu ve Tahmin", "Zaman Serisi Analizi Danışmanlığı"],
    courses: ["Makine Öğrenmesi Modellemesi (Kümeleme, Sınıflandırma ve Regresyon)", "Python ile İstatistik101'den Makine Öğrenmesine Modelleme", "SQL ve Python ile İş Analitikleri Kursu", "SPSS/Eviews ile Akademik İstatistik Test Kursu", "SPSS/Eviews/Python ile Zaman Serileri Analizi Kursu "],
}