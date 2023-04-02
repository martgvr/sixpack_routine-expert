import React from "react"
import { styles } from "../style"
import { View, Text } from "react-native"

import Exercise from "./Exercise"

const ExerciseCard = ({ title }) => {
	return (
		<View style={styles.exerciseCard}>
			<View>
				<Text style={styles.exerciseMuscleName}>{title}</Text>
			</View>

            <Exercise name={'Bench press'}/>
		</View>
	)
}

export default ExerciseCard
