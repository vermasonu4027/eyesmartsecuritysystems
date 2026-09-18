export interface Business {
  name: string;
  displayName: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  geo: {
    lat: number;
    lng: number;
  };
  hours: {
    weekdays: string;
    emergency: string;
  };
  serviceAreas: string[];
  founded: number;
  socials: {
    facebook: string;
    instagram: string;
    google: string;
  };
}

export interface Service {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  sku: string;
  name: string;
  brand: string;
  shortDescription: string;
  features: string[];
  specifications?: ProductSpecification[];
  image?: string;
}

export interface ProductCategory {
  slug: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  products: Product[];
}

export interface Testimonial {
  name: string;
  location?: string;
  rating: number;
  text: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  excerpt: string;
  coverImage: string;
  author?: string;
  content: string;
  readingTime?: number;
}

export interface BlogFrontmatter {
  title: string;
  date: string;
  updated?: string;
  excerpt: string;
  coverImage: string;
  author?: string;
}
