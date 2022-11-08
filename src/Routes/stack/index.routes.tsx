import { createStackNavigator } from "@react-navigation/stack";
import { StackParamsList } from "../../types/Routes";

import Home from "../../Screens/Home";
import Place from "../../Screens/Place";
import Animate from "../../Screens/Animate";

import { useTheme } from "styled-components/native";

const { Navigator, Screen } = createStackNavigator<StackParamsList>();

export default function StackRoutes(){
  const theme = useTheme();

  return(
    <Navigator 
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.COLORS.white
        }
      }}
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Place"
        component={Place}
      />
    </Navigator>
  )
}