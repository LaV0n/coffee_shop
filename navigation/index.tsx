import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';
import { MainScreen } from '../screens/MainScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import {Favorites} from "../screens/Favorites";
import {Cart} from "../screens/Cart";
import {Notice} from "../screens/Notice";
import { Profile } from '../screens/Profile';
import {HomeSVG} from "../components/svgIcons/HomeSVG";
import {HomeSVG_} from "../components/svgIcons/HomeSVG_";
import {FavoriteSVG} from "../components/svgIcons/FavoriteSVG";
import { FavoriteSVG_ } from '../components/svgIcons/FavoriteSVG_';
import {CartSVG} from "../components/svgIcons/CartSVG";
import {CartSVG_} from "../components/svgIcons/CartSVG_";
import {NoticeSVG} from "../components/svgIcons/NoticeSVG";
import {NoticeSVG_} from "../components/svgIcons/NoticeSVG_";
import {ProfileSVG} from "../components/svgIcons/ProfileSVG";
import {ProfileSVG_} from "../components/svgIcons/ProfileSVG_";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false ,fullScreenGestureEnabled:true}}  />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {


  return (
          <BottomTab.Navigator
              initialRouteName='MainScreen'
              screenOptions={{
                  tabBarStyle:{height:80},
              }}
          >
              <BottomTab.Screen
                  name="MainScreen"
                  component={MainScreen}
                  options={{
                      headerShown: false,
                      title:'',
                      tabBarIcon: ({focused}) => focused ? <HomeSVG /> : <HomeSVG_/>
                  }}
              />
              <BottomTab.Screen
                  name="Favorites"
                  component={Favorites}
                  options={{
                      headerShown: false,
                      title:'',
                      tabBarIcon: ( {focused} ) =>  focused ?<FavoriteSVG/> :<FavoriteSVG_/>,
                  }}
              />
              <BottomTab.Screen
                  name="Cart"
                  component={Cart}
                  options={{
                      headerShown: false,
                      title:'',
                      tabBarIcon:( {focused} ) =>  focused ?<CartSVG/> :<CartSVG_/>,
                  }}
              />
              <BottomTab.Screen
                  name="Notice"
                  component={Notice}
                  options={{
                      headerShown: false,
                      title:'',
                      tabBarIcon: ( {focused} ) =>  focused ?<NoticeSVG/> :<NoticeSVG_/>,
                  }}
              />
              <BottomTab.Screen
                  name="Profile"
                  component={Profile}
                  options={{
                      headerShown: false,
                      title:'',
                      tabBarIcon: ( {focused} ) =>  focused ?<ProfileSVG/> :<ProfileSVG_/>,
                  }}
              />
          </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

