import React from "react"
import { styles } from "../style"
import { View, Text } from "react-native"

const TodaySmallCard = ({ cardTitle, data }) => {
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

export default TodaySmallCard