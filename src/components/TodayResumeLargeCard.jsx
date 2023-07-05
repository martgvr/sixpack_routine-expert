import React from "react"
import { COLORS } from "../global/colors"
import { View, Text, Image, StyleSheet } from "react-native"

const TodayResumeLargeCard = ({ icon, exercise, weight, reps }) => {
	return (
		<View style={styles.todayLargeCard}>
			<View style={styles.todayLargeCardLeft}>
				<Image style={styles.todayLargeCardIcon} source={icon}/>
				<View>
					<Text style={styles.todaySmallCardTitle}>Ejercicio</Text>
					<Text style={styles.todayLargeCardExercise}>{exercise}</Text>
				</View>
			</View>

			<View>
				<Text style={styles.todaySmallCardTitle}>Peso</Text>
				<Text style={styles.todayLargeCardExercise}>{weight}</Text>
			</View>
			
			<View>
				<Text style={styles.todaySmallCardTitle}>Reps</Text>
				<Text style={styles.todayLargeCardExercise}>{reps}</Text>
			</View>
		</View>
	)
}

export default TodayResumeLargeCard

const styles = StyleSheet.create({
	container: {

    },
	todayLargeCard: {
        shadowColor: '#000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: COLORS.primary,
        gap: 10,
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        padding: 20
    },
    todayLargeCardLeft: {
        gap: 30,
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%'
    },
    todayLargeCardIcon: {
        width: 35,
        height: 35
    },
    todayLargeCardExercise: {
        marginTop: 4,
        color: COLORS.tertiary,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
	todaySmallCardTitle: {
        color: '#9c9c9c',
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
})