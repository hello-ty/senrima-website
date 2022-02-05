import clsx from "clsx";
import { Cource } from "src/components/Cource";
import Menus from "src/components/Menus";
import Access from "src/components/Access";

export function Main() {
  return (
    <>
      <main
        className={clsx("border  py-24 lg:px-24 md:px-20 sm:px-1 w-screen")}
      >
        <Cource />
        <Menus />
        <Access />
      </main>
    </>
  );
}
