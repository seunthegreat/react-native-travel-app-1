import React from "react";
import { Animated } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import Icon from "../components/Icon";
import { sizes } from "../constants/theme";


const Home = require("../assets/icons/Home.png");
const Search = require("../assets/icons/Search.png");
const Favorite = require("../assets/icons/Favorite.png");

const tabs = [
  {
    name: "Home",
    screen: HomeScreen,
    icon: Home,
  },
  {
    name: "Search",
    screen: SearchScreen,
    icon: Search,
  },
  {
    name: "Favorite",
    screen: FavoriteScreen,
    icon: Favorite,
  }
];

const colors = {
    primary: "black",
    gray: "gray"
}


const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  const offsetAnimation = React.useRef( new Animated.Value(0)).current;

  return (
    <>
      <Tab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarShowLabel: false,
        }}
        >
        {tabs.map(({name, screen, icon}, index) => {
        return(
          <Tab.Screen
            key={name}
            name={name}
            component={screen}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <Icon
                    icon={icon} 
                    size={24}
                    style={{
                        tintColor: focused ? colors.primary : colors.gray,
                    }}
                  />
                 )
               }
            }}
            listeners={{
              focus: () => {
                Animated.spring(offsetAnimation, {
                  toValue: index * (sizes.width / tabs.length),
                  useNativeDriver:true,
                }).start()
              }
            }}
            />
        )
        })}
      </Tab.Navigator>
      <Animated.View style={[indicator, 
        {transform: [{translateX: offsetAnimation}]}]} 
      />
    </>
  )
}

export default TabNavigator

const indicator = {
  position:"absolute",
  width: 10,
  height: 2,
  left: sizes.width/ 3 / 2 - 5,
  bottom: 5,
  backgroundColor: colors.primary,
  zIndex: 100
}