import React from "react"
import { COLORS } from "../global/colors"
import { View, Text, StyleSheet } from "react-native"

const TodayResumeHeader = () => {
	return (
		<View style={styles.todayHeader}>
			<Text style={styles.headerText}>Resumen de hoy</Text>
		</View>
	)
}

export default TodayResumeHeader

const styles = StyleSheet.create({
	container: {

    },
	headerText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
	todayHeader: {
        backgroundColor: COLORS.primary,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
})