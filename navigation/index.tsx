import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, StyleSheet} from 'react-native';
import { MainScreen } from '../screens/MainScreen';
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
import {useAppSelector} from "../bll/store";

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
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {

    const items=useAppSelector(state => state.coffee.data)


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
                      tabBarLabelStyle:items.length!==0?styles.tabBarLabel: null,
                      title: items.length!==0?items.reduce((acc,c)=>acc+c.count,0).toString():'',
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


const styles = StyleSheet.create({
    tabBarLabel: {
       fontSize:18,
        position:"absolute",
        bottom:10,
        backgroundColor:'rgba(150,114,89,0.87)',
        borderRadius:20,
        paddingHorizontal:7,
        borderWidth:1,
        borderColor:'#fff',
        color:'#fff'
    }
})

