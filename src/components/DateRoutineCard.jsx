import React from "react"
import { View, Text, StyleSheet } from "react-native"

import DateRoutineExercise from "./DateRoutineExercise"

const DateRoutineCard = ({ title }) => {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.exerciseMuscleName}>{title}</Text>
			</View>

            <DateRoutineExercise name={'Bench press'}/>
		</View>
	)
}

export default DateRoutineCard

const styles = StyleSheet.create({
	container: {
        justifyContent: 'space-between',
        gap: 10
    },
	exerciseMuscleName: {
        color: '#707070',
        fontSize: 24,
        fontWeight: 'bold'
    },
})