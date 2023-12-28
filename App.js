import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
import Splash from './src/Splash';
import SignUp from './src/SignUp';
import Notes from './src/Notes';
import Note from './src/Note';
import Edit from './src/Edit';
import NewNote from './src/NewNote';
const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegistration = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp">
          {(props) => <SignUp {...props} isLoggedIn={isLoggedIn} handleRegistration={handleRegistration} />}
        </Stack.Screen>
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <Login {...props} isLoggedIn={isLoggedIn} />}
        </Stack.Screen>
        <Stack.Screen name='Notes' component={Notes} />
        <Stack.Screen name='Note' component={Note} />
        <Stack.Screen name='Edit' component={Edit} />
        <Stack.Screen name='NewNote' component={NewNote} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
