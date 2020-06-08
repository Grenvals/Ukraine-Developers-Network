import { NavLink } from 'react-router-dom';
import { NewsItem } from './NewsItem/NewsItem';
import PerfectScrollbar from 'react-perfect-scrollbar';
import React from 'react';
import newsLogo from '../../../assets/images/news/google-news.jpg';
import style from './NewsPanel.module.scss';

export const NewsPanel = props => {
  const articles = [
    {
      source: {
        id: null,
        name: 'Itechua.com',
      },
      author: 'https://www.facebook.com/sofiia.skarb',
      title:
        'Інсайдер розкрив назви всіх майбутніх iPhone 12 - iTechua - новини, гаджети, технології',
      description:
        'Інсайдер розкрив назви всіх майбутніх iPhone 12.Останні новини Смартфони на сайті - iTechua. Свіжа стрічка новин сьогодні.',
      url: 'https://itechua.com/smartphones/102768',
      urlToImage: 'https://itechua.com/wp-content/uploads/2020/06/Screenshot_3-7.jpg',
      publishedAt: '2020-06-07T21:23:48Z',
      content:
        'FudgeiPhone 12. , Apple : iPhone 12, iPhone 12 Max, iPhone 12 ProiPhone 12 Pro Max.\r\n, iPhone 12 iPhone13,1, iPhone 12 Max – iPhone 13,2, iPhone 12 Pro – iPhone13,3, iPhone 12 Pro Max – iPhone 13,4. … [+161 chars]',
    },
    {
      source: {
        id: null,
        name: 'Itechua.com',
      },
      author: 'https://www.facebook.com/pasha.skarbyk',
      title:
        'Названо найтонші смартфони 2020 року - iTechua - новини, гаджети, технології',
      description:
        'Названо найтонші смартфони 2020 року.Останні новини Смартфони на сайті - iTechua. Свіжа стрічка новин сьогодні.',
      url: 'https://itechua.com/smartphones/102822',
      urlToImage: 'https://itechua.com/wp-content/uploads/2020/06/Screenshot_1-9.jpg',
      publishedAt: '2020-06-07T20:41:31Z',
      content:
        ', . .\r\nHuawei Mate X 5,4 . OLED- 2480 x 2200 , . 6,6 11 . 4500 SuperWharge 55W. Mate X , .\r\nHuawei Mate X\r\nSamsung Galaxy Fold 6,93 . 7,3- , , . «», . – 12 «», – .\r\nSamsung Galaxy Fold\r\n-3 Motorola R… [+248 chars]',
    },
    {
      source: {
        id: null,
        name: 'Itsider.com.ua',
      },
      author: 'Helena Sh.',
      title: 'iPhone 12 Pro Max: огляд, характеристики, дата виходу, вартість - ITsider.',
      description:
        '«Ніхто не купуватиме великих телефонів», - казав легендарний Стів Джобс, називаючи 3,5-дюймові смартфони ідеальними. Джобс безумовно був би здивований, дізнавшись, що Apple розробляє «його» - гігантський 6,7-дюймовий iPhone 12 Pro Max. Яким буде нови',
      url:
        'https://itsider.com.ua/iphone-12-pro-max-oglyad-harakterystyky-data-vyhodu-vartist/',
      urlToImage:
        'https://itsider.com.ua/wp-content/uploads/2020/05/iPhone-12-Pro-Max-obzor-kharakteristiki-data-vykhoda-cena-v-Rossii-5.jpg',
      publishedAt: '2020-06-07T18:35:00Z',
      content:
        '«», – , 3,5- . , , Apple «» – 6,7- iPhone 12 Pro Max. Apple? .\r\niPhone 12 Pro Max iPhone 12 . Apple 2017 , iPhone X «».\r\niPhone 12 Pro Max . , iPad Pro . iPhone 12 Pro Max iPhone 4 iPhone 5, - . , iP… [+1583 chars]',
    },
    {
      source: {
        id: null,
        name: 'Online.ua',
      },
      author: 'ONLINE.UA',
      title:
        'Microsoft звернулася до усіх користувачів з важливим попередженням - ONLINE.UA',
      description:
        'Технологічний гігант Microsoft регулярно дивує світ корисними новинками, однак в історії компанії',
      url:
        'https://novyny.online.ua/821204/microsoft-zvernulasya-do-usih-koristuvachiv-z-vazhlivim-poperedzhennyam/',
      urlToImage:
        'https://proxy12.online.ua/news/r2-e730fb2ccc/soc_1591544001680_5ed51b86c2092.jpg',
      publishedAt: '2020-06-07T16:18:06Z',
      content:
        'Microsoft ,   ,    . ,   Windows 10 Microsoft     ,   . , ,     ,       ,  ONLINE.UA    Slashgear. \r\n"Microsoft        ,      30 .    ’  Bluetooth       NVIDIA", — . \r\nONLINE.UA, Microsoft   Microsof… [+14 chars]',
    },
    {
      source: {
        id: null,
        name: 'Itechua.com',
      },
      author: 'https://www.facebook.com/pasha.skarbyk',
      title:
        'Microsoft може стати першою в світі компанією вартістю $ 2 трлн - iTechua - новини, гаджети, технології',
      description:
        'Microsoft може стати першою в світі компанією вартістю $ 2 трлн.Останні новини Програми на сайті - iTechua. Свіжа стрічка новин сьогодні.',
      url: 'https://itechua.com/programs/102758',
      urlToImage: 'https://itechua.com/wp-content/uploads/2020/06/microsoft_6.jpg',
      publishedAt: '2020-06-07T15:50:00Z',
      content:
        '$ 1.39 .  , Microsoft 55%.\r\n Azure.  : « » .\r\n  Microsoft 14%, Azure, 2023 $ 2 , $ 2.2 .',
    },
    {
      source: {
        id: null,
        name: 'Prm.ua',
      },
      author: null,
      title:
        "З Росії в бік Луганська в'їхало дві колони військових вантажівок - ОБСЄ - Прямий",
      description:
        'Безпілотник ОБСЄ в період між 20:40 4 червня і 00:24 5 червня зафіксував автоколону вантажівок біля селища Черемшине за 59 км від окупованого Луганська,',
      url:
        'https://prm.ua/z-rosiyi-v-bik-luganska-v-yihalo-dvi-koloni-viyskovih-vantazhivok-obsye/',
      urlToImage: 'https://prm.ua/wp-content/uploads/2018/06/dron.jpg',
      publishedAt: '2020-06-07T10:55:00Z',
      content:
        '20:40 4 00:24 5 59 , .\r\n .\r\n 12 . 16 , 5 .\r\n \' , .\r\n, 6 13 . \' , - .\r\n  ""  Facebook, Twitter, Telegram  Instagram.',
    },
    {
      source: {
        id: null,
        name: 'Tehnofan.com.ua',
      },
      author: 'Головний редактор',
      title:
        'Компанія Motorola анонсувала нові бюджетні Moto G Fast і Moto E до 5000 гривень - Технофан',
      description:
        'Компанія Motorola анонсувала дві нові моделі – Moto G Fast і Moto E. Вони позиціонуються, як доступні рішення компанії для міжнародного ринку. Moto G Fast Старша модель, повинна запропонувати хорошу продуктивність за невисокою ціною, про що говорить і назва м…',
      url:
        'https://tehnofan.com.ua/2020/06/06/moto-g-fast-and-moto-e-become-the-most-affordable-smartphones-of-the-company/',
      urlToImage: 'https://tehnofan.com.ua/wp-content/uploads/2020/06/Screenshot_564.jpg',
      publishedAt: '2020-06-07T10:39:15Z',
      content:
        'Motorola – Moto G Fast Moto E. , .\r\nMoto G Fast, , . Snapdragon 665, 3 ’ 32 ’ . 6.4 HD +, 19: 9.\r\n , 16 , , 8 2 . 4000 – , . 10 .\r\nMoto G Fast – “G”, 199 , 12 , .\r\nMoto EMoto E – , , , . HD + 6.2 , 1… [+90 chars]',
    },
    {
      source: {
        id: null,
        name: '24tv.ua',
      },
      author: 'Михайло Года',
      title:
        'Дослідники розробили систему дронів доставки, які користуються громадським транспортом - 24 Канал',
      description:
        'Вчені зі Стенфордського університету розробили спосіб використання громадського транспорту при доставці посилок дронами. Це рішення допоможе збільшити швидкість доставки і можливу відстань, а також знизити економічні витрати.',
      url:
        'https://24tv.ua/techno/stenfordski-vcheni-stvorili-sistemu-droniv-novini-tehnologiy_n1355992',
      urlToImage:
        'https://24tv.ua/resources/photos/news/202006/1355992.jpg?1591528136000',
      publishedAt: '2020-06-07T10:03:10Z',
      content: '. , .',
    },
    {
      source: {
        id: null,
        name: 'Itechua.com',
      },
      author: 'https://www.facebook.com/pasha.skarbyk',
      title:
        'Нові «розумні» годинники від компанії Samsung отримали ім’я Galaxy Watch 3 - iTechua - новини, гаджети, технології',
      description:
        "Нові «розумні» годинники від компанії Samsung отримали ім'я Galaxy Watch 3.Останні новини Ґаджети на сайті - iTechua. Свіжа стрічка новин сьогодні.",
      url: 'https://itechua.com/gadgets/102744',
      urlToImage:
        'https://itechua.com/wp-content/uploads/2020/06/1591506843_800px-samsung_galaxy_watch.jpg',
      publishedAt: '2020-06-07T09:31:43Z',
      content:
        'NBTC «» Samsung, SM-R855F. , Galaxy Watch 3, .\r\n , «» Samsung ’ Galaxy Watch 2, , Galaxy Watch 3. - . 41 45 , ’ 4G / LTE Wi-Fi.\r\n MIL-STD 810G, , . -’ Galaxy Watch 3 8 , 5 . , , ’ . .',
    },
    {
      source: {
        id: null,
        name: 'Tehnofan.com.ua',
      },
      author: 'Головний редактор',
      title:
        'Vodafone перезапустив пакет Vodafone TV «Оптимальний» без підвищення абонплати - Технофан',
      description:
        'Оператор мобільного зв’язку Vodafone Україна перезапустив пакет «Оптимальний» в рамках послуги Vodafone TV. Тепер в ньому представлений каталог Amediateka c серіалами і фільмами від HBO, СBS, Showtime, Starz, Sony. Також в пакеті «Оптимальний» є понад 190 тел…',
      url:
        'https://tehnofan.com.ua/2020/06/06/vodafone-restarted-the-vodafone-tv-optimal-package-adding/',
      urlToImage:
        'https://tehnofan.com.ua/wp-content/uploads/2020/06/Screenshot_563-737x600.jpg',
      publishedAt: '2020-06-07T08:25:46Z',
      content:
        '’ Vodafone «» Vodafone TV. Amediateka c HBO, BS, Showtime, Starz, Sony. «» 190 , FOX, Viasat Setanta.\r\n – 109 30 . Amediateka, « », « », «», «», « », « ».\r\n «» SMS «1» 30044. Vodafone TV 5 . - .\r\nVod… [+168 chars]',
    },
  ];
  const newsItem = articles.map(u => (
    <NewsItem
      key={u.source.id}
      photoUrl={u.urlToImage}
      title={u.title}
      publishedAt={u.publishedAt}
      link={u.url}
    />
  ));
  return (
    <div className={style.newsPanel}>
      <h2 className={style.newsPanel__title}>Last developers news</h2>
      <div className={style.newsPanel__container}>
        <PerfectScrollbar className={style.newsPanel__scrollbar} component="div">
          <ul className={style.newsPanel__list}>{newsItem}</ul>
        </PerfectScrollbar>
      </div>
      <NavLink className={style.newsPanel__button} to={'/news/'} exact>
        <img className={style.newsPanel__logo} src={newsLogo} alt="" />
        <div className={style.newsPanel__dots}></div>
      </NavLink>
    </div>
  );
};
