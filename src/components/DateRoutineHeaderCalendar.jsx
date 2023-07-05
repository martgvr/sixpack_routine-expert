import React from "react"
import { COLORS } from "../global/colors"
import { View, Text, Image, ScrollView, StyleSheet } from "react-native"

const DateRoutineHeaderCalendar = () => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: "https://www.pngkit.com/png/full/50-508417_blue-arrow-down-png-download-white-arrow-down.png" }} style={styles.arrowLeft} />

			<ScrollView horizontal={true} style={styles.daysContainer}>
				<View style={styles.dayContainer}>
					<Text style={styles.dayName}>LUN</Text>
					<Text style={styles.dayNumberActive}>3</Text>
				</View>
				<View style={styles.dayContainer}>
					<Text style={styles.dayName}>MAR</Text>
					<Text style={styles.dayNumber}>4</Text>
				</View>
				<View style={styles.dayContainer}>
					<Text style={styles.dayName}>MIE</Text>
					<Text style={styles.dayNumber}>5</Text>
				</View>
				<View style={styles.dayContainer}>
					<Text style={styles.dayName}>JUE</Text>
					<Text style={styles.dayNumber}>6</Text>
				</View>
				<View style={styles.dayContainer}>
					<Text style={styles.dayName}>VIE</Text>
					<Text style={styles.dayNumber}>7</Text>
				</View>
				<View style={styles.dayContainer}>
					<Text style={styles.dayName}>SAB</Text>
					<Text style={styles.dayNumber}>8</Text>
				</View>
			</ScrollView>

			<Image source={{ uri: "https://www.pngkit.com/png/full/50-508417_blue-arrow-down-png-download-white-arrow-down.png" }} style={styles.arrowRight} />
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
    daysContainer: {
        height: '100%',
        paddingHorizontal: 20
    },
    dayContainer: {
        width: 65,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    }, 
    dayName: {
        fontWeight: 'bold',
        color: '#9e9e9e'
    },
    dayNumber: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 26
    },
    dayNumberActive: {
        backgroundColor: COLORS.tertiary,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 26,
        width: 30,
        textAlign: 'center',
        borderRadius: 10
    },
    arrowLeft: {
        width: 12,
        aspectRatio: 1,
        transform: 'rotate(90deg)'
    },
    arrowRight: {
        width: 12,
        aspectRatio: 1,
        transform: 'rotate(-90deg)'
    },
})