import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity, Image, ScrollView, Modal, } from 'react-native';

import VideoPlayer from 'react-native-video-player'

import colors from '~/assets/colors';
import images from '~/assets/images';
import videos from '~/assets/videos';

import IconII from 'react-native-vector-icons/Ionicons';

const Screen = (props) => {
    const { navigation, route } = props;

    const [modalVisible, setModalVisible] = useState(false);
    const [select, setSelect] = useState('');

    const btnNext = () => 
    {
        navigation.navigate('Category', {
            screen: 'Category',
        })
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>

            <View style={styles.container}>
                <View style={{ padding : 12, flex : 1 }}>
                    <View style={{alignItems: 'center', flex: 1, }}>
                        <View style={{ width: '100%'}}>
                            <TouchableOpacity onPress={() => {navigation.goBack();}}>
                                <IconII name="arrow-back-circle-outline" size={40} color="#fff" />
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '100%', flex: 1, justifyContent: 'space-evenly', }}>

                            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
                                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Procedures', { screen: 'Procedures', }); }}
                                        style={{ margin: 8, alignItems: 'center', marginVertical: 8, borderRadius: 8, }}>
                                        <Image style={styles.logoStyle} source={images.bls} resizeMode='stretch' />
                                    </TouchableOpacity>
                                    <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', textAlign: 'center', }}>BASIC LIFE{'\n'}SUPPORT</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Disaster', { screen: 'Disaster', }); }}
                                        style={{ margin: 8, alignItems: 'center', marginVertical: 8, borderRadius: 8, }}>
                                        <Image style={styles.logoStyle} source={images.disaster_risk_reduction} resizeMode='stretch' />
                                    </TouchableOpacity>
                                    <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', textAlign: 'center'}}>DISASTER RISK{'\n'}REDUCTION</Text>
                                </View>
                            </View>

                            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
                                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Hotline', { screen: 'Hotline', }); }}
                                        style={{ margin: 8, alignItems: 'center', marginVertical: 8, borderRadius: 8, }}>
                                        <Image style={styles.logoStyle} source={images.hotline} resizeMode='stretch' />
                                    </TouchableOpacity>
                                    <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', textAlign: 'center'}}>EMERGCENY{'\n'}HOTLINE</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Quiz', { screen: 'Quiz', }); }}
                                        style={{ margin: 8, alignItems: 'center', marginVertical: 8, borderRadius: 8, }}>
                                        <Image style={styles.logoStyle} source={images.quiz} resizeMode='stretch' />
                                    </TouchableOpacity>
                                    <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold'}}>QUIZ</Text>
                                </View>
                            </View>

                        </View>

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
        height: Dimensions.get('window').width / 3,
        width: Dimensions.get('window').width / 3,
        borderRadius: 8,
    },
    imageStyle:
    {
        resizeMode: 'contain',
        height: Dimensions.get('window').width / 2,
        width: Dimensions.get('window').width / 2,
        borderRadius: 8,
    },
});
export default Screen;