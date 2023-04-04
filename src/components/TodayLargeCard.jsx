import React from "react"
import { styles } from "../style"
import { View, Text, Image } from "react-native"

const TodayLargeCard = ({ icon, exercise, weight, reps }) => {
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

export default TodayLargeCard
