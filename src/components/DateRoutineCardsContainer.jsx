import React from "react"
import { View, StyleSheet } from "react-native"

import DateRoutineCard from "./DateRoutineCard"

const DateRoutineCardsContainer = () => {
	return (
		<View style={styles.container}>
			<DateRoutineCard title={'Pecho'}/>
			<DateRoutineCard title={'Hombros'}/>
		</View>
	)
}

export default DateRoutineCardsContainer

const styles = StyleSheet.create({
	container: {
        flexGrow: 1,
        paddingHorizontal: 10,
        paddingVertical: 30,
        gap: 30
    },
})