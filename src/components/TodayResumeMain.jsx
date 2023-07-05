import React from "react"
import { COLORS } from "../global/colors"
import { View, Text, StyleSheet } from "react-native"

import TodayResumeSmallCard from "./TodayResumeSmallCard"
import TodayResumeLargeCard from "./TodayResumeLargeCard"

const TodayResumeMain = () => {
	return (
		<View style={styles.todayMain}>
			<Text style={styles.todayTitle}>General</Text>

			<View style={styles.todaySmallCardsContainer}>
				<TodayResumeSmallCard cardTitle={"Musculos"} data={["Pecho", "Hombro", "Triceps"]} />
				<TodayResumeSmallCard cardTitle={"Ejercicios"} data={"12"} />
				<TodayResumeSmallCard cardTitle={"Sets"} data={"36"} />
			</View>

			<Text style={styles.todayTitle}>Básicos</Text>

			<View style={styles.todayLargeCardsContainer}>
				<TodayResumeLargeCard exercise={'Sentadilla'} weight={'130'} reps={'1'} icon={require('../../assets/backsquat.png')} />
				<TodayResumeLargeCard exercise={'Peso muerto'} weight={'180'} reps={'1'} icon={require('../../assets/deadlift.png')} />
			</View>
		</View>
	)
}

export default TodayResumeMain

const styles = StyleSheet.create({
	container: {

    },
	todayMain: {
        flexGrow: 1,
        padding: 20
    },
	todayTitle: {
        color: '#9c9c9c',
        fontSize: 16,
        marginBottom: 20
    },
	todaySmallCardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20
    },
    todaySmallCard: {
        backgroundColor: COLORS.primary,
        flexGrow: 1,
        aspectRatio: 1,
        width: '30%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        gap: 10,
        marginBottom: 20
    },
    todaySmallCardTitle: {
        color: '#9c9c9c',
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    todaySmallCardString: {
        color: COLORS.tertiary,
        fontSize: 26,
        fontWeight: 'bold',
    },
    todaySmallCardObject: {
        color: COLORS.tertiary,
        fontSize: 14,
        fontWeight: 'bold',
    },
	todayLargeCardsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 20
    },
})