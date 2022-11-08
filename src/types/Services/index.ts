export interface PlaceProps {
  title?: string;
  description?: string;
  locale?: string;
  additional_info?: {
    picture?: string;
    star?: number;
    liked?: boolean;
    price?: string;
  };
  key?: 'left' | 'right'
}