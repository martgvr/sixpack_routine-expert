import React from "react"
import { COLORS } from "../global/colors"
import { View, Text, Image, StyleSheet } from "react-native"

const TodayResumeLargeCard = ({ icon, exercise, weight, reps }) => {
	return (
		<View style={styles.container}>

			<View style={styles.leftSide}>
				<Image style={styles.icon} source={icon}/>
				<View>
					<Text style={styles.title}>Ejercicio</Text>
					<Text style={styles.exercise}>{exercise}</Text>
				</View>
			</View>

			<View>
				<Text style={styles.title}>Peso</Text>
				<Text style={styles.exercise}>{weight}</Text>
			</View>
			
			<View>
				<Text style={styles.title}>Reps</Text>
				<Text style={styles.exercise}>{reps}</Text>
			</View>
		</View>
	)
}

export default TodayResumeLargeCard

const styles = StyleSheet.create({
	container: {
        shadowColor: '#000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: COLORS.primary,
        gap: 10,
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        padding: 20
    },
    leftSide: {
        gap: 30,
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%'
    },
    icon: {
        width: 35,
        height: 35
    },
    title: {
        color: '#9c9c9c',
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    exercise: {
        marginTop: 4,
        color: COLORS.tertiary,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})