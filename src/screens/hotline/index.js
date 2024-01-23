import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';

import VideoPlayer from 'react-native-video-player'

import colors from '~/assets/colors';
import images from '~/assets/images';
import videos from '~/assets/videos';

import IconII from 'react-native-vector-icons/Ionicons';

const Screen = (props) => {
    const { navigation, route } = props;

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
                            <Text style={{fontSize: 32, color: colors.white, fontWeight: 'bold', }}>Emergency Hotline</Text>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>Muntinlupa</Text>

                                <Text style={{fontSize: 16, color: colors.white, }}><Text style={{fontWeight: 'bold'}}>137-175</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Landline: <Text style={{fontWeight: 'bold'}}>8373-51-65</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Rescue Hotline Smart: <Text style={{fontWeight: 'bold'}}>0921-542-7123</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Rescue Hotline Globe: <Text style={{fontWeight: 'bold'}}>0927-257-9322</Text></Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>National Disaster Risk Reduction Management Council ( NDRRMC )</Text>

                                <Text style={{fontSize: 16, color: colors.white, }}>Trunklines: <Text style={{fontWeight: 'bold'}}>911-5061 to 65</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Operations Center: <Text style={{fontWeight: 'bold'}}>(02)911-1406, (02)912-2665, (02)912-5668, (02)911-1873</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Office of Civil Defense – National Capital Region: <Text style={{fontWeight: 'bold'}}>(02) 421-1918/ (02) 913-2786</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Office of Civil Defense – Region I: <Text style={{fontWeight: 'bold'}}>(072) 607-6528</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Office of Civil Defense – Region IV-A: <Text style={{fontWeight: 'bold'}}>(049) 531-7266WNDRRMC</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Region IV-B: <Text style={{fontWeight: 'bold'}}>(043) 723-4248</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>NDRRMC – Cordillera Administrative Region: <Text style={{fontWeight: 'bold'}}>(074) 304-2256, (074) 619-0986, (074) 444-5298, (074)619-0986</Text></Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>Department of Social Welfare and Development ( DSWD )</Text>

                                <Text style={{fontSize: 16, color: colors.white, }}>Text Hotline: <Text style={{fontWeight: 'bold'}}>0918-912-2819</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Trunklines: <Text style={{fontWeight: 'bold'}}>(02) 931-81-01</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Disaster Response Unit: <Text style={{fontWeight: 'bold'}}>856-3665, 852-8081</Text></Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>Red Cross</Text>

                                <Text style={{fontSize: 16, color: colors.white, }}>Hotline: <Text style={{fontWeight: 'bold'}}>143, (02) 527-0000, (02) 527- 8385 to 95</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Disaster Management Office: <Text style={{fontWeight: 'bold'}}>134 (staff), 132 (manager), 133 (rdio room) </Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Telefax: <Text style={{fontWeight: 'bold'}}>527-086</Text></Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>Department of the Interior and Local Government ( DILG )</Text>

                                <Text style={{fontSize: 16, color: colors.white, }}>Telephone: <Text style={{fontWeight: 'bold'}}>925-0330 / 925-0331</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Telefax: <Text style={{fontWeight: 'bold'}}>925-0332</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Cellphone: <Text style={{fontWeight: 'bold'}}>0917-6279627</Text></Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>Bureau of Fire Protection ( NCR )</Text>

                                <Text style={{fontSize: 16, color: colors.white, }}>Direct line: <Text style={{fontWeight: 'bold'}}>(02) 426-0219, (02) 426-3812, (02) 426-0246</Text></Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>Philippine Coast Guard ( PCG )</Text>

                                <Text style={{fontSize: 16, color: colors.white, }}>Trunkline: <Text style={{fontWeight: 'bold'}}>(02) 527-8481 to 89</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Action Center: <Text style={{fontWeight: 'bold'}}>(02) 527-3877{'\n'}0917-PCG-DOTC{'\n'}0917-724-3682 (Globe){'\n'}0918-967-4697</Text></Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>Metro Manila Development Authority (MMDA)</Text>

                                <Text style={{fontSize: 16, color: colors.white, }}>Hotline: <Text style={{fontWeight: 'bold'}}>136</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Trunkline: <Text style={{fontWeight: 'bold'}}>: (02) 882-4150-77
                                    {'\n'}Loc. 337 (Rescue)
                                    {'\n'}255 (Metrobase)
                                    {'\n'}319 (Road Safety)
                                    {'\n'}374 (Public Safety)
                                    {'\n'}320 (Road Emergency)
                                    {'\n'}(02) 882-0925 (Flood Control)</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Trunkline: <Text style={{fontWeight: 'bold'}}>(045) 499-1468</Text></Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>Land Transportation Office ( LTO )</Text>

                                <Text style={{fontSize: 16, color: colors.white, }}>Text LTO Hotline: <Text style={{fontWeight: 'bold'}}> Text LTOHELP to 2600 (All networks)</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Hotline: <Text style={{fontWeight: 'bold'}}>(02) 922-9061 to 66</Text></Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>Philippine Atmospheric, Geophysical and Astronomical Services Administration (PAGASA)</Text>

                                <Text style={{fontSize: 16, color: colors.white, }}>General Inquiries </Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Public Information Unit<Text style={{fontWeight: 'bold'}}>(632) 4342696</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Weather Updates </Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Weather Forecasting Section<Text style={{fontWeight: 'bold'}}>{'\n'}(632) 9264258, (632) 9271541</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Aviation Weather Updates </Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Aeronautical Meteorology Service Section<Text style={{fontWeight: 'bold'}}>{'\n'}(632) 8323023</Text></Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>Philippine Institute of Volcanology and Seismology (PHIVOLCS)</Text>

                                <Text style={{fontSize: 16, color: colors.white, }}>Trunkline: <Text style={{fontWeight: 'bold'}}>(02) 426-1468 to 79, Local 124/125 (Seismology)</Text></Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>Manila Water</Text>

                                <Text style={{fontSize: 16, color: colors.white, }}>Trunkline: <Text style={{fontWeight: 'bold'}}>632-9175900 – Mon-Fri 8-5pm</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Customer Service Hotline: <Text style={{fontWeight: 'bold'}}>1627 (Open 24Hours)</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Tel. Number: <Text style={{fontWeight: 'bold'}}>917-5900 Local 1520</Text></Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>Manila Electric Rail(Road) and Light Company (MERALCO)</Text>

                                <Text style={{fontSize: 16, color: colors.white, }}>Landline: <Text style={{fontWeight: 'bold'}}>16211</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Mobile (text only): <Text style={{fontWeight: 'bold'}}>0920-97-16211 / 0917-551-6211</Text></Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>Department of Transportation (DOTr)</Text>

                                <Text style={{fontSize: 16, color: colors.white, }}>Trunkline: <Text style={{fontWeight: 'bold'}}>(632) 790-8300 / 790-8400</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Telefax: <Text style={{fontWeight: 'bold'}}>(632) 723-4925</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>DOTr Action Center Hotline: <Text style={{fontWeight: 'bold'}}>7890</Text></Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>National Grid Corporation of the Philippines (NGCP)</Text>

                                <Text style={{fontSize: 16, color: colors.white, }}>Trunkline: <Text style={{fontWeight: 'bold'}}>(02) 981-2100/2118</Text></Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>Armed Forces of the Philippines (AFD)</Text>

                                <Text style={{fontSize: 16, color: colors.white, }}>Telefax: <Text style={{fontWeight: 'bold'}}>+632 911-6436</Text></Text>
                            </View>

                            <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>Department of Public Works and Highway (DPWH)</Text>

                                <Text style={{fontSize: 16, color: colors.white, }}>Send an SMS: <Text style={{fontWeight: 'bold'}}>2920</Text></Text>
                                <Text style={{fontSize: 16, color: colors.white, }}>Call: <Text style={{fontWeight: 'bold'}}>165-02</Text></Text>
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