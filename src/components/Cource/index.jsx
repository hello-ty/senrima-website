import clsx from "clsx";
import { Card } from "src/components/Card";

export function Cource() {
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
          <Card
            title="桜コース"
            src="/Cource/sakura01.jpg"
            content="タン / 焼野菜 / 特選ハラミ / キムチ"
            tab1="3500円"
            tab2="税込(3850円)"
            alt="桜コース"
          />
          <Card
            title="椿コース"
            src="/Cource/tubaki01.jpg"
            content="タン / 焼野菜 / 特選ハラミ / キムチ"
            tab1="5000円"
            tab2="税込(5500円)"
            alt="椿コース"
          />
          <Card
            title="飲み放題"
            src="/Menu/beer.jpg"
            content="タン / 焼野菜 / 特選ハラミ / キムチ"
            tab1="1500円"
            tab2="コース注文時のみ"
            alt="飲み放題"
          />
        </div>
      </section>
    </>
  );
}
