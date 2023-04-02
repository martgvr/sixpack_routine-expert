import React from "react"
import { styles } from "../style"
import { View, Text } from "react-native"

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
