import React from "react"
import { COLORS } from "../global/colors"
import { View, Text, Image, StyleSheet } from "react-native"

const DateRoutineSetRow = ({ index, weight, reps }) => {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.rowIndex}>{index}</Text>
			</View>
			<View>
				<Text style={styles.rowWeight}>{weight} kg</Text>
			</View>
			<View>
				<Text style={styles.rowReps}>{reps} reps</Text>
			</View>
			<View>
				<Image style={styles.rowOptions} source={require('../../assets/options.png')}/>
			</View>
		</View>
	)
}

export default DateRoutineSetRow

const styles = StyleSheet.create({
	container: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rowIndex: {
        color: '#c9c9c9',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderColor: '#4a4a4a',
        borderWidth: 1,
        borderRadius: 6,
        verticalAlign: 'middle'
    },
    rowWeight: {
        color: 'white',
        fontSize: 16,
    },
    rowReps: {
        color: 'white',
        fontSize: 16,
    },
    rowOptions: {
        width: 14,
        height: 14
    },
})