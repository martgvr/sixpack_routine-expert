import React from "react"
import { styles } from "../style"
import { View, Text } from "react-native"

import TodaySmallCard from "./TodaySmallCard"
import TodayLargeCard from "./TodayLargeCard"

const TodayMain = () => {
	return (
		<View style={styles.todayMain}>
			<Text style={styles.todayTitle}>General</Text>

			<View style={styles.todaySmallCardsContainer}>
				<TodaySmallCard cardTitle={"Musculos"} data={["Pecho", "Hombro", "Triceps"]} />
				<TodaySmallCard cardTitle={"Ejercicios"} data={"12"} />
				<TodaySmallCard cardTitle={"Sets"} data={"36"} />
			</View>

			<Text style={styles.todayTitle}>Básicos</Text>

			<View style={styles.todayLargeCardsContainer}>
				<TodayLargeCard exercise={'Sentadilla'} weight={'130'} reps={'1'} icon={require('../../assets/backsquat.png')} />
				<TodayLargeCard exercise={'Peso muerto'} weight={'180'} reps={'1'} icon={require('../../assets/deadlift.png')} />
			</View>
		</View>
	)
}

export default TodayMain
