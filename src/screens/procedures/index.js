import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';

import VideoPlayer from 'react-native-video-player'

import colors from '~/assets/colors';
import images from '~/assets/images';
import videos from '~/assets/videos';

import IconII from 'react-native-vector-icons/Ionicons';

const Screen = (props) => {
    const { navigation, route } = props;  
    
    // useEffect(() => {
    //     console.log(route.params.title);
    // }, []);  

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={{}}>
                    <View style={{ padding : 12, }}>
                        <View style={{alignItems: 'center', }}>
                            <View style={{ width: '100%'}}>
                                <TouchableOpacity onPress={() => {navigation.goBack();}}>
                                    <IconII name="arrow-back-circle-outline" size={40} color="#fff" />
                                </TouchableOpacity>
                            </View>
                            { route.params.title == "Basic Life Support" ? 
                            <>
                            <Text style={{fontSize: 32, color: colors.white, fontWeight: 'bold', }}>Basic Life Support</Text>
                            <View style={{marginVertical: 12}}>
                                <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                    <Image style={styles.logoStyle} source={images.infant}  />
                                </View>
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold' }}>Be sure the infant is face-up on a hard surface. 
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
                            </> 
                            : 
                            <></>
                            }
                            { route.params.title == "First Aid Training" ? 
                            <>
                            <View>
                                <Text style={{fontSize: 32, color: colors.white, fontWeight: 'bold', }}>First Aid Training</Text>
                            </View>
                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>Injured Arm</Text>
                                <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}Arm pain may be related to problems with the muscles, bones, tendons, 
                                ligaments and nerves. It also may be related to problems with the joints of the shoulders, elbows and wrists. Often arm pain is caused by a problem in 
                                your neck or upper spine.</Text>

                                <View style={{margin: 8}}>
                                    <VideoPlayer
                                        video={videos.injuredarm}
                                        autoplay={false}
                                        defaultMuted={false}
                                        thumbnail={images.injuredarm}
                                        showDuration

                                    />
                                </View>

                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>1. Carefully applying triangular bandage.</Text>
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>2. If the patient is already in a good condition or stable you can remove the triangular bandage.</Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>Burn</Text>
                                <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}A burn is tissue damage caused by heat, chemicals, electricity, sunlight, 
                                or nuclear radiation. The most common burns are those caused by hot liquid or steam, building fires, and flammable liquids and gases.</Text>

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
                                <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}A sprain is an injury to the ligaments around a joint. Ligaments are strong, 
                                flexible fibers that hold bones together. When a ligament is stretched too far or tears, the joint will become painful and swell. </Text>

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
                                <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}An injury to the body (as from violence, accident, or surgery) that typically 
                                involves laceration or breaking of a membrane (such as the skin) and usually damage to underlying tissues.</Text>

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

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12,  }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>Heat Exhaustion</Text>
                                <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}Heat exhaustion is the body's response to an excessive loss of water and 
                                salt, usually through excessive sweating. Heat exhaustion is most likely to affect: The elderly. People with high blood pressure. Those working in a hot 
                                environment.</Text>

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

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12,  }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>Allergic Reaction</Text>
                                <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}are sensitivities to substances called allergens that come into contact with the skin, 
                                nose, eyes, respiratory tract, and gastrointestinal tract. </Text>

                                <View style={{margin: 4}}>
                                    <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                        <Image style={styles.imageStyle} source={images.allergic_reaction}  />
                                    </View>
                                </View>
                                
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>1. Administer an epinephrine auto-injector (if available) for severe allergic reactions.</Text>
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>2. Call for emergency help and assist with any prescribed medications.</Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12,  }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>Fractures</Text>
                                <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}a partial or complete break in the bone. </Text>

                                <View style={{margin: 4}}>
                                    <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                        <Image style={styles.imageStyle} source={images.fracture}  />
                                    </View>
                                </View>
                                
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>1. Call for professional medical help.</Text>
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>2. Immobilize the injured area with a splint or bandage.</Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12,  }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>Stroke</Text>
                                <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}It occurs when something blocks blood supply to part of the brain or when a blood vessel in 
                                the brain bursts. </Text>

                                <View style={{margin: 4}}>
                                    <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                        <Image style={styles.imageStyle} source={images.stroke}  />
                                    </View>
                                </View>
                                
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>1. Remember the FAST acronym: Face drooping, Arm weakness, Speech difficulty, Time to call 
                                emergency services.</Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12,  }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>Eye Injuries</Text>
                                <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}include bruises, punctures and scratches.</Text>

                                <View style={{margin: 4}}>
                                    <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                        <Image style={styles.imageStyle} source={images.eye_injury}  />
                                    </View>
                                </View>
                                
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>1. Rinse the eye with cool, clean water for at least 15 minutes.</Text>
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>2. Do not rub the eye, and seek medical attention.</Text>
                            </View>
                            </> 
                            : 
                            <></>
                            }


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
    imageStyle:
    {
        resizeMode: 'contain',
        height: Dimensions.get('window').width / 2,
        width: Dimensions.get('window').width / 1.2,
        // borderRadius: 8,
    },
});
export default Screen;