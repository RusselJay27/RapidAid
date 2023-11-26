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

    return (
        <SafeAreaView style={styles.safeAreaView}>
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: colors.greenTheme}}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{}}>
                        <View style={{ padding : 12, }}>
                            <View style={{alignItems: 'center', }}>
                                <View style={{ width: '100%'}}>
                                    <TouchableOpacity onPress={() => {setModalVisible(false);}}>
                                        <IconII name="close-circle-outline" size={40} color="#fff" />
                                    </TouchableOpacity>
                                </View>

                                {select == 'FLOOD'
                                ?
                                <View>
                                    <View style={{ margin: 8, alignItems: 'center', marginVertical: 8, borderRadius: 8, }}>
                                        <Image style={styles.imageStyle} source={images.flood} resizeMode='stretch' />
                                    </View>

                                    <View style={{width: Dimensions.get('window').width, paddingHorizontal : 12, marginBottom: 8, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold'}}>FLOOD</Text>
                                    </View>
                                    

                                    <View style={{marginBottom: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                        <Text style={{fontSize: 20, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>What to do Before (Preparedness and Mitigation) </Text>

                                        <Text style={{fontSize: 16, color: colors.white, }}>1. Find out the frequency of occurrence of flood in the locality, especially those that will affect the school areas. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>2. Know the flood warning system of the school. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>3. Research from previous occurrences how fast the water flood occurs in the school and how high it rises. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>4. Watch out for rapidly-rising water and prepare for evacuation. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>5. Switch off the electricity and lock the rooms after leaving. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>6. Have a handy survival kit with battery operated radio, flashlight, emergency cooking equipment, candies, matches, and a first aid kit. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>7. Offer services and perform the assigned tasks in the event that the school designated as an evacuation area for families and livestock. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>8. If it has been raining hard for several hours, be alert to the possibility of a flood. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>9. Listen to news on a radio or a portable, battery-operated radio or TV to stay updated. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>10. Caution everyone to avoid using lanterns or torches in case there are flammable materials present. </Text>
                                    </View>

                                    <View style={{marginBottom: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                        <Text style={{fontSize: 20, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>What to do During (Response)</Text>

                                        <Text style={{fontSize: 16, color: colors.white, }}>1. Be calm and updated with the status of the situation and safety reminders on what to do and where to go in case of evacuation. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>2. Listen continuously to the radio or TV for updated emergency information. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>3. Avoid areas prone to flash flooding and be cautious of water- covered roads, bridges, creeks, stream bank, and recently flooded areas. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>4. Never attempt to cross flowing streams unless assured that the water is below the knee-high level. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>5. Never go swimming or boating in swollen rivers. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>6. Eat only well-cooked food and drink only clean or preferably boiled water. Also, throw away all food that has come into contact with flood water.</Text>
                                    </View>

                                    <View style={{marginBottom: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                        <Text style={{fontSize: 20, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>What to do After (Rehabilitation) </Text>

                                        <Text style={{fontSize: 16, color: colors.white, }}>1. Report broken utility lines (electricity, water, gas, etc.) immediately to appropriate agencies/authorities.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>2. Ensure that electrical appliances are checked by a competent electrician before switching them on.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>3. Avoid affected areas.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>4. Stay away from any building that is still flooded.</Text>
                                    </View>
                                </View>
                                :
                                <></>
                                }
                                {select == 'STORM SURGE'
                                ?
                                <View>
                                    <View style={{ margin: 8, alignItems: 'center', marginVertical: 8, borderRadius: 8, }}>
                                        <Image style={styles.imageStyle} source={images.storm_surge} resizeMode='stretch' />
                                    </View>
                                    <View style={{width: Dimensions.get('window').width, paddingHorizontal : 12, marginBottom: 8, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold'}}>STORM SURGE</Text>
                                    </View>

                                    <View style={{marginBottom: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                        <Text style={{fontSize: 20, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>What to do Before (Preparedness and Mitigation) </Text>

                                        <Text style={{fontSize: 16, color: colors.white, }}>1. Know the storm surge risk zone and recommend for the relocation of school children to safer grounds if necessary. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>2. Recommend the construction of seawalls and storm surge breaker to protect the building from storm surge strike. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>3. Stay off the beach when there is a disturbance in weather. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>4. Be familiar with the identified escape routes of the school to higher grounds. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>5. Establish procedures. 6. Ensure full participation in the regular conduction of drills and exercises.</Text>
                                    </View>

                                    <View style={{marginBottom: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                        <Text style={{fontSize: 20, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>What to do During (Response) </Text>

                                        <Text style={{fontSize: 16, color: colors.white, }}>1. Move to higher grounds Upon detection of signs of a probable storm surge or upon receiving a warning that a storm surge is imminent. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>2. Be alert of and stay away from steep, high coastal areas which are prone to landslide. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>3. Switch off power supply. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>4. Stay on the inland side away from the potential flow of the water. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>5. If caught in a storm surge, take hold of large boulders or tree trunks which can provide protection from the force of waters or debris carried by the flowing water.</Text>
                                    </View>

                                    <View style={{marginBottom: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                        <Text style={{fontSize: 20, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>What to do After (Rehabilitation) </Text>

                                        <Text style={{fontSize: 16, color: colors.white, }}>1. Never eat fresh food that came in contact with flood waters. Water used for drinking should be submitted to proper authorities for testing. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>2. Check structural damage of the classroom to ensure that there is no danger of structural collapse. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>3. Clean all mud and debris immediately.</Text>
                                    </View>
                                </View>
                                :
                                <></>
                                }
                                {select == 'TROPICAL CYCLONE'
                                ?
                                <View>
                                    <View style={{ margin: 8, alignItems: 'center', marginVertical: 8, borderRadius: 8, }}>
                                        <Image style={styles.imageStyle} source={images.tropical_cyclone} resizeMode='stretch' />
                                    </View>
                                    <View style={{width: Dimensions.get('window').width, paddingHorizontal : 12, marginBottom: 8, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold'}}>TROPICAL CYCLONE</Text>
                                    </View>

                                    <View style={{marginBottom: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                        <Text style={{fontSize: 20, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>What to do Before (Preparedness and Mitigation) </Text>

                                        <Text style={{fontSize: 16, color: colors.white, }}>1. Establish and maintain coordination with Barangay Disaster Coordinating Council (BDCC).</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>2. Ensure that the school building can withstand heavy rain and strong wind. </Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>3. Learn about typhoon and other weather disturbances, their signs and warnings, effects and dangers, and how to protect the school children, records, and school property.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>4. Be well-informed on preparedness for tropical cyclones.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>5. Participate in the school’s disaster response-drill or simulation.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>6. Observe strictly department policies on the suspension of classes or invoke school-based decisions in coordination with LGUs</Text>
                                    </View>

                                    <View style={{marginBottom: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                        <Text style={{fontSize: 20, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>What to do During (Response) </Text>

                                        <Text style={{fontSize: 16, color: colors.white, }}>1. Monitor through radio or other reliable sources the latest official report of PAGASA on the typhoon.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>2. Gather in the most stable, strong, and safe school building when it is no longer safe to go home.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>3. Stay indoors and away from windows.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>4. Coordinate with the proper school officials on possible immediate evacuation measures especially if the school is located in a low-lying area.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>5. Remain calm by keeping informed of the latest developments</Text>
                                    </View>

                                    <View style={{marginBottom: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                        <Text style={{fontSize: 20, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>What to do After (Rehabilitation) </Text>

                                        <Text style={{fontSize: 16, color: colors.white, }}>1. Attend to victims immediately.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>2. Check the classroom for damages and losses. Report these immediately to the authorized officials.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>3. Coordinate with the Barangay officials/ LGUs for assistance.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>4. Prepare the necessary documents to affect replacement of damaged buildings and school properties and/or repair of the same.</Text>
                                    </View>
                                </View>
                                :
                                <></>
                                }
                                {select == 'EARTHQUAKE'
                                ?
                                <View>
                                    <View style={{ margin: 8, alignItems: 'center', marginVertical: 8, borderRadius: 8, }}>
                                        <Image style={styles.imageStyle} source={images.earthquake} resizeMode='stretch' />
                                    </View>
                                    <View style={{width: Dimensions.get('window').width, paddingHorizontal : 12, marginBottom: 8, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold'}}>EARTHQUAKE</Text>
                                    </View>

                                    <View style={{marginBottom: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                        <Text style={{fontSize: 20, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>What to do Before (Preparedness and Mitigation) </Text>

                                        <Text style={{fontSize: 16, color: colors.white, }}>1. Request appropriate authorities to determine whether the school site is along an active fault and/ or in liquefaction or landslide prone areas which may cause school buildings to fall.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>2. Make sure that school building design complies with the National Building Code Standard.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>3. On existing school buildings with one door, request proper authorities to provide two exit doors for every classroom, both with swing-out direction.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>4. Check for the presence of other potential sources of hazard due to secondary effect of earthquakes like steep hill slopes, hanging heavy objects, dams, storage tanks, falling debris, and fire.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>5. Strap heavy furniture/ cabinets inside the classrooms to the wall to prevent sliding or toppling.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>6. Check classrooms for hanging or unstable objects that may fall during the earthquake.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>7. Be familiarized with the easiest exit or evacuation route to take. Develop a School Earthquake Evacuation Plan and hang/post this along the corridor of each building.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>8. Learn how to use fire extinguishers, first aid kits, alarms, and emergency exits.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>9. Never use the elevator during and after an earthquake.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>10. Identify strong parts of the building like door jambs, near elevator shafts, and sturdy tables that may serve as refuge during an earthquake.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>11. Prepare and maintain an earthquake survival kit consisting of battery-powered radio, flashlight, first aid kit, potable water, candies, ready- to-eat food, whistle, and a dust mask.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>12. Conduct an orientation and earthquake drill.</Text>
                                    </View>

                                    <View style={{marginBottom: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                        <Text style={{fontSize: 20, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>What to do During (Response) </Text>

                                        <Text style={{fontSize: 16, color: colors.white, }}>1. Stay inside a structurally sound building.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>2. Protect the body from falling debris by bracing in a door ay or by getting under the study desk or table.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>3. When inside a vehicle, pull to the side of the road map and stop. Do not attempt to cross bridges or overpass may have been damaged.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>4. Move to an open area when outside.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>5. Stay away from power lines, posts, walls, and other structures that may have been damaged.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>6. Move away from steep escarpments which may be affected by landslides, particularly if on a mountain or near steep hill slopes.</Text>
                                    </View>

                                    <View style={{marginBottom: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                        <Text style={{fontSize: 20, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>What to do After (Rehabilitation) </Text>

                                        <Text style={{fontSize: 16, color: colors.white, }}>1. Take the fastest and safest way out of it caught in an old or weak classroom building.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>2. Get out calmly and in an orderly manner. Never rush or push one another.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>3. Never use the elevator.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>4. Check for cuts or injuries and approach the nearest teachers for assistance.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>5. Check the surroundings of the school.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>6. Call the authority to clean up chemical spills, toxic, and flammable materials since this is hazardous to untrained people.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>7. Check for the fire and if there is any, have it controlled immediately.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>8. Check the water and electrical lines for defects.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>9. Follow the school heads for safety precautions.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>10. Do not drive into damaged areas.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>11. If there is a need to evacuate, apply the buddy-buddy system and follow orders from the school head.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>12. Take with your earthquake survival kit. </Text>
                                    </View>
                                </View>
                                :
                                <></>
                                }
                                {select == 'LANDSLIDE'
                                ?
                                <View>
                                    <View style={{ margin: 8, alignItems: 'center', marginVertical: 8, borderRadius: 8, }}>
                                        <Image style={styles.imageStyle} source={images.landslide} resizeMode='stretch' />
                                    </View>
                                    <View style={{width: Dimensions.get('window').width, paddingHorizontal : 12, marginBottom: 8, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold'}}>LANDSLIDE</Text>
                                    </View>

                                    <View style={{marginBottom: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                        <Text style={{fontSize: 20, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>What to do Before (Preparedness and Mitigation) </Text>

                                        <Text style={{fontSize: 16, color: colors.white, }}>1. Secure clearance from the mines and geoscience bureau (MGB) on status of possible landslides.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>2. Prepare for evacuation upon the direction of the proper school officials.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>3. Maintain a list of contact numbers for emergencies.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>4. Plant grasses to cover slopes or build riprap to prevent soil erosion.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>5. Reinforce the foundation and walls of school buildings and other structures if when needed.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>6. Conduct regular drills on evacuation procedures.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>7. Promote public awareness and involvement on landslide mitigation.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>8. Find out whether or not landslides have previously happened in your area.</Text>
                                    </View>

                                    <View style={{marginBottom: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                        <Text style={{fontSize: 20, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>What to do During (Response) </Text>

                                        <Text style={{fontSize: 16, color: colors.white, }}>1. Evacuate the school community immediately if warned of an impending landslide or mudflow.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>2. Stay away from the path of landslide debris, or seek refuge behind a sturdy tree or boulder.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>3. Get out of the school buildings as soon as possible when rumbling sounds are heard from upstream or the trembling of the ground is felt that might indicate a possible mudflow. Run across a slope, not downwards.</Text>
                                    </View>

                                    <View style={{marginBottom: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>
                                        <Text style={{fontSize: 20, color: colors.white, fontWeight: 'bold', marginBottom: 8 }}>What to do After (Rehabilitation) </Text>

                                        <Text style={{fontSize: 16, color: colors.white, }}>1. Recommended to proper authorities through examination of damaged structures and utilities before re-occupying facilities.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>2. Stay away from the landslide area.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>3. Check with caution injured and trapped persons within the landslide area. Direct rescuers to their location.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>4. Listen to local radio or TV stations for the latest emergency information.</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}>5. Seek the advice of geotechnical experts for evaluating hazards or designing corrective techniques to reduce landslide risk.</Text>
                                    </View>
                                </View>
                                :
                                <></>
                                }
                                {select == 'FIRE'
                                ?
                                <View>
                                    <View style={{ margin: 8, alignItems: 'center', marginVertical: 8, borderRadius: 8, }}>
                                        <Image style={styles.imageStyle} source={images.fire} resizeMode='stretch' />
                                    </View>
                                    <View style={{width: Dimensions.get('window').width, paddingHorizontal : 12, marginBottom: 8, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold'}}>FIRE</Text>
                                    </View>

                                    <View style={{marginBottom: 12, width: Dimensions.get('window').width, paddingHorizontal : 12, }}>

                                        <Text style={{fontSize: 16, color: colors.white, }}><Text style={{fontWeight: 'bold'}}>Class A:</Text> It consists of ordinary combustible materials that leave ashes when 
                                        it burns. The best extinguisher for this class is water.{'\n\n'}Examples of materials under this type are wood, paper, trash, and other light materials.{'\n'}</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}><Text style={{fontWeight: 'bold'}}>Class B:</Text> This fire consists of flammable or combustible liquids. Smothering effects that remove the oxygen supply of the fire work best to extinguish this class.
                                        {'\n\n'}Examples of materials under this type are oil and gasoline.{'\n'}</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}><Text style={{fontWeight: 'bold'}}>Class C:</Text> The main components of this
                                        type are flammable gases. Some may identify electrical fires in this class. Dry chemical and halon are the most suitable suppression materials.
                                        {'\n\n'}Examples of the flammable gases are acetylene, ammonia, hydrogen, propane, propylene, and methane.{'\n'}</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}><Text style={{fontWeight: 'bold'}}>Class D:</Text> This is also known as metal fires. Magnesium and Titanium are the most common types of metal fires due to being ignited. Once the metal ignites, water should not be used to extinguish it and instead use only a dry powder agent that could smother the fire and absorb its heat.
                                        {'\n\n'}Combustible metals are the components of the fire under this class.{'\n'}</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}><Text style={{fontWeight: 'bold'}}>Class E:</Text> This is also known as the energized electrical fires. De-energizing the circuit and using a non-conductive extinguishing agent such as carbon dioxide works best to extinguish this fire.
                                        {'\n\n'}Examples of the cause of this fire are electrical equipment such as motors and kitchen appliances.{'\n'}</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}><Text style={{fontWeight: 'bold'}}>Class K:</Text> This fire commonly occurs in
                                        kitchen settings. It requires using Purple K which is found in kitchen or galley extinguishers. In Asian countries, this is also known as "Class F".
                                        {'\n\n'}Examples of the combustibles under this class are cooking oils, grease, and animal and vegetable fat.{'\n'}</Text>
                                        <Text style={{fontSize: 16, color: colors.white, }}><Text style={{fontWeight: 'bold'}}>Remember!</Text>
                                        {'\n\n'}An easy way to remember these types of Fires is "(beat) Class A leaves an Ash, (beat) Class B boils, (beat) Class C has current (beat), and Class D has Dense Material (beat), And don't forget the most overlooked, Class K for Kitchen."</Text>
                                    </View>
                                </View>
                                :
                                <></>
                                }
                            </View>

                        </View>
                    </ScrollView>
                </View>
            </Modal>

            <View style={styles.container}>
                <View style={{ padding : 12, flex : 1 }}>
                    <View style={{alignItems: 'center', flex: 1, }}>
                        <View style={{ width: '100%'}}>
                            <TouchableOpacity onPress={() => {navigation.goBack();}}>
                                <IconII name="arrow-back-circle-outline" size={40} color="#fff" />
                            </TouchableOpacity>
                        </View>
                        <Text style={{fontSize: 32, color: colors.white, fontWeight: 'bold', }}>Disaster Risk Reduction</Text>

                        <View style={{ width: '100%', flex: 1, justifyContent: 'space-evenly'}}>
                            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
                                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => { setSelect('FLOOD'); setModalVisible(true); }}
                                        style={{ margin: 8, alignItems: 'center', marginVertical: 8, borderRadius: 8, }}>
                                        <Image style={styles.logoStyle} source={images.flood} resizeMode='stretch' />
                                    </TouchableOpacity>
                                    <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold'}}>FLOOD</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => { setSelect('STORM SURGE'); setModalVisible(true); }}
                                        style={{ margin: 8, alignItems: 'center', marginVertical: 8, borderRadius: 8, }}>
                                        <Image style={styles.logoStyle} source={images.storm_surge} resizeMode='stretch' />
                                    </TouchableOpacity>
                                    <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold'}}>STORM SURGE</Text>
                                </View>
                            </View>

                            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
                                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => { setSelect('TROPICAL CYCLONE'); setModalVisible(true); }}
                                        style={{ margin: 8, alignItems: 'center', marginVertical: 8, borderRadius: 8, }}>
                                        <Image style={styles.logoStyle} source={images.tropical_cyclone}  />
                                    </TouchableOpacity>
                                    <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold'}}>TROPICAL CYCLONE</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => { setSelect('EARTHQUAKE'); setModalVisible(true); }}
                                        style={{ margin: 8, alignItems: 'center', marginVertical: 8, borderRadius: 8, }}>
                                        <Image style={styles.logoStyle} source={images.earthquake} resizeMode='stretch' />
                                    </TouchableOpacity>
                                    <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold'}}>EARTHQUAKE</Text>
                                </View>
                            </View>

                            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
                                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => { setSelect('LANDSLIDE'); setModalVisible(true); }}
                                        style={{ margin: 8, alignItems: 'center', marginVertical: 8, borderRadius: 8, }}>
                                        <Image style={styles.logoStyle} source={images.landslide} resizeMode='stretch' />
                                    </TouchableOpacity>
                                    <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold'}}>LANDSLIDE</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => { setSelect('FIRE'); setModalVisible(true); }}
                                        style={{ margin: 8, alignItems: 'center', marginVertical: 8, borderRadius: 8, }}>
                                        <Image style={styles.logoStyle} source={images.fire} resizeMode='stretch' />
                                    </TouchableOpacity>
                                    <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold'}}>FIRE</Text>
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