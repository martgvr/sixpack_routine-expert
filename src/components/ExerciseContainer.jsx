import React from "react"
import { SafeAreaView, StatusBar } from "react-native"

import { styles } from "../style"
import Header from "./Header"
import ExerciseCardsContainer from "./ExerciseCardsContainer"

const ExerciseContainer = () => {
	return (
		<SafeAreaView style={styles.exerciseContainer}>
			<StatusBar />
			<Header />
            <ExerciseCardsContainer />
		</SafeAreaView>
	)
}

export default ExerciseContainer
