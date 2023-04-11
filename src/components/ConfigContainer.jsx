import React from "react"
import { styles } from "../style"
import Svg, { Path } from 'react-native-svg'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from "react-native"

const ConfigContainer = () => {
	return (
		<SafeAreaView style={styles.configContainer}>
            <StatusBar />

            <View style={styles.welcomeTopContainer}>
                <View style={styles.welcomeTopTexts}>
                    <Text style={styles.welcomeTopTitle}>Bienvenido!</Text>
                    <Text style={styles.welcomeTopSubtitle}>Sixpack Routine Expert será tu asistente de rutinas de entrenamiento, y te guiará de forma intuitiva a través de tus semanas.</Text>
                </View>
                <Text style={styles.welcomeTopBeginText}>Haga click en comenzar para iniciar el asistente</Text>
            </View>

            <View style={styles.welcomeDivider}>
                <Svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <Path fill={'#232326'} d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></Path>
                </Svg>
            </View>

            <View style={styles.welcomeBottomContainer}>    

                <TouchableOpacity style={styles.welcomeBottomFill}>
                    <Text style={styles.welcomeBottomText}>Comenzar</Text>
                </TouchableOpacity>

                <View style={styles.welcomeMessageLogo}>
                    <Image style={styles.welcomeMessageLogoImage} source={require('../../assets/logo4.png')}/>
                </View>
            </View>

		</SafeAreaView>
	)
}

export default ConfigContainer
