import { StyleSheet, Text, View } from 'react-native';
import { 
  useFonts, 
  Jost_400Regular,
  Jost_500Medium,
  Jost_700Bold, 
} from "@expo-google-fonts/jost"

import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles';

import Home from './src/Screens/Home';
import Routes from './src/Routes/index.routes';
import Loading from './src/Components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Routes /> : <Loading /> }
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
