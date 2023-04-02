import React from "react"
import { View, Text } from "react-native"

import { styles } from "../style"
import ExerciseCard from "./ExerciseCard"

const ExerciseCardsContainer = () => {
	return (
		<View style={styles.exerciseCardsContainer}>
			<ExerciseCard title={'Pecho'}/>
			<ExerciseCard title={'Hombros'}/>
		</View>
	)
}

export default ExerciseCardsContainer
