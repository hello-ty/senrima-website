import clsx from "clsx";
import Link from "next/link";
import { VFC } from "react";
import { Card } from "../../components/Card";

export const Cource: VFC = () => {
  const cardLists = [
    {
      title: "桜コース",
      src: "/Cource/sakura01.jpg",
      content:
        "塩タン / 塩ホルモン / 塩ナンコツ / カルビ / サガリ / 焼野菜 / キムチ / クッパ / デザート / 1500円で飲み放題も追加できます",
      tab1: "3500円",
      tab2: "2名様より承ります",
      alt: "桜コース",
    },
    {
      title: "椿コース",
      src: "/Cource/tubaki01.jpg",
      content:
        "塩タン / 塩ミノ / 三河地鶏 / 上カルビ / ハラミ / ロース / チシャ葉 / キムチ / クッパ / デザート / 1500円で飲み放題も追加できます",
      tab1: "5500円",
      tab2: "2名様より承ります",
      alt: "椿コース",
    },
    {
      href: "/PDF/freedrink.pdf",
      title: "90分飲み放題メニュー",
      src: "/beer.jpg",
      content: "",
      tab1: "1500円",
      tab2: "コース注文時のみ",
      alt: "90分飲み放題メニュー",
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
            "grid grid-rows-1 md:grid-cols-3 md:gap-4 justify-center"
          )}
        >
          {cardLists.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              src={item.src}
              content={item.content}
              tab1={item.tab1}
              tab2={item.tab2}
              alt={item.alt}
              href={item.href}
            />
          ))}
        </div>
        <p className={clsx("mt-5")}>
          ※ご予算・ご希望に応じてコース料理を承ります。
        </p>
      </section>
    </>
  );
};
