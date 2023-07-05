import { styles } from "../style"
import React, { useState } from "react"
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity } from "react-native"

import ConfigStep from "./ConfigStep"
import ConfigBreadcrumb from "./ConfigBreadcrumb"

const Config = () => {
	const [currentStep, setCurrentStep] = useState('1')

	return (
		<SafeAreaView style={styles.config}>
			<StatusBar />

			<View style={styles.configContainer}>
				<View style={styles.configHeader}>
					<ConfigBreadcrumb step={currentStep} />
				</View>

				<View style={styles.configContent}>
					<ConfigStep step={currentStep} />
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
