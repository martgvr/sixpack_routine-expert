import React from "react"
import { styles } from "../style"
import { SafeAreaView, StatusBar } from "react-native"

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
