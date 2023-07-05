import React from "react"
import { COLORS } from "../global/colors"
import { View, Text, Image, StyleSheet } from "react-native"

const DateRoutineSetRow = ({ index, weight, reps }) => {
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

export default DateRoutineSetRow

const styles = StyleSheet.create({
	container: {

    },
	setRow: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    setRowIndex: {
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
    setRowWeight: {
        color: 'white',
        fontSize: 16,
    },
    setRowReps: {
        color: 'white',
        fontSize: 16,
    },
    setRowOptions: {
        width: 14,
        height: 14
    },
})