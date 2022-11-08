import { PlaceProps } from "./src/types/Services";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Place: PlaceProps;
    }
  }
}