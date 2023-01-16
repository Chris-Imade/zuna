import { useFonts } from "expo-font";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import WorkFlow from './navigation/AppAuth';


export default function App() {

  const [fontsLoaded] = useFonts({
    'SF-Pro-Rounded-Bold': require('./assets/fonts/SF-Pro-Rounded-Bold.ttf'),
    'SF-Pro-Rounded-Regular': require('./assets/fonts/SF-Pro-Rounded-Regular.ttf'),
  });


  if(!fontsLoaded) {
    return null;
  }


  return (
    <NavigationContainer>
        <NativeBaseProvider>
          <WorkFlow />
        </NativeBaseProvider>
    </NavigationContainer>
  );
}
