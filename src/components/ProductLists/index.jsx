import Image from "next/image";
import { MenuTable } from "src/components/MenuTable";
import { products } from "/src/mock/product.js";

export const ProductLists = () => {
  return (
    <div className="bg-white font-fancy lg:px-24 md:px-10 sm:px-1">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-3xl mb-10">肉（塩・タレ）</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.meet.map((product) => (
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

      <MenuTable title="meet" />

      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-3xl mb-10">サラダ</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.salad.map((product) => (
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
        <h2 className="text-center text-3xl mb-10">漬物</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.tukemono.map((product) => (
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
        <h2 className="text-center text-3xl mb-10">吟味</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.tinmi.map((product) => (
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
      <MenuTable title="tinmi" />

      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-3xl mb-10">スープ</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.soup.map((product) => (
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

      <MenuTable title="soup" />
    </div>
  );
};
