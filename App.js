import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import Home from './src/pages/Home';
import Search from './src/pages/Search';
import Player from './src/pages/Player';
import Subscriptions from './src/pages/Subscriptions';
import Explore from './src/pages/Explore';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer } from './src/reducers/reducer';
import { themeReducer } from './src/reducers/themeReducer';

// const rootReducer = combineReducers({
//   cardData: reducer,
//   newDarkMode: themeReducer
// })

const store = createStore(reducer)
const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

const customDarkTheme={
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    secondaryColor: '#212121',
    headerColor: '#101012',
    iconColor: '#ccc',
    fontColor: '#fff',
    borderColor: '#444',
    tabIcon: 'white'
  }
}
const customDefaultTheme={
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryColor: '#efefef',
    headerColor: '#efefef',
    iconColor: '#444',
    fontColor: '#111',
    tabIcon: 'red'
  }
}
const RootHome = () => {
  const {colors} = useTheme()
  return (
    <>
    <StatusBar style="dark" backgroundColor="#101012" />
    <Tabs.Navigator
      style={{ backgroundColor: '#fff' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === 'explore') {
            iconName = 'compass-outline'
          } else if (route.name === 'home') {
            iconName = 'home'
          }
          else if (route.name === 'subscriptions') {
            iconName = 'youtube-subscription'
          }
          else if (route.name === 'library') {
            iconName = 'play-box-multiple-outline'
          }
          return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: colors.tabIcon,
        tabBarInactiveTintColor: '#aaa',
      })}
    >
      <Tabs.Screen name='home' component={Home} options={{ headerShown: false }} />
      <Tabs.Screen name='explore' component={Explore} options={{ headerShown: false }} />
      <Tabs.Screen name='subscriptions' component={Subscriptions} options={{ headerShown: false }} />
      <Tabs.Screen name='library' component={Subscriptions} options={{ headerShown: false }} />
    </Tabs.Navigator>
    </>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={customDarkTheme}>
        <Stack.Navigator>
          <Stack.Screen name='rootHome' component={RootHome} options={{ headerShown: false }} />
          <Stack.Screen name='search' component={Search} options={{ headerShown: false }} />
          <Stack.Screen name='player' component={Player} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
