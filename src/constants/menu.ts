type MenuListProps = {
  name: string;
  description: string;
  imageSrc: string;
  href: string;
  alt: string;
};

export const menulists: MenuListProps[] = [
  {
    name: "単品",
    description: "厳選A5ランク和牛よりご用意してます。",
    imageSrc: "/Menu/tan.jpg",
    href: "/products",
    alt: "単品メニュー",
  },
  {
    name: "ドリンクメニュー",
    description: "ワインからジュースまで揃ってます。",
    imageSrc: "/Menu/beer.jpg",
    href: "/PDF/twodrink2.pdf",
    alt: "ドリンクメニュー",
  },
  {
    name: "焼肉弁当",
    description: "オーダー毎に丁寧に焼き上げます。",
    imageSrc: "/Menu/toptanbentou.jpeg",
    href: "/Menu/bentou",
    alt: "焼肉弁当",
  },
];
