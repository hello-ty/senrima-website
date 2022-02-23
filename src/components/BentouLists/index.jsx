import Image from "next/image";
import { MenuTable } from "src/components/MenuTable";
// import { products } from "/src/mock/product.js";

export const BentouLists = () => {
  const bentou = [
    {
      description: "和牛カルビならではの肉の甘さと香ばしさ。",
      name: "和牛カルビ弁当　1000円",
      imageSrc: "/NewMenu/karubibentou.jpeg",
      imageAlt: "カルビ弁当",
    },
    {
      description: "ヘルシーな和牛の赤身です。",
      name: "和牛ロース弁当　1000円",
      imageSrc: "/NewMenu/ro-subentou.jpeg",
      imageAlt: "ロース弁当",
    },
    {
      description: "タンの特に上質な部分だけを使用しています",
      name: "タン弁当　1000円",
      imageSrc: "/NewMenu/tanbentou.jpeg",
      imageAlt: "タン弁当",
    },
  ];

  return (
    <div className="bg-white font-fancy lg:px-24 md:px-10 sm:px-1">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-center text-6xl mb-16">焼肉弁当</h1>
        <h2 className="text-center text-3xl mb-10">塩・タレ</h2>

        <div className="text-center grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {bentou.map((product) => (
            <p key={product.name} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <figure className="relative w-full h-96 object-center object-cover group-hover:opacity-75">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    layout="fill"
                    objectFit="cover"
                  />
                </figure>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                {product.description}
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.name}
              </p>
            </p>
          ))}
        </div>
        <h3 className="text-center text-2xl mb-10 mt-10">
          ビビンバ弁当　700円　コシヒカリの上にナムルを載せてます。
        </h3>
        <p className="text-center text-1xl mb-10 mt-10">
          ※肉増量＋500円/ご飯大盛り＋100円
        </p>
      </div>
    </div>
  );
};
