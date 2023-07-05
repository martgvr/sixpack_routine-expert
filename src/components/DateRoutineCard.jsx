import React from "react"
import { View, Text, StyleSheet } from "react-native"

import DateRoutineExercise from "./DateRoutineExercise"

const DateRoutineCard = ({ title }) => {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.muscleTitle}>{title}</Text>
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
	muscleTitle: {
        color: '#707070',
        fontSize: 24,
        fontWeight: 'bold'
    },
})