import React from "react"
import { COLORS } from "../global/colors"
import { View, Text, Image, StyleSheet } from "react-native"

import DateRoutineHeaderCalendar from "./DateRoutineHeaderCalendar"

const DateRoutineHeader = () => {
	return (
		<View style={styles.container}>
			<View style={styles.exerciseHeaderRow}>
				<Image source={{ uri: "https://icon-library.com/images/calendar-icon-white-png/calendar-icon-white-png-18.jpg" }} style={styles.headerIcon} />
				<Text style={styles.headerText}>Fecha seleccionada</Text>
				<Text style={styles.headerButton}>Hoy</Text>
			</View>

			<View style={styles.exerciseHeaderRow}>
				<DateRoutineHeaderCalendar />
			</View>
		</View>
	)
}

export default DateRoutineHeader

const styles = StyleSheet.create({
	container: {
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        justifyContent: 'space-between'
    },
    exerciseHeaderRow: {
        paddingHorizontal: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
    },
	headerText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    headerButton: {
        color: COLORS.tertiary,
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
	headerIcon: {
        width: 25,
        aspectRatio: 1
    },
})