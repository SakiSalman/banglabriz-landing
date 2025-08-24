export interface NavData {
  label: string;
  href?: string;
  subItems?: Subitems[];
}

export interface Subitems {
  label: string;
  href: string;
}
