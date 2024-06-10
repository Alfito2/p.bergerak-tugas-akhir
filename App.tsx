import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './screen/Homescreen';
import ProfileScreen from './screen/ProfileScreen';
import SecondScreen from './screen/SecondScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



const tabs = createBottomTabNavigator();
const Mainnavigasi = () => {
   return (
      <tabs.Navigator>
         <tabs.Screen name ="Home" component={Homescreen}/>
         <tabs.Screen name ="profile" component={ProfileScreen}/>
         <tabs.Screen name ="scound" component={SecondScreen}/>
      </tabs.Navigator>
   );
};

export default function App() {
   return (
      <NavigationContainer>
         <Mainnavigasi />
      </NavigationContainer>
   );
}
