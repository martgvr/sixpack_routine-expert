import React from "react"
import { styles } from "../style"
import { View, Text } from "react-native"

import ExerciseSetRow from "./ExerciseSetRow"

const Exercise = ({ name }) => {
	return (
		<View style={styles.exerciseCardSetsManager}>
			<View>
				<Text style={styles.headerText}>{name}</Text>
			</View>

			<View style={styles.exerciseCardSetsContainer}>
				<ExerciseSetRow index={1} weight={60} reps={10}/>
				<ExerciseSetRow index={2} weight={80} reps={7}/>
				<ExerciseSetRow index={3} weight={100} reps={4}/>
			</View>

			<View>
				<Text style={styles.exerciseCardAddSetButton}>+ Agregar Set</Text>
			</View>
		</View>
	)
}

export default Exercise
