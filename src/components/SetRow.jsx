import React from "react"
import { styles } from "../style"
import { View, Text, Image } from "react-native"


const SetRow = ({ index, weight, reps }) => {
	return (
		<View style={styles.setRow}>
			<View>
				<Text style={styles.setRowIndex}>{index}</Text>
			</View>
			<View>
				<Text style={styles.setRowWeight}>{weight} kg</Text>
			</View>
			<View>
				<Text style={styles.setRowReps}>{reps} reps</Text>
			</View>
			<View>
				<Image style={styles.setRowOptions} source={require('../../assets/options.png')}/>
			</View>
		</View>
	)
}

export default SetRow
