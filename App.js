import { View } from 'react-native';
import { useFonts } from "expo-font";
import { NativeBaseProvider } from "native-base";
import { 
  AuthTab,
  Delivery,
  FoodDetails,
  History,
  Orders,
  Payment,
  Welcome
} from './screens';


export default function App() {

  const [fontsLoaded] = useFonts({
    'SF-Pro-Rounded-Bold': require('./assets/fonts/SF-Pro-Rounded-Bold.ttf'),
    'SF-Pro-Rounded-Regular': require('./assets/fonts/SF-Pro-Rounded-Regular.ttf'),
  });


  if(!fontsLoaded) {
    return null;
  }


  return (
      // <Welcome />    
        // <History />
        <NativeBaseProvider>
          <AuthTab />
          {/* <FoodDetails /> */}
          {/* <History /> */}
          {/* <Orders /> */}
          {/* <Payment /> */}
          {/* <Welcome /> */}
        </NativeBaseProvider>
  );
}
