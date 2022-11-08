import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack/index.routes";

export default function Routes(){
  return(
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}