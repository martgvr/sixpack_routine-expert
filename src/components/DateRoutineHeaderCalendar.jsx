import React from "react"
import { COLORS } from "../global/colors"
import { View, Text, Image, ScrollView, StyleSheet } from "react-native"

const DateRoutineHeaderCalendar = () => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: "https://www.pngkit.com/png/full/50-508417_blue-arrow-down-png-download-white-arrow-down.png" }} style={styles.headerArrowLeft} />

			<ScrollView horizontal={true} style={styles.exerciseCalendarDaysContainer}>
				<View style={styles.exerciseCalendarDay}>
					<Text style={styles.exerciseCalendarDayName}>LUN</Text>
					<Text style={styles.exerciseCalendarDayNumber}>3</Text>
				</View>
				<View style={styles.exerciseCalendarDay}>
					<Text style={styles.exerciseCalendarDayName}>MAR</Text>
					<Text style={styles.exerciseCalendarDayNumber}>4</Text>
				</View>
				<View style={styles.exerciseCalendarDay}>
					<Text style={styles.exerciseCalendarDayName}>MIE</Text>
					<Text style={styles.exerciseCalendarDayNumberActive}>5</Text>
				</View>
				<View style={styles.exerciseCalendarDay}>
					<Text style={styles.exerciseCalendarDayName}>JUE</Text>
					<Text style={styles.exerciseCalendarDayNumber}>6</Text>
				</View>
				<View style={styles.exerciseCalendarDay}>
					<Text style={styles.exerciseCalendarDayName}>VIE</Text>
					<Text style={styles.exerciseCalendarDayNumber}>7</Text>
				</View>
				<View style={styles.exerciseCalendarDay}>
					<Text style={styles.exerciseCalendarDayName}>SAB</Text>
					<Text style={styles.exerciseCalendarDayNumber}>8</Text>
				</View>
			</ScrollView>

			<Image source={{ uri: "https://www.pngkit.com/png/full/50-508417_blue-arrow-down-png-download-white-arrow-down.png" }} style={styles.headerArrowRight} />
		</View>
	)
}

export default DateRoutineHeaderCalendar

const styles = StyleSheet.create({
	container: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    exerciseCalendarDaysContainer: {
        height: '100%',
        paddingHorizontal: 20
    },
    exerciseCalendarDay: {
        width: 65,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    }, 
    exerciseCalendarDayName: {
        fontWeight: 'bold',
        color: '#9e9e9e'
    },
    exerciseCalendarDayNumber: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 26
    },
    exerciseCalendarDayNumberActive: {
        backgroundColor: COLORS.tertiary,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 26,
        width: 30,
        textAlign: 'center',
        borderRadius: 10
    },
    headerArrowLeft: {
        width: 12,
        aspectRatio: 1,
        transform: 'rotate(90deg)'
    },
    headerArrowRight: {
        width: 12,
        aspectRatio: 1,
        transform: 'rotate(-90deg)'
    },
})