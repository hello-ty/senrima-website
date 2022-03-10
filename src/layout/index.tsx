import { Footer } from "./Footer";
import { VFC } from "react";
import { Header } from "./Header";

type LayoutProps = {
  children: JSX.Element;
};

export const Layout: VFC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
