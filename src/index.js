import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';

import colors from '~/assets/colors';

const Screen = (props) => {
    const { navigation, route } = props;

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
        backgroundColor: colors.blueTheme,
    },
    viewContainer: 
    {
        backgroundColor: colors.white, 
        // marginTop: 40, 
        borderTopRightRadius: 24, 
        borderTopLeftRadius: 24, 
        flex: 1, 
        padding: 8, 
        elevation: 5,
    },
    buttonStyle:
    {
        marginTop: 8, 
        backgroundColor: colors.blueTheme, 
        borderRadius: 8, 
        padding: 8, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        elevation: 4
    },
    buttonTextStyle:
    {
        color: colors.white, 
        marginLeft: 8, 
        fontSize: 16, 
        fontWeight: 'bold'
    },
});
export default Screen;