import React from 'react'
import { View, Image, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

import backgroundImage from '../../assets/images/splash-background.png'
import titleImg from '../../assets/images/title.png';

const Splash = () => {
    const { navigate } = useNavigation();
    
    const handleGoForward = () => {
        navigate('OnboardingStudy');
    };
    return (
        <TouchableWithoutFeedback onPress={handleGoForward}>
            <View style={styles.container}>
                <ImageBackground resizeMode="contain" source={backgroundImage} style={styles.content}>
                    <View>
                        <Image source={titleImg} />
                        <Text style={styles.titleText}>Sua plataforma de estudos online</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Splash