import React, { useState, useEffect, useContext  } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MainNavigator = createStackNavigator();

import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Modal,
  } from 'react-native';

import colors from '~/assets/colors';

import {
    SplashScreen,
    HomeScreen,
    ProceduresScreen,
    // TimeKeepingScreen,
} from '~/screens';

const MainStackNavigator = () => {

    return (
        <NavigationContainer>
            <MainNavigator.Navigator
                initialRouteName={'Splash'}
                screenOptions={{
                    headerShown: false
                }} >
                <MainNavigator.Screen name="Splash" component={SplashScreen} />
                <MainNavigator.Screen name="Home" component={HomeScreen} />
                <MainNavigator.Screen name="Procedures" component={ProceduresScreen} />
                {/* <MainNavigator.Screen name="TimeKeeping" component={TimeKeepingScreen} /> */}
            </MainNavigator.Navigator>
        </NavigationContainer>
    );
}

export default MainStackNavigator; 