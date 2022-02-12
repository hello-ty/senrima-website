import Image from "next/image";

const products = [
  {
    description: "",
    name: "厚切りタン",
    imageSrc: "/Product/hire.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    description: "Machined Mechanical Pencil",
    name: "塩ミノ",
    imageSrc: "/Product/nankotu.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    description: "Machined Mechanical Pencil",
    name: "特選ハラミ",
    imageSrc: "/Product/tettyan.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    description: "Machined Mechanical Pencil",
    name: "上カルビ",
    imageSrc: "/Product/yakisyabu.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    description: "Nomad Tumbler",
    name: "ロース",
    imageSrc: "/NewMenu/ro-su.jpeg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    description: "Nomad Tumbler",
    name: "上カルビ",
    imageSrc: "/NewMenu/zyoukarubi.jpeg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
];

const productsSalad = [
  {
    description: "Focus Paper Refill",
    name: "韓国サラダ",
    imageSrc: "/Product/kannkoku.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    description: "Machined Mechanical Pencil",
    name: "白菜キムチ",
    imageSrc: "/Product/kimuti.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    description: "Machined Mechanical Pencil",
    name: "ナムル",
    imageSrc: "/Product/namuru.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    description: "Machined Mechanical Pencil",
    name: "特選上レバー",
    imageSrc: "/Product/reba.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    description: "Machined Mechanical Pencil",
    name: "せんまい",
    imageSrc: "/Product/senmai.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

export const ProductLists = () => {
  return (
    <div className="bg-white font-fancy lg:px-24 md:px-10 sm:px-1">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-3xl mb-10">肉（塩・タレ）</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <p key={product.name} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <figure className="relative w-full h-52 object-center object-cover group-hover:opacity-75">
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
      </div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-3xl mb-10">サラダ</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productsSalad.map((product) => (
            <p key={product.name} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <figure className="relative w-full h-52 object-center object-cover group-hover:opacity-75">
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
      </div>
    </div>
  );
};
