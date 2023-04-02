import React from "react"
import { View, Text } from "react-native"

import { styles } from "../style"
import Exercise from "./Exercise"

const ExerciseCard = ({ title }) => {
	return (
		<View style={styles.exerciseCard}>
			<View>
				<Text style={styles.exerciseMuscleName}>{title}</Text>
			</View>

            <Exercise />
		</View>
	)
}

export default ExerciseCard
