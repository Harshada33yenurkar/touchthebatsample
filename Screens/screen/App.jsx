import React from 'react';
import NavigationContainer from '@react-navigation/native';
import createStackNavigator  from '@react-navigation/stack';
import Image from 'react-native'; 

import LoginScreen from '../Screens/screen/page2.jsx';
import RegisterScreen from '../Screens/screen/page3.jsx';
import Page4Screen from '../Screens/page4.jsx';
import Page5Screen from '../Screens/page5.jsx';
import Page7RulesScreen from '../Screens/page7rules.jsx';
import Page8Screen from '../Screens/page8.jsx';
import Page9Screen from '../Screens/page9.jsx';
import Page10Screen from '../Screens/page10.jsx';
import SettingScreen from '../Screens/setting.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTitle: () => (
              <Image
                source={require('../assets/b8c104d2d7c7636d0691ad3499011c410ebd7c61.png')} 
                style={{ width: 150, height: 30, resizeMode: 'contain' }}/>
            ),
          }}
        />
        <Stack.Screen name="Signup" component={RegisterScreen} />
        <Stack.Screen name="Page4" component={Page4Screen} />
        <Stack.Screen name="Page5" component={Page5Screen} />
        <Stack.Screen name="Page7Rules" component={Page7RulesScreen} />
        <Stack.Screen name="Page8" component={Page8Screen} />
        <Stack.Screen name="Page9" component={Page9Screen} />
        <Stack.Screen name="Page10" component={Page10Screen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}