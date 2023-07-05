import React from "react"
import { COLORS } from "../global/colors"
import { View, Text, StyleSheet } from "react-native"

const TodayResumeHeader = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Resumen de hoy</Text>
		</View>
	)
}

export default TodayResumeHeader

const styles = StyleSheet.create({
	container: {
        backgroundColor: COLORS.primary,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
	text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
})