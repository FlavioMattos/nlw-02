import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles'

import studyImg from '../../../assets/images/study.png'
import studyBackgroundImage from '../../../assets/images/study-background.png'
import forwardArrow from '../../../assets/images/forwardArrow.png'

const OnboardingStudy = () => {
    const { navigate } = useNavigation();
    
    const handleGoForward = () => {
        navigate('OnboardingGiveClasses');
    };

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={studyBackgroundImage} style={styles.imageBlock}>
                <Image source={studyImg} style={styles.image} />
            </ImageBackground>
            <View style={styles.contentBlock}>
                <Text style={styles.contentNumber}>01.</Text>
                <Text style={styles.contentText}>Encontre vários professores para ensinar você</Text>
                <View style={styles.contentFooterGroup}>
                    <View style={styles.contentFooterDotGroup}>
                        <Text style={styles.contentFooterFirstDot}>.</Text>
                        <Text style={styles.contentFooterSecondDot}>.</Text>
                    </View>
                    <BorderlessButton onPress={handleGoForward}>
                        <Image source={forwardArrow} />
                    </BorderlessButton>
                </View>
            </View>
        </View>
    )
}

export default OnboardingStudy;