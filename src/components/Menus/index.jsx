import Image from "next/image";

export default function Menus() {
  const callouts = [
    {
      name: "単品メニュー",
      description: "おいしいメニューがたくさん",
      imageSrc: "/Menu/tan.jpg",
      imageAlt: "単品メニュー",
      href: "#",
    },
    {
      name: "ドリンク・飲み放題メニュー",
      description: "ワインからジュースまで揃ってます。",
      imageSrc: "/Menu/beer.jpg",
      imageAlt: "ドリンク",
      href: "#",
    },
    {
      name: "サブメニュー",
      description: "おいしいアイスがたくさん",
      imageSrc: "/Menu/ice.jpg",
      imageAlt: "アイス",
      href: "#",
    },
  ];

  return (
    <div className="bg-gray-100 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">
            メニューリスト
          </h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <Image
                    src={callout.imageSrc}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
