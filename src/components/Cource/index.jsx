import clsx from "clsx";
import { Card } from "src/components/Card";

export function Cource() {
  return (
    <>
      <section className={clsx("block my-0 mb-10 text-center w-full")}>
        <h1 className={clsx("text-3xl bold mb-6")}>厳選和牛コースメニュー</h1>
        <div
          className={clsx(
            "flex items-center sm:justify-center flex-col lg:flex-row lg:gap-16"
          )}
        >
          <Card
            title="桜コース"
            src="/Cource/sakura01.jpg"
            content="タン / 焼野菜 / 特選ハラミ / キムチ"
            tab1="3500円"
            tab2="税込(3850円)"
          />
          <Card
            title="椿コース"
            src="/Cource/tubaki01.jpg"
            content="タン / 焼野菜 / 特選ハラミ / キムチ"
            tab1="5000円"
            tab2="税込(5500円)"
          />
        </div>
      </section>
    </>
  );
}
