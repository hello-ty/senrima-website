import Image from "next/image";
import Link from "next/link";

export default function Menus() {
  const callouts = [
    {
      name: "単品",
      description: "厳選A5ランク和牛よりご用意してます。",
      imageSrc: "/Menu/tan.jpg",
      imageAlt: "単品メニュー",
      href: "/products",
      alt: "単品メニュー",
    },
    {
      name: "ドリンクメニュー",
      description: "ワインからジュースまで揃ってます。",
      imageSrc: "/Menu/beer.jpg",
      imageAlt: "ドリンク",
      href: "/PDF/drink.pdf",
      alt: "ドリンクメニュー",
    },
    {
      name: "焼肉弁当",
      description: "オーダー毎に丁寧に焼き上げます。",
      imageSrc: "/Menu/meet.jpeg",
      imageAlt: "アイス",
      href: "#",
      alt: "おいしい焼肉弁当",
    },
  ];

  return (
    <div className="bg-white mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">お品書き</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <Image
                    src={callout.imageSrc}
                    layout="fill"
                    objectFit="cover"
                    alt={callout.alt}
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link href={callout.href}>
                    <a>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </Link>
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
