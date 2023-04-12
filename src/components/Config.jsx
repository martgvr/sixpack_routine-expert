import React from "react"
import { styles } from "../style"
import ConfigSteps from "./ConfigSteps"
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, CheckBox } from "react-native"

const Config = () => {
	return (
		<SafeAreaView style={styles.config}>
			<StatusBar />

			<View style={styles.configContainer}>
				<View style={styles.configHeader}>
					<ConfigSteps step={"1"} />
				</View>

				<View style={styles.configContent}>
					<Text>Hola</Text>
				</View>

				<View style={styles.configFooter}>
					<TouchableOpacity style={styles.welcomeButtonFill}>
						<Text style={styles.welcomeButtonText}>Continuar</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default Config
