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

export interface Comment {
  id: string;
  post_slug: string;
  user_id: string;
  content: string;
  created_at: string;
  user: {
    name: string;
    avatar_url: string;
  };
  likes: number;
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: any;
  author: {
    name: string;
    image: any;
    bio: string;
  };
  publishedAt: string;
  body: any[];
  excerpt: string;
  tags: string[];
}
