import Image from "next/image";

const products = [
  {
    id: 1,
    name: "",
    price: "厚切りタン",
    imageSrc: "/Product/hire.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Machined Mechanical Pencil",
    price: "塩ミノ",
    imageSrc: "/Product/nankotu.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 3,
    name: "Machined Mechanical Pencil",
    price: "特選ハラミ",
    imageSrc: "/Product/tettyan.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    price: "上カルビ",
    imageSrc: "/Product/yakisyabu.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Nomad Tumbler",
    price: "イチボ",
    imageSrc: "/Product/kakuteki.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 6,
    name: "Focus Paper Refill",
    price: "韓国サラダ",
    imageSrc: "/Product/kannkoku.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 7,
    name: "Machined Mechanical Pencil",
    price: "白菜キムチ",
    imageSrc: "/Product/kimuti.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 8,
    name: "Machined Mechanical Pencil",
    price: "ナムル",
    imageSrc: "/Product/namuru.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 9,
    name: "Machined Mechanical Pencil",
    price: "特選上レバー",
    imageSrc: "/Product/reba.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 10,
    name: "Machined Mechanical Pencil",
    price: "せんまい",
    imageSrc: "/Product/senmai.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

export const ProductLists = () => {
  return (
    <div className="bg-white font-fancy lg:px-24 md:px-10 sm:px-1">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-3xl mb-10">肉一覧</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <p key={product.id} className="group">
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
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
