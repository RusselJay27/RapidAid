import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';

import VideoPlayer from 'react-native-video-player'

import colors from '~/assets/colors';
import images from '~/assets/images';
import videos from '~/assets/videos';

const Screen = (props) => {
    const { navigation, route } = props;

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={{}}>
                    <View style={{ padding : 12, }}>
                        <View style={{alignItems: 'center', }}>
                            <Text style={{fontSize: 32, color: colors.white, fontWeight: 'bold', marginTop: 12}}>Basic Life Support</Text>
                            <View style={{marginVertical: 12}}>
                                <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                    <Image style={styles.logoStyle} source={images.infant}  />
                                </View>
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>Be sure the infant is face-up on a hard surface. 
                                Using two fingers, perform compressions in the center of the infant's chest; do not press on the end of the sternum as 
                                this can cause injury to the infant. Compression depth should be about 1.5 inches (4 cm) and a rate of 100 to 120 per minute.</Text>
                            </View>

                            <View style={{marginVertical: 12}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-around', }}>
                                    <View style={{  alignItems: 'center',  }}>
                                        <Image style={styles.logoStyle} source={images.children}  />
                                    </View>
                                    <View style={{  alignItems: 'center',  }}>
                                        <Image style={styles.logoStyle} source={images.adult}  />
                                    </View>
                                </View>
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>Focuses on doing several tasks simultaneously. 
                                In many situations, more than one person is available to do CPR. This choreographed method includes performing chest compressions, 
                                managing the airway, delivering rescue breaths, and using the AED, all as a team.</Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>Injured Arm</Text>
                                {/* <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                    <Image style={styles.logoStyle} source={images.injuredarm}  />
                                </View> */}

                                <View style={{margin: 8}}>
                                    <VideoPlayer
                                        // video={{ uri: 'https://placer8developer.com/rapidaid_videos/HEAT_EXHAUSTION.mp4' }}
                                        // video={{ uri: 'https://gdurl.com/8aLw' }}
                                        // video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                                        // video={require('~/assets/videos/injuredarm.mp4')}
                                        video={videos.injuredarm}
                                        autoplay={false}
                                        defaultMuted={false}
                                        // videoWidth={1600}
                                        // videoHeight={900}
                                        thumbnail={images.injuredarm}
                                        showDuration

                                    />
                                </View>

                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>1. Carefully applying triangular bandage.</Text>
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>2. If the patient is already in a good condition or stable you can remove the triangular bandage.</Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>Burn</Text>
                                {/* <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                    <Image style={styles.logoStyle} source={images.burn}  />
                                </View> */}

                                <View style={{margin: 8}}>
                                    <VideoPlayer
                                        video={videos.burn}
                                        autoplay={false}
                                        defaultMuted={false}
                                        thumbnail={images.burn}
                                        showDuration

                                    />
                                </View>

                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>1. Cleaning the burned skin of the patient.</Text>
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>2. Applying wet triangular bandage.</Text>
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>3. Dressing in a good way.</Text>
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>4. Hide the excess.(nakalitaw)</Text>
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>5. If the wound caused by the burn is already dry,  you can remove the bandage.</Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>Sprain</Text>
                                {/* <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                    <Image style={styles.logoStyle} source={images.sprain}  />
                                </View> */}

                                <View style={{margin: 8}}>
                                    <VideoPlayer
                                        video={videos.sprain}
                                        autoplay={false}
                                        defaultMuted={false}
                                        thumbnail={images.sprain}
                                        showDuration

                                    />
                                </View>
                                
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>1. If swelling and painful it will lessen through cold compress.</Text>
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>2. Applying elastic bandage.</Text>
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>3. Releasing the bandage every 8 hrs.</Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>Wounds</Text>
                                {/* <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                    <Image style={styles.logoStyle} source={images.wounds}  />
                                </View> */}

                                <View style={{margin: 8}}>
                                    <VideoPlayer
                                        video={videos.wounds}
                                        autoplay={false}
                                        defaultMuted={false}
                                        thumbnail={images.wounds}
                                        showDuration

                                    />
                                </View>
                                
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>1. Ready the equipments. (Bulak, Betadine Pas, Gauze Pad, Tape)</Text>
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>2. Clean the wounds with betadine(Applying to the center of the wounds Inner to outer).</Text>
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>3. Apply gauze pad.</Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>Heat Exhaustion</Text>
                                {/* <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                    <Image style={styles.logoStyle} source={images.heatexhaustion}  />
                                </View> */}

                                <View style={{margin: 8}}>
                                    <VideoPlayer
                                        video={videos.heatexhaustion}
                                        autoplay={false}
                                        defaultMuted={false}
                                        thumbnail={images.heatexhaustion}
                                        showDuration
                                    />
                                </View>
                                
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>1. Ask the patient first.</Text>
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>2. Applying cold compress to head and face.</Text>
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>3. Wait until the patient is already stable.</Text>
                            </View>

                        </View>

                    </View>
                </ScrollView>
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
        width: Dimensions.get('window').width / 2.4,
        // borderRadius: 8,
    },
});
export default Screen;