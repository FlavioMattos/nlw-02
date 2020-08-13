import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles'

import giveClassesImg from '../../../assets/images/give-classes.png'
import giveClassesBackgroundImage from '../../../assets/images/classes-background.png'
import forwardArrow from '../../../assets/images/forwardArrow.png'

const OnboardingGiveClasses = () => {
    const { navigate } = useNavigation();
    
    const handleGoForward = () => {
        navigate('Landing');
    };

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={giveClassesBackgroundImage} style={styles.imageBlock}>
                <Image source={giveClassesImg} style={styles.image} />
            </ImageBackground>
            <View style={styles.contentBlock}>
                <Text style={styles.contentNumber}>02.</Text>
                <Text style={styles.contentText}>Ou dê aulas sobre o que você mais conhece</Text>
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

export default OnboardingGiveClasses;