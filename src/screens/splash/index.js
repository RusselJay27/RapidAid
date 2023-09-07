import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, SafeAreaView } from 'react-native';

import colors from '~/assets/colors';

import SplashScreen from 'react-native-splash-screen';

const Screen = (props) => {
    const { navigation, route } = props;

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    useEffect(() => {
        wait(1000).then(() =>
        {
            navigation.replace('Home', {
                screen: 'Home',
            })
            SplashScreen.hide();
        });
    }, []);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaView: 
    {
        height: Dimensions.get('window').height
    },
    container: 
    {
        flex: 1,
        backgroundColor: colors.white,
    },
});
export default Screen;