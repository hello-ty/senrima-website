import { DiscriptionProps } from "@/types/type";

type ProductsProps = {
  meet: DiscriptionProps[];
  new: DiscriptionProps[];
  salad: DiscriptionProps[];
  tukemono: DiscriptionProps[];
  tinmi: DiscriptionProps[];
  men: DiscriptionProps[];
  soup: DiscriptionProps[];
};

export const products: ProductsProps = {
  meet: [
    {
      description:
        "黒毛和牛の最高級部位であるヒレ肉から少量取れる「芯の」部位です",
      name: "ヒレステーキ　2200円",
      imageSrc: "/Product/hire.jpg",
      imageAlt: "ヒレステーキ",
    },
    {
      description: "豚ののどぶえ、コリコリした食感が特徴です。",
      name: "ナンコツ　600円",
      imageSrc: "/Product/nankotu.jpg",
      imageAlt: "ナンコツ",
    },
    {
      description: "大腸の中でも特にやわらかく希少性の高い上質部位",
      name: "上ホルモン　780円",
      imageSrc: "/Product/tettyan.jpg",
      imageAlt: "上ホルモン",
    },
    {
      description: "ロースの中で最高峰とされるサーロイン",
      name: "特選サーロイン　2500円",
      imageSrc: "/Product/yakisyabu.jpg",
      imageAlt: "特選サーロイン",
    },
    {
      description: "脂質が少なく、あっさりした肉本来の旨味が特徴",
      name: "ロース　990円",
      imageSrc: "/NewMenu/ro-su.jpeg",
      imageAlt: "ロース",
    },
    {
      description: "臀周りの部位、上質で旨味もしっかりと濃く肉質は高い",
      name: "イチボ　1580円",
      imageSrc: "/NewMenu/itibo.jpeg",
      imageAlt: "イチボ",
    },
    {
      description: "塩・味噌・辛味噌選べます",
      name: "ミックスホルモン　980円",
      imageSrc: "/NewMenu/mixhorumon.jpeg",
      imageAlt: "ミックスホルモン",
    },
    {
      description: "歯切れはさっくりと優しく豊かな旨味が口中に広がります",
      name: "塩タン　980円",
      imageSrc: "/NewMenu/tan.jpeg",
      imageAlt: "塩タン",
    },
    {
      description: "牛タンの上質な部位だけを厚切りにしました",
      name: "厚切りタン　1450円",
      imageSrc: "/NewMenu/atugiritan.jpeg",
      imageAlt: "厚切りタン",
    },
  ],
  new: [
    {
      description: `心臓・ビタミン・タンパク質・鉄分・タウリンを多く含みます`,
      name: "ハツ刺し",
      imageSrc: "/NewMenu/hatusasi.jpeg",
      imageAlt: "ハツ刺し",
    },
    {
      description: `第３胃・脂肪が少なく、鉄分・亜鉛が豊富`,
      name: "せんまい",
      imageSrc: "/Product/senmai.jpg",
      imageAlt: "せんまい",
    },
    {
      description: `ビタミン・タンパク質・鉄分・ミネラルを豊富に含みます`,
      name: "特選上レバー(焼き)",
      imageSrc: "/Product/reba.jpg",
      imageAlt: "特選上レバー",
    },
  ],
  salad: [
    {
      description: `赤：コチュジャンベースのピリ辛サラダ\n白：韓国のり・胡椒油を使い、風味豊かに仕上げました`,
      name: "韓国サラダ　650円",
      imageSrc: "/Product/kannkoku.jpg",
      imageAlt: "韓国サラダ",
    },
  ],
  tukemono: [
    {
      description: "白菜",
      name: "白菜キムチ　480円",
      imageSrc: "/Product/kimuti.jpg",
      imageAlt: "白菜キムチ",
    },
    {
      description: "大根",
      name: "カクテキ　480円",
      imageSrc: "/NewMenu/kakuteki.jpg",
      imageAlt: "カクテキ",
    },
    {
      description: "きゅうり",
      name: "オイキムチ　480円",
      imageSrc: "/NewMenu/oikimuti.jpeg",
      imageAlt: "オイキムチ",
    },
    {
      description: "白菜、カクテキ、オイキムチの組み合わせです",
      name: "キムチ盛合せ　680円",
      imageSrc: "/NewMenu/kimutimoriawase.jpeg",
      imageAlt: "キムチ盛合せ",
    },
  ],
  tinmi: [
    {
      description: "もやし・ほうれん草・ぜんまい・大根の和え物",
      name: "ナムル　600円",
      imageSrc: "/Product/namuru.jpg",
      imageAlt: "ナムル",
    },
    {
      description: "大豆もやしを韓国風に仕上げました",
      name: "ピリ辛もやし　500円",
      imageSrc: "/NewMenu/pirikaramoyasi.jpeg",
      imageAlt: "ピリ辛もやし",
    },
  ],
  men: [
    {
      description: "本場韓国の味ピリ辛ソースが決め手です",
      name: "ビビン麺　880円",
      imageSrc: "/NewMenu/bibinnmen.jpeg",
      imageAlt: "ビビン麺",
    },
  ],
  soup: [
    {
      description: "醤油味、牛尾を８時間かけて、じっくり煮込みました",
      name: "テールスープ(赤)　1000円",
      imageSrc: "/NewMenu/teelsupeaka.jpeg",
      imageAlt: "テールスープ(赤)",
    },
    {
      description: "塩味",
      name: "テールスープ(白)　1000円",
      imageSrc: "/NewMenu/teelsupe.jpeg",
      imageAlt: "テールスープ(白)",
    },
  ],
};
