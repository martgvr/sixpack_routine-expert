import React from "react"
import { styles } from "../style"
import { View, Text, Image, ScrollView } from "react-native"


const HeaderCalendar = () => {
	return (
		<View style={styles.headerCalendar}>
			<Image source={{ uri: "https://www.pngkit.com/png/full/50-508417_blue-arrow-down-png-download-white-arrow-down.png" }} style={styles.headerArrowLeft} />

            <ScrollView horizontal={true} style={styles.calendarDaysContainer}>

                <View style={styles.calendarDay}>
                    <Text style={styles.calendarDayName}>LUN</Text>
                    <Text style={styles.calendarDayNumber}>3</Text>
                </View>
                <View style={styles.calendarDay}>
                    <Text style={styles.calendarDayName}>MAR</Text>
                    <Text style={styles.calendarDayNumber}>4</Text>
                </View>
                <View style={styles.calendarDay}>
                    <Text style={styles.calendarDayName}>MIE</Text>
                    <Text style={styles.calendarDayNumberActive}>5</Text>
                </View>
                <View style={styles.calendarDay}>
                    <Text style={styles.calendarDayName}>JUE</Text>
                    <Text style={styles.calendarDayNumber}>6</Text>
                </View>
                <View style={styles.calendarDay}>
                    <Text style={styles.calendarDayName}>VIE</Text>
                    <Text style={styles.calendarDayNumber}>7</Text>
                </View>
                <View style={styles.calendarDay}>
                    <Text style={styles.calendarDayName}>SAB</Text>
                    <Text style={styles.calendarDayNumber}>8</Text>
                </View>
            </ScrollView>

            <Image source={{ uri: 'https://www.pngkit.com/png/full/50-508417_blue-arrow-down-png-download-white-arrow-down.png' }} style={styles.headerArrowRight}/>
		</View>
	)
}

export default HeaderCalendar
