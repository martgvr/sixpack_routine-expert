import React from "react"
import { styles } from "../style"
import { View, Text } from "react-native"

import SetRow from "./SetRow"

const Exercise = ({ name }) => {
	return (
		<View style={styles.exerciseCardSetsManager}>
			<View>
				<Text style={styles.headerText}>{name}</Text>
			</View>

			<View style={styles.exerciseCardSetsContainer}>
				<SetRow index={1} weight={60} reps={10}/>
				<SetRow index={2} weight={80} reps={7}/>
				<SetRow index={3} weight={100} reps={4}/>
			</View>

			<View>
				<Text style={styles.exerciseCardAddSetButton}>+ Agregar Set</Text>
			</View>
		</View>
	)
}

export default Exercise
