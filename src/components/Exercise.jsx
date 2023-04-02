import React from "react"
import { View, Text } from "react-native"

import { styles } from "../style"

const Exercise = () => {
	return (
		<View style={styles.exerciseCardSetsManager}>
			<View>
				<Text style={styles.headerText}>Nombre del ejercicio</Text>
			</View>

			<View style={styles.exerciseCardSetsContainer}>
				<Text>Sets</Text>
			</View>

			<View>
				<Text style={styles.exerciseCardAddSetButton}>+ Agregar Set</Text>
			</View>
		</View>
	)
}

export default Exercise
