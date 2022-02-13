import clsx from "clsx";
import Link from "next/link";
import { Card } from "src/components/Card";

export function Cource() {
  const cardLists = [
    {
      href: "",
      title: "桜コース",
      src: "/Cource/sakura01.jpg",
      content: `塩タン
      塩ホルモン
      塩軟骨
      カルビ
      サガリ
      焼野菜
      キムチ
      クッパ
      デザート`,
      tab1: "3500円",
      tab2: "税込(3850円)",
      alt: "桜コース",
    },
    {
      href: "",
      title: "椿コース",
      src: "/Cource/tubaki01.jpg",
      content: `塩タン
      塩ホルモン
      塩軟骨
      カルビ
      サガリ
      焼野菜
      キムチ
      クッパ
      デザート`,
      tab1: "5000円",
      tab2: "税込(5500円)",
      alt: "椿コース",
    },
    {
      href: "/PDF/freedrink.pdf",
      title: "飲み放題",
      src: "/Menu/beer.jpg",
      content: "タン / 焼野菜 / 特選ハラミ / キムチ",
      tab1: "1500円",
      tab2: "コース注文時のみ",
      alt: "飲み放題",
    },
  ];

  return (
    <>
      <section
        className={clsx(
          "block my-0 lg:px-8 sm:px-6 px-4 mb-16 w-full text-center"
        )}
      >
        <h1 className={clsx("text-3xl bold mb-6 text-start")}>
          厳選和牛コースメニュー
        </h1>
        <div
          className={clsx(
            "flex items-center sm:justify-center flex-col lg:flex-row lg:gap-x-6"
          )}
        >
          {cardLists.map((item) => (
            <Link key={item.title} href={item.href}>
              <a className={clsx("hover:opacity-75")}>
                <Card
                  title={item.title}
                  src={item.src}
                  content={item.content}
                  tab1={item.tab1}
                  tab2={item.tab2}
                  alt={item.alt}
                />
              </a>
            </Link>
          ))}
        </div>
        <p className={clsx("mt-5")}>
          ※ご予算・ご希望に応じてコース料理を承ります。
        </p>
      </section>
    </>
  );
}
