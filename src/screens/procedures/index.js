import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';

import VideoPlayer from 'react-native-video-player'

import colors from '~/assets/colors';
import images from '~/assets/images';
import videos from '~/assets/videos';

import IconII from 'react-native-vector-icons/Ionicons';

const Screen = (props) => {
    const { navigation, route } = props;  

    const [modalVisible, setModalVisible] = useState(false);
    const [topic, setTopic] = useState('MEDICAL CONDITIONS');
    
    // useEffect(() => {
    //     console.log(route.params.title);
    // }, []);  

    return (
        <SafeAreaView style={styles.safeAreaView}>
            
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width, 
                    backgroundColor: colors.greenTheme, }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{}}>
                        <View style={{ padding : 12, }}>
                            <View style={{ width: '100%'}}>
                                <TouchableOpacity onPress={() => { setModalVisible(!modalVisible); }}>
                                    <IconII name="arrow-back-circle-outline" size={40} color="#fff" />
                                </TouchableOpacity>
                            </View>
                            <View style={{alignItems: 'center',  }}>
                                <View>
                                    <Text style={{fontSize: 28, color: colors.white, fontWeight: 'bold', textAlign: 'center' }}>{topic}</Text>
                                </View>
                                {topic == 'MEDICAL CONDITIONS' ?
                                    <>
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
                                            <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>FEVER</Text>
                                            <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}When a person's body temperature rises above 38°C (100.4°F), they are said to have a fever. Fevers are a typical, healthy reaction to an infection and are often harmless. They are more common in children but can affect persons of all ages. Since their bodies are still developing, children who have a fever may get seizures.</Text>
        
                                            <View style={{margin: 4}}>
                                                <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                                    <Image style={styles.imageStyle} source={images.fever}  />
                                                </View>
                                            </View>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 1:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Encourage them to take it easy and wear light clothing because putting too much on top of them could cause them to become too hot.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Give the person something to drink to assist replenish the fluids they've lost via perspiration.</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 2:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If the person is feeling unwell, you can control their fever by giving them the recommended dose of paracetamol, if local regulations permit.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• You can also sponge the person with lukewarm water, as long as this does not upset them.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Do not use cold water to sponge the person as this may cause the person discomfort and stop their body from releasing the heat.</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 3:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Continue to monitor the person's conditions.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Be aware of any additional signs and symptoms that occur.</Text>
                                        </View>
                                        <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12,  }}>
                                            <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>OVERDOSE</Text>
                                            <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}You may be aware of the person's usage of opioids, either legally or illegally. 
                                                    Empty bottles or blister packs of medications, syringes, needles, or a spoon ready for injection close to the individual are indicators that someone may have overdosed on opioids.</Text>
        
                                            <View style={{margin: 4}}>
                                                <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                                    <Image style={styles.imageStyle} source={images.overdose}  />
                                                </View>
                                            </View>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 1:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If the person is not breathing or their breathing is abnormal and you suspect they are experiencing an opioid overdose.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Begin cardiopulmonary resuscitation (CPR) immediately by starting with 2 to 5 rescue breathes if possible and willing.</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 2:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Ask bystanders to access EMS, or if you are alone, access EMS yourself. Activate the speaker function If using a phone.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Ask a bystander to bring naloxone as quickly as possible. If you are alone, and naloxone is in the immediate area, you can leave the person to quickly get it.</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 3:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• As soon as naloxone is available, administer the naloxone according to the guidance provided in your local jurisdiction. Only pausing CPR if it is absolutely necessary.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Continue CPR, with rescue breaths if possible until:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>{'\t'}{'\t'}- he person shows signs of recovery such as signs of life (opening their eyes, speaking, or moving purposefully)</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>{'\t'}{'\t'}- starts to breathe normally</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>{'\t'}{'\t'}{'\t'}{'\t'}(/) access EMERGENCY MEDICAL SERVICES </Text>
                                        </View>
                                        <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12,  }}>
                                            <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>INFECTION</Text>
                                            <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}An infection occurs when germs such as bacteria enters a wound and grows within the damaged tissues of a wound.</Text>
        
                                            <View style={{margin: 4}}>
                                                <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                                    <Image style={styles.imageStyle} source={images.infection}  />
                                                </View>
                                            </View>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 1:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If a wound is infected, do not cover it.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Call a medical help immediately.</Text>
                                            
                                        </View>
                                        <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12,  }}>
                                            <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>SEIZURE</Text>
                                            <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}Seizure includes: loss of responsiveness, sudden collapse, stiffness. A seizure may also be the result of a head injury, disease, infection, poisoning or fever.</Text>
        
                                            <View style={{margin: 4}}>
                                                <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                                    <Image style={styles.imageStyle} source={images.seizure}  />
                                                </View>
                                            </View>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 1:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>{'\t'}If you witness someone experiencing an active seizure... Move any furniture or anything that are close by that could damage them to keep them safe. Unless the person is in imminent danger such as from incoming traffic avoid relocating them. To shield the person's head, place a cushion or sweater underneath them. Take off their spectacles if they are wearing them. Any neck-restricting clothes should be loosened.</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 2:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Do not attempt to restrain the person, or force anything between the person's teeth.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Ensure to protect the person's dignity. Move away any bystanders, or cover any signs that may be embarrassing for the person when they wake up.</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 3:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If a family member or caregiver is present, ask if the person has any anti-seizure medication.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If you are comfortable, assist the caregiver in administering the medication.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>{'\t'}{'\t'}(/) Access EMERGENCY MEDICAL SERVICES.</Text>
                                        </View>
                                        <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12,  }}>
                                            <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>POISONING</Text>
                                            <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}Poisoning is when a person is exposed to a substance that can damage their health or endanger their life. </Text>
        
                                            <View style={{margin: 4}}>
                                                <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                                    <Image style={styles.imageStyle} source={images.poisoning}  />
                                                </View>
                                            </View>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 1: Try to identify:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• the poisonous substance</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• the amount the person was exposed to</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• when or how long the person was exposed to it</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 2:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Only touch the packaging of poisonous substances if it is safe to do so.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If you suspect it is a toxic substance, you may need to wear protective equipment such as a mask or gloves.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If it is not safe to touch the packaging, wait for EMERGENCY MEDICAL SERVICES (EMS).</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 3:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Help the person into a position of comfort on their left side if possible.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Monitor them for any change in their breathing or level of response.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Gather any bottles, packages or containers with labels and any other information about the poison to give to the EMERGENCY MEDICAL SERVICES.</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>If the person is unresponsive: </Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Open their Airway</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Place one hand on their forehead and your other hand under their chin.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Gently tilt their head back until their mouth falls open</Text>
                                        </View>
                                        <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12,  }}>
                                            <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>SORE THROAT</Text>
                                            <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}Dry, itchy pain in the throat that occurs during swallowing is called a sore throat. 
                                                A cold or another bacterial or viral illness are among the many ailments that might cause it.
                                                In most cases, a sore throat can be treated at home. But where the patient should seek medical attention is if they have a really painful throat, which could cause the airway to swell. </Text>
        
                                            <View style={{margin: 4}}>
                                                <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                                    <Image style={styles.imageStyle} source={images.sorethroat}  />
                                                </View>
                                            </View>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 1:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Advise the person to take the recommended dose of paracetamol to relieve their pain.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Consider advising the person to take medicated lozenges or mouth spray to soothe their throat.</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 2:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Encourage the person to drink lots of water in small amounts.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• A hot drink may relieve their pain.</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 3:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If a family member or caregiver is present, ask if the person has any anti-seizure medication.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If you are comfortable, assist the caregiver in administering the medication.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>{'\t'}{'\t'}(/) Access EMERGENCY MEDICAL SERVICES.</Text>
                                        </View>
                                        <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12,  }}>
                                            <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>HEADACHE</Text>
                                            <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}Pain in the head A common condition called a headache can cause a person to feel tight or throbbing in their head, either mildly or painfully. In addition to headaches, dizziness or pain behind the eyes might also occur. A migraine is a type of frequent headache.</Text>
        
                                            <View style={{margin: 4}}>
                                                <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                                    <Image style={styles.imageStyle} source={images.headache}  />
                                                </View>
                                            </View>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 1:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Minimize any distractions or bright light that can aggravate the headache.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Advise the person to:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>{'\t'}{'\t'}take 1000mg of paracetamol, if local regulations permit.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>{'\t'}{'\t'}rest in a dark quiet room</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>{'\t'}{'\t'}put an icepack or cold compress on their head or neck</Text>
                                        </View>
                                    </>
                                : <></>
                                }
                                {topic == 'BREATHING PROBLEMS' ?
                                    <>
                                        <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12,  }}>
                                            <Text style={{fontSize: 16, color: colors.white,  }}>Next, check for Breathing</Text>
                                            <Text style={{fontSize: 16, color: colors.white,  }}>While keeping their airway open, LOOK, LISTEN and FEEL for normal breathing for up to 10 seconds</Text>
                                            <Text style={{fontSize: 16, color: colors.white,  }}>LOOK for chest or abdominal movement, LISTEN for breathing sounds, FEEL for air on your cheek.</Text>
                                            <Text style={{fontSize: 16, color: colors.white,  }}>{'\t'}(/) Access immediately the EMERGENCY MEDICAL SERVICES (EMS). </Text>
                                        </View>
                                        <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12,  }}>
                                            <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>ASTHMA</Text>
                                            <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}A chronic lung condition that affects people of all ages is asthma. Breathing becomes more difficult due to inflammation and tightness in the muscles surrounding the airways.</Text>
        
                                            <View style={{margin: 4}}>
                                                <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                                    <Image style={styles.imageStyle} source={images.asthma}  />
                                                </View>
                                            </View>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 1:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Help the person into a comfortable position and reassure them. If available, help them use their inhaler and loosen any tight clothing. If the person uses a spacer device, help them to fit the device to their inhaler as this may help the person breathe in their medication more effectively Spacers are especially useful for young children but may be used by adults too.</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 2:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If the person becomes unresponsive, open their airway and check for breathing. If the person is near to something that may be causing the attack such as a dusty environment, help them to move away from the trigger. If you are trained and have access to supplementary oxygen is available. Give it to the person as needed.</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 3:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Stay with the person and continue to observe them. Keep them calm and comfortable until the attack is over. Depending on their inhaler prescription, they may use their inhaler again before medical help arrives.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>{'\t'}(/) Access EMERGENCY MEDICAL SERVICES.</Text>
                                        </View>
                                        <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12,  }}>
                                            <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>CHOKING</Text>
                                            <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}Choking is when the air way is partially or completely blocked by a foreign body like food, objects, and fluids.</Text>
        
                                            <View style={{margin: 4}}>
                                                <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                                    <Image style={styles.imageStyle} source={images.fever}  />
                                                </View>
                                            </View>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 1:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If an adult or child is mildly choking. First encourage them to cough to clear the blockage.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Continue to monitor the person until they improve, as it could develop into a complete airway block.</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 2:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If the person becomes unresponsive, start cardiopulmonary resuscitation (CPR) for an adult or child who is unresponsive and has abnormal breathing.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If you see solid material in their airway, you can remove it with your fingers. Do not blindly sweep the mouth with your fingers</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>Give them up to five firm back blows:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>- Stand behind the person placing one hand on their chest for support</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>- Bend the person forward</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>- Using the heel of your other hand, give up to five sharp back blows between their shoulder blades 3</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>- After each back blow, check to see if their airway is clear</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>If the back blows are not successful, give them up to five abdominal thrusts.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>- Stand behind the person, wrap both your arms around their waist</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>- Make a fist and place it between the belly button and base of their ribs. Place your other hand on top of your fist. </Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>- Pull sharply inwards and upwards giving up to five abdominal thrusts, checking to see if their airway is clear after each one.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>{'\t'}(/) Access EMERGENCY MEDICAL SERVICES.</Text>
                                        </View>
                                    </>
                                : <></>
                                }
                                {topic == 'INJURIES AND TRAUMA' ?
                                    <>
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
                                        <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12,  }}>
                                            <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>BLISTER</Text>
                                            <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}A tiny vesicle on the skin, possibly from a burn or other lesion, that contains serum or wet material. any swelling akin to an air bubble in a paint layer.</Text>
        
                                            <View style={{margin: 4}}>
                                                <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                                    <Image style={styles.imageStyle} source={images.blister}  />
                                                </View>
                                            </View>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 1:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• clean the wound</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• cover it with a sterile dressing</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• reinforce the covering by taping if needed</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 2:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• For friction blisters that are intact but are causing serious discomfort.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Clean the skin over and around the blister with lukewarm water.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Use a standard sterile needle to puncture the blister twice along the lower edge of the blister.</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 3:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Gently push the fluid out of the blister until all the fluid has been removed.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Clean the skin over and around the blister again with running water.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Gently pat the skin surrounding the blister dry.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Cover the blister with a sterile dressing.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>{'\t'}(/) Access EMERGENCY MEDICAL SERVICES.</Text>
                                        </View>
                                        <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12,  }}>
                                            <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>SPINAL INJURY</Text>
                                            <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}Spinal injuries can result in permanent damage and diability such as loss of use of the arms or legs.</Text>
        
                                            <View style={{margin: 4}}>
                                                <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                                    <Image style={styles.imageStyle} source={images.spinalinjury}  />
                                                </View>
                                            </View>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 1:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If you suspect the person has a spinal injury, do not move them.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If the person has to be moved for safety reasons, ask another person to help you keep the person's head in line with their spine while moving the person.</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 2:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If the person is unresponsive and breathing normally with a suspected spinal injury.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Leave the person in the position you found them in.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Maintain an open airway using the head-tilt-chin-lift or jaw thrust man oeuvre.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Gently support their head in this position to prevent any movement while maintaining the persons open airway.</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 3:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>If you suspect the person has a pelvic fracture</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>Help the person to lie down on their back with their legs straight and ask them to keep still.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>Place padding between their legs and then immobilise their legs by binding them together at their knees and feet. Do not 'rock' or rotate the pelvis as this can restart or worsen bleeding.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>{'\t'}(/) Access EMERGENCY MEDICAL SERVICES.</Text>
                                        </View>
                                        <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12,  }}>
                                            <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>HEAD INJURY</Text>
                                            <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}One of the leading causes of adult disability and mortality is head trauma. The injury may be as minor as a scratch, bruise, or bump on the head, or it may be moderate to severe because of internal bleeding, brain damage, shattered skull bones, deep cuts or open wounds, or concussions.</Text>
        
                                            <View style={{margin: 4}}>
                                                <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                                    <Image style={styles.imageStyle} source={images.fever}  />
                                                </View>
                                            </View>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 1:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Remove the person from their activity and ask them to rest.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Monitor the person for signs of a concussion, and for changes in their level of response and breathing.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Continue to monitor as signs of concussions can develop over several hours or days.</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 2:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If you suspect a severe head injury, access EMERGENCY MEDICAL SERVICES. (EMS).</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Reassure the person and encourage them to keep their head and neck as still as possible.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If the person is lying down, you may help keep their head as still as possible with your hands or knees.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Continue to monitor the person's level of response and breathing until EMS arrives.</Text>
                                        </View>
                                        <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12,  }}>
                                            <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>SPRAINS AND STRAINS</Text>
                                            <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}Sprain and Strains are injuries to alignments, tendons or muscle. A fracture is a break, chip, or crack in a bone. When a bone that meets at joint is out of its normal position this is called a dislocation. </Text>
        
                                            <View style={{margin: 4}}>
                                                <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                                    <Image style={styles.imageStyle} source={images.strain}  />
                                                </View>
                                            </View>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 1:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>Help the person to keep the injury still</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>Support the injury into a comfortable position to prevent any movement. If the person has an open fracture, make sure to stop the bleeding before stabilizing the limb.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>If possible and it does not cause the person more pain, keep the limb elevated that may help to prevent swelling.</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 2:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Apply ice or something cold for up to 20 minutes. Wrap the cold source in a cloth to avoid damage to the skin.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Do not cool for longer than 20 minutes as this may cause damage to the skin.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If the cooling is too painful for the person, stop the cooling. You can start cooling again when the skin's temperature has returned to normal.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• Ask the person to rest.</Text>
                                        </View>
                                    </>
                                : <></>
                                }
                                {topic == 'ENVIRONMENTAL ACCIDENT' ?
                                    <>
                                        <View style={{marginVertical: 12, width: Dimensions.get('window').width, paddingHorizontal : 12,  }}>
                                            <Text style={{fontSize: 24, color: colors.white, fontWeight: 'bold', }}>DROWNING</Text>
                                            <Text style={{fontSize: 16, color: colors.white, textAlign: 'justify', }}>{'\t'}Drowning is the submersion in and inhalation of water and is the third leading cause of unintentional injury-related death worldwide.</Text>
        
                                            <View style={{margin: 4}}>
                                                <View style={{ margin: 8, alignItems: 'center', marginVertical: 8 }}>
                                                    <Image style={styles.imageStyle} source={images.drowning}  />
                                                </View>
                                            </View>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 1:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>If a person is drowning, immediately Access EMERGENCY MEDICAL SERVICES or trained personnel such as lifeguards.</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>If it is safe for you, remove the person quickly and safely from the water.</Text>
                                            
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', }}>STEP 2:</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If the person is unresponsive and not breathing, begin cardiopulmonary resuscitation (CPR).</Text>
                                            <Text style={{fontSize: 16, color: colors.white, fontWeight: 'bold', paddingHorizontal: 8 }}>• If the person is breathing, recommend that they seek medical attention.</Text>
                                        </View>
                                    </>
                                : <></>
                                }
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </Modal>

            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={{}}>
                    <View style={{ padding : 12, }}>
                        <View style={{alignItems: 'center',  }}>
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
                            <View style={{height: Dimensions.get('window').height / 1.4, alignItems: 'center', justifyContent: 'space-evenly',  }}>
                                <TouchableOpacity onPress={() => { setModalVisible(!modalVisible); setTopic('MEDICAL CONDITIONS'); } }
                                    style={{ backgroundColor: colors.white, padding: 12, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center', elevation: 4, borderRadius: 50, marginVertical: 12}}>
                                    <Text style={{fontSize: 20, color: colors.greenTheme, fontWeight: 'bold',}}>MEDICAL CONDITIONS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { setModalVisible(!modalVisible); setTopic('BREATHING PROBLEMS'); } }
                                    style={{ backgroundColor: colors.white, padding: 12, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center', elevation: 4, borderRadius: 50, marginVertical: 12}}>
                                    <Text style={{fontSize: 20, color: colors.greenTheme, fontWeight: 'bold',}}>BREATHING PROBLEMS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { setModalVisible(!modalVisible); setTopic('INJURIES AND TRAUMA'); } }
                                    style={{ backgroundColor: colors.white, padding: 12, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center', elevation: 4, borderRadius: 50, marginVertical: 12}}>
                                    <Text style={{fontSize: 20, color: colors.greenTheme, fontWeight: 'bold',}}>INJURIES AND TRAUMA</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { setModalVisible(!modalVisible); setTopic('ENVIRONMENTAL ACCIDENT'); } }
                                    style={{ backgroundColor: colors.white, padding: 12, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center', elevation: 4, borderRadius: 50, marginVertical: 12}}>
                                    <Text style={{fontSize: 20, color: colors.greenTheme, fontWeight: 'bold',}}>ENVIRONMENTAL ACCIDENT</Text>
                                </TouchableOpacity>
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