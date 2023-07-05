import React from "react"
import { COLORS } from "../global/colors"
import { View, Text, StyleSheet } from "react-native"

const TodayResumeSmallCard = ({ cardTitle, data }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{cardTitle}</Text>
            <View>
                {
                    typeof data === 'string' ?
                    <Text style={styles.string}>{data}</Text>
                    :
                    data.map(item => <Text style={styles.group}>{item}</Text>)
                }
            </View>
		</View>
	)
}

export default TodayResumeSmallCard

const styles = StyleSheet.create({
    container: {
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
    title: {
        color: '#9c9c9c',
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    string: {
        color: COLORS.tertiary,
        fontSize: 26,
        fontWeight: 'bold',
    },
    group: {
        color: COLORS.tertiary,
        fontSize: 14,
        fontWeight: 'bold',
    },
})