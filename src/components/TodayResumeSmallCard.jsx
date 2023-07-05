import React from "react"
import { COLORS } from "../global/colors"
import { View, Text, StyleSheet } from "react-native"

const TodayResumeSmallCard = ({ cardTitle, data }) => {
	return (
		<View style={styles.todaySmallCard}>
			<Text style={styles.todaySmallCardTitle}>{cardTitle}</Text>
            <View>
                {
                    typeof data === 'string' ?
                    <Text style={styles.todaySmallCardString}>{data}</Text>
                    :
                    data.map(item => <Text style={styles.todaySmallCardObject}>{item}</Text>)
                }
            </View>
		</View>
	)
}

export default TodayResumeSmallCard

const styles = StyleSheet.create({
	container: {

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
})