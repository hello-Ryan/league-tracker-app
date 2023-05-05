import { ReactNode } from "react";

export interface PageContentProps {
  children: ReactNode;
}

const PageContent = (props: PageContentProps) => {
  return <div className="pt-2">{props.children}</div>;
};

export default PageContent;
