import React from "react"
import { styles } from "../style"
import { SafeAreaView, StatusBar } from "react-native"

import ExerciseCardsContainer from "./ExerciseCardsContainer"
import ExerciseHeader from "./ExerciseHeader"

const ExerciseContainer = () => {
	return (
		<SafeAreaView style={styles.exerciseContainer}>
			<StatusBar />
			<ExerciseHeader />
            <ExerciseCardsContainer />
		</SafeAreaView>
	)
}

export default ExerciseContainer
