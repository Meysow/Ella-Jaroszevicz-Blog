//TODO : faire le tri de ceux qu'on utilise pas.
export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface NavItemFooter {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export interface BlogPostParamsProps {
  params: {
    slug: string[];
  };
}

export interface FrequentlyAskedQuestion {
  question: string;
  answer: string;
}
