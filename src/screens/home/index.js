import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity, Image } from 'react-native';

import colors from '~/assets/colors';
import images from '~/assets/images';

const Screen = (props) => {
    const { navigation, route } = props;

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <View style={{ margin: 8, alignItems: 'center', marginVertical: 20 }}>
                        <Image style={styles.logoStyle} source={images.logo}  />
                    </View>
                    <Text style={{color: colors.white, fontSize: 26, textAlign: 'center', fontWeight: 'bold'}}>Welcome to RapidAid</Text>

                    <View style={{marginTop: 20}}>
                        <TouchableOpacity style={{backgroundColor: colors.white, margin: 8, elevation: 4, borderRadius: 24, paddingVertical: 12, width: Dimensions.get('window').width / 2, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 20, color: colors.greenTheme, fontWeight: 'bold'}}>Get Started</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={{backgroundColor: colors.white, margin: 8, elevation: 4, borderRadius: 24, paddingVertical: 8, paddingHorizontal: 32}}>
                            <Text style={{fontSize: 20, color: colors.greenTheme, fontWeight: 'bold'}}>Quiz</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
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
        backgroundColor: colors.greenTheme,
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
    logoStyle:
    {
        resizeMode: 'contain',
        height: Dimensions.get('window').width / 2.2,
        width: Dimensions.get('window').width / 2.2,
    },
});
export default Screen;