import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Splash from '../pages/Splash'
import OnboardingStudy from '../pages/Onboarding/Study'
import OnboardingGiveClasses from '../pages/Onboarding/GiveClasses'
import Landing from '../pages/Landing'
import GiveClasses from '../pages/GiveClasses'
import StudyTabs from './StudyTabs'

const {Navigator, Screen} = createStackNavigator();

function AppStack() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Splash" component={Splash} />
                <Screen name="OnboardingStudy" component={OnboardingStudy} />
                <Screen name="OnboardingGiveClasses" component={OnboardingGiveClasses} />
                <Screen name="Landing" component={Landing} />
                <Screen name="GiveClasses" component={GiveClasses} />
                <Screen name="Study" component={StudyTabs} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;