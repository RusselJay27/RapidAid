import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity, Image, ScrollView, Modal, } from 'react-native';

import VideoPlayer from 'react-native-video-player'

import colors from '~/assets/colors';
import images from '~/assets/images';
import videos from '~/assets/videos';

import IconII from 'react-native-vector-icons/Ionicons';
import IconFA6 from 'react-native-vector-icons/FontAwesome6';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';

const data = [
    {
        "question": "Using two fingers perform compression in the _____ of the infant\'s chest.",
        "answer": "Center",
        "choices": ["Center","Side","Lower Chest"],
    },
    {
        "question": "What should be done first to treat a burn?",
        "answer": "Cleaning the burned skin",
        "choices": ["Dressing the burned skin","Cleaning the burned skin","Just ignore it"],
    },
    {
        "question": "Which of the following is not belong to the wound\'s treatment equipment?",
        "answer": "Knife",
        "choices": ["Bulak","Betadine","Gauze pads","Knife"],
    },
    {
        "question": "Are sensitivities to substances called?",
        "answer": "allergic reaction",
        "choices": ["wounds","allergic reaction","strokes"],
    },
    {
        "question": "Include bruises, punctures and scratches.",
        "answer": "eye injuries",
        "choices": ["eye injuries","fractures","wounds"],
    },
    {
        "question": "It occurs when something blocks blood supply to part of the brain or when a blood vessel in the brain bursts.",
        "answer": "strokes",
        "choices": ["heat exhaustion","strokes","burn"],
    },
    {
        "question": "Is the rise, usually brief, in water level of a stream to a peak from which the water level recedes at a slower rate.",
        "answer": "Flood",
        "choices": ["Flood","Storm Surge","Earthquake"],
    },
    {
        "question": "Is the abnormal in sea level along coastal areas resulting in very big waves?",
        "answer": "Storm Surge",
        "choices": ["Earthquake","Storm Surge","Flood"],
    },
    {
        "question": "Is a natural phenomenon that has become a part of the way of life of Filipino, bringing heavy precipitation and strong winds around a low-pressure area.",
        "answer": "Tropical Cyclone",
        "choices": ["Tropical Cyclone","Flood","Earthquake"],
    },
    {
        "question": "The body response to an excessive loss of water",
        "answer": "heat exhaustion",
        "choices": ["heat exhaustion","stroke","burn"],
    },
    {
        "question": "Which agency is responsible for coordinating disaster response and management in the Philippines?",
        "answer": "NDRRMC",
        "choices": ["PAGASA","MMDA","NDRRMC"],
    },
    {
        "question": "During typhoons, what government agency provides weather forecasts and warnings?",
        "answer": "PAGASA",
        "choices": ["MMDA","PAGASA","BFP"],
    },
    {
        "question": "In case of a flood, what emergency number should be contacted for immediate assistance?",
        "answer": "136",
        "choices": ["117","911","136"],
    },
    {
        "question": "Which organization plays a crucial role in providing relief and assistance during disasters?",
        "answer": "Red Cross",
        "choices": ["DOH","MMDA","Red Cross"],
    },
    {
        "question": "What does \"NDRRMC\" stand for?",
        "answer": "National Disaster Risk Reduction and Management Council",
        "choices": ["National Defense and Rescue Response Management Council","National Disaster Risk Reduction and Management Council","National Emergency and Disaster Relief Council"],
    },
    {
        "question": "During an earthquake, what is the recommended safety action to take cover under?",
        "answer": "Tables or desks",
        "choices": ["Windows","Door frames","Tables or desks"],
    },
    {
        "question": "In case of a volcanic eruption, which agency provides updates and advisories?",
        "answer": "PHIVOLCS",
        "choices": ["PDEA","NDRRMC","PHIVOLCS"],
    },
    {
        "question": "Which of the following is the correct hotline number of Bureau of Fire Protection?",
        "answer": "(02)-426-0219",
        "choices": ["(02)-426-0219","(02)- 922-9061","(02)-882-4150-77"],
    },
    {
        "question": "Which of the following is the correct hotline number of Metro Manila Development Authority?",
        "answer": "136",
        "choices": ["16211","136","(02)-922-9061"],
    },
]

const Screen = (props) => {
    const { navigation, route } = props;

    const [modalVisible, setModalVisible] = useState(false);
    const [result, setResult] = useState(false);

    const [select, setSelect] = useState('');
    
    const [number, setNumber] = useState(0);
    const [score, setScore] = useState(0);
    
    const [answer, setAnswer] = useState('');
    const [question, setQuestion] = useState('');
    const [choices, setChoices] = useState([]);
    
    useEffect(() => {
        loadQuestion(0);
    }, []);

    const loadQuestion = (num) =>
    {
        // const min = 0; 
        // const max = 9; 
        const randomNumber = num;// Math.floor(Math.random() * (max - min + 1)) + min; 
        // console.log(randomNumber);
        setQuestion(data[randomNumber].question);
        setAnswer(data[randomNumber].answer);
        setChoices(data[randomNumber].choices);
    }

    const btnNext = () =>
    {
        if (answer == select)
        {
            setScore(score + 1);
        }

        let num = number + 1;
        setNumber(num);
        if (number == 18)
        {
            setModalVisible(false);
            setResult(true);
            // navigation.goBack();
        }
        else
        {
            setModalVisible(false);
            loadQuestion(num); 
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            
            <Modal
                animationType="fade"
                transparent={true}
                visible={result}
                onRequestClose={() => {
                    // setModalVisible(!modalVisible);
                }}>
                <View style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center'}}>
                    
                    <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 20, 
                        width: Dimensions.get('window').width / 1.2, padding: 20}}>
                        {score > 14
                        ?
                        <>
                            <IconFA6 name="medal" size={Dimensions.get('window').width / 3} color="green" />
                            <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold', textAlign: 'center', paddingHorizontal: 8}}>Congratulations!!!{'\n'}You passed!</Text>
                            <TouchableOpacity onPress={() => { setResult(false); navigation.goBack(); }}
                            style={{backgroundColor: colors.greenTheme, padding: 12, borderRadius: 50, marginVertical: 8, width: '80%', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Back</Text>
                            </TouchableOpacity>
                        </>
                        :
                        <>
                            <IconFA5 name="times-circle" size={Dimensions.get('window').width / 3} color="red" />
                            <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold', textAlign: 'center', paddingHorizontal: 8}}>You failed, please try again!</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                                <TouchableOpacity onPress={() => { setResult(false); navigation.goBack(); }}
                                style={{backgroundColor: colors.greenTheme, padding: 12, borderRadius: 50, marginVertical: 8, width: '45%', alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Back</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { setResult(false); setNumber(0); setScore(0); loadQuestion(0); }}
                                style={{backgroundColor: colors.greenTheme, padding: 12, borderRadius: 50, marginVertical: 8, width: '45%', alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Repeat</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                        }
                    </View>
                </View>
            </Modal>
            
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // setModalVisible(!modalVisible);
                }}>
                <View style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center'}}>
                    
                    <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 20, width: Dimensions.get('window').width / 1.2, padding: 12}}>
                        {answer == select
                        ?
                        <>
                            <IconII name="checkmark-circle-outline" size={Dimensions.get('window').width / 3} color="green" />
                        </>
                        :
                        <>
                            <IconII name="close-circle-outline" size={Dimensions.get('window').width / 3} color="red" />
                        </>
                        }
                        <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold', textAlign: 'center'}}>{select}</Text>
                        <TouchableOpacity onPress={() => { btnNext(); }}
                        style={{backgroundColor: colors.greenTheme, padding: 12, borderRadius: 50, marginVertical: 8, width: '80%', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Next</Text>
                        </TouchableOpacity>
                    </View>
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

                        <View style={{ width: '100%', flex: 1, justifyContent: 'space-evenly',  }}>
                            
                            <View style={{ flex: 1, justifyContent: 'center', margin: 8}}>
                                <Text style={{fontSize: 24, color: 'white',  textAlign: 'center', fontWeight: 'bold'}}>{question}</Text>
                            </View>
                            <View style={{alignItems: 'center', flex: 1}}>
                                {
                                    choices.map((data, key) => {
                                        return (
                                            <View key={key}>
                                                <TouchableOpacity onPress={() => { setModalVisible(true); setSelect(data); }}
                                                    style={{backgroundColor: 'white', paddingVertical: 12, borderRadius: 50, width: Dimensions.get('window').width/1.2, alignItems: 'center', marginVertical: 8,
                                                    flexDirection: 'row', justifyContent: 'center', elevation: 4 }}>
                                                    <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>{data}</Text>
                                                </TouchableOpacity>
                                            </View>
                                            )
                                        })
                                }
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