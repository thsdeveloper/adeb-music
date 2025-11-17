// Types for ADEB Music Landing Page

export interface Artist {
  name: string;
  genre: string;
  image: string;
  youtube: string;
  spotify: string;
  instagram: string;
  description?: string;
}

export interface Release {
  title: string;
  date: string;
  thumbnail: string;
  videoUrl: string;
  description?: string;
  views?: number;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
}

export interface BehindTheScenesImage {
  id: number;
  icon: string;
  label: string;
  imageUrl?: string;
}

export interface Statistic {
  value: number;
  suffix: string;
  label: string;
  icon?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  ministry: string;
  projectType: string;
  message: string;
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
  color?: string;
}

export interface NavLink {
  name: string;
  href: string;
}
