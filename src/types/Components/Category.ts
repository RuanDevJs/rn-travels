import { TouchableOpacityProps } from "react-native";

export type CategoryDataProps =  {
  title: string;
  source: string;
  active: boolean;
};

export interface CategoryComponentProps extends TouchableOpacityProps {
  data: {
    title: string;
    source: string;
    active: boolean;
  }
}

export interface CategoryStyleProps extends TouchableOpacityProps {
  active?: boolean;
}