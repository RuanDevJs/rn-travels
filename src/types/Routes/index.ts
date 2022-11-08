import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { PlaceProps } from "../Services";

export type StackParamsList = {
  Home: undefined;
  Place: PlaceProps;
}

export type NavigationProps = StackNavigationProp<StackParamsList>

export type PlaceScreenRouteProp = RouteProp<StackParamsList, 'Place'>;
