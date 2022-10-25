import React from 'react';
import type {Node} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import MailScreen from './screens/MailScreen';
import ShopListScreen from './screens/ShopListScreen';
import MyPageScreen from './screens/MyPageScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator initialRouteName='ShopList'>
      <Tab.Screen name="Mail" component={MailScreen} options={{headerShown: false}}/>
      <Tab.Screen name="ShopList" component={ShopListScreen} options={{headerShown: false}}/>
      <Tab.Screen name="MyPage" component={MyPageScreen} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
