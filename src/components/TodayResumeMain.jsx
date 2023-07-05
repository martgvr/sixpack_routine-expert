import React from "react"
import { COLORS } from "../global/colors"
import { View, Text, StyleSheet } from "react-native"

import TodayResumeSmallCard from "./TodayResumeSmallCard"
import TodayResumeLargeCard from "./TodayResumeLargeCard"

const TodayResumeMain = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>General</Text>

			<View style={styles.smallCardsContainer}>
				<TodayResumeSmallCard cardTitle={"Musculos"} data={["Pecho", "Hombro", "Triceps"]} />
				<TodayResumeSmallCard cardTitle={"Ejercicios"} data={"12"} />
				<TodayResumeSmallCard cardTitle={"Sets"} data={"36"} />
			</View>

			<Text style={styles.title}>Básicos</Text>

			<View style={styles.largeCardsContainer}>
				<TodayResumeLargeCard exercise={'Press banca'} weight={'125'} reps={'1'} icon={require('../../assets/deadlift.png')} />
				<TodayResumeLargeCard exercise={'Sentadilla'} weight={'160'} reps={'1'} icon={require('../../assets/backsquat.png')} />
				<TodayResumeLargeCard exercise={'Peso muerto'} weight={'190'} reps={'1'} icon={require('../../assets/deadlift.png')} />
			</View>
		</View>
	)
}

export default TodayResumeMain

const styles = StyleSheet.create({
	container: {
        flexGrow: 1,
        padding: 20
    },
	title: {
        color: '#9c9c9c',
        fontSize: 16,
        marginBottom: 20
    },
	smallCardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20
    },
	largeCardsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 20
    },
})