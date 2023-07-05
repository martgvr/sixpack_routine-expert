import React from "react"
import { COLORS } from "../global/colors"
import { View, Text, StyleSheet } from "react-native"

import DateRoutineSetRow from "./DateRoutineSetRow"

const DateRoutineExercise = ({ name }) => {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.textColor}>{name}</Text>
			</View>

			<View>
				<DateRoutineSetRow index={1} weight={60} reps={10}/>
				<DateRoutineSetRow index={2} weight={80} reps={7}/>
				<DateRoutineSetRow index={3} weight={100} reps={4}/>
			</View>

			<View>
				<Text style={styles.addSetButton}>+ Agregar Set</Text>
			</View>
		</View>
	)
}

export default DateRoutineExercise

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
        gap: 10
    },
	textColor: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    addSetButton: {
        color: '#f78939'
    },
})