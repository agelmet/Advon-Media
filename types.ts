export interface PortfolioItem {
  image: string;
  url: string;
  name: string;
  nameEn?: string;
}

export interface Review {
  image: string;
  name: string;
  rating: number;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export enum ServiceType {
  WEBSITE = 'WEBSITE',
  NFC = 'NFC',
  SOCIAL = 'SOCIAL',
}

export interface ServiceData {
  id: ServiceType;
  icon: any;
  price: string;
  priceNote?: string;
  title: string;
  shortDesc: string;
  features: string[];
  ctaText: string;
  modalContent: {
    title: string;
    body: string[]; // Array of paragraphs
  };
}