import React, { useState } from "react"
import { COLORS } from "../global/colors"
import { Link } from "react-router-native"
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native"

import RoutineConfigSteps from "../components/RoutineConfigSteps"
import RoutineConfigBreadcrumb from "../components/RoutineConfigBreadcrumb"

const RoutineConfig = () => {
	const [currentStep, setCurrentStep] = useState(1)

	const continuePressHandler = () => setCurrentStep(currentStep + 1)

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<RoutineConfigBreadcrumb step={currentStep} />
			</View>

			<View style={styles.content}>
				<RoutineConfigSteps step={currentStep} />
			</View>

			<View style={styles.footer}>
				{
					currentStep < 3 ?
					<TouchableOpacity style={styles.buttonFill} onPress={continuePressHandler} >
						<Text style={styles.buttonText}>Continuar</Text>
					</TouchableOpacity>
					:
					<Link to="/todayresume" style={styles.buttonFill}>
						<Text style={styles.buttonText}>Finalizar</Text>
					</Link>
				}
			</View>
		</SafeAreaView>
	)
}

export default RoutineConfig

const styles = StyleSheet.create({
	container: {
		height: "100%",
		backgroundColor: COLORS.secondary,
		justifyContent: "space-between",
		flexGrow: 1,
	},
	header: {
		backgroundColor: COLORS.primary,
		height: 80,
		justifyContent: "center",
		alignItems: "center",
	},
	configStepsContainer: {
		flexDirection: "row",
		gap: 16,
	},
	configFirstStep: {
		backgroundColor: COLORS.tertiary,
		paddingHorizontal: 30,
		paddingVertical: 6,
		borderBottomLeftRadius: 10,
		borderTopLeftRadius: 10,
		borderWidth: 2,
		borderColor: COLORS.tertiary,
		width: 100,
		justifyContent: "center",
		alignItems: "center",
	},
	configMiddleStep: {
		backgroundColor: "transparent",
		paddingHorizontal: 30,
		paddingVertical: 6,
		borderColor: "#666666",
		borderWidth: 2,
		width: 100,
		justifyContent: "center",
		alignItems: "center",
	},
	configLastStep: {
		backgroundColor: "transparent",
		paddingHorizontal: 30,
		paddingVertical: 6,
		borderBottomRightRadius: 10,
		borderTopRightRadius: 10,
		borderWidth: 2,
		borderColor: "#666666",
		width: 100,
		justifyContent: "center",
		alignItems: "center",
	},
	configStepText: {
		color: "#666",
		fontSize: 12,
		fontWeight: "bold",
	},
	configStepTextDone: {
		color: "#fff",
		fontSize: 12,
		fontWeight: "bold",
	},
	configStepDescriptionInactive: {
		textAlign: "center",
		marginTop: 6,
		color: "#aaa",
		fontSize: 11,
	},
	configStepDescriptionActive: {
		textAlign: "center",
		marginTop: 6,
		color: COLORS.tertiary,
		fontSize: 11,
	},

	// CONTENT
	content: {
		flexGrow: 1,
	},

	// CONFIG STEP
	configStep: {
		flexGrow: 1,
		paddingVertical: 40,
	},
	configStepContainer: {
		flexGrow: 1,
	},
	configStepTitle: {
		color: COLORS.tertiary,
		fontSize: 40,
		textAlign: "center",
	},
	configStepSubtitle: {
		marginTop: 10,
		color: "#ddd",
		fontSize: 20,
		alignSelf: "center",
		textAlign: "center",
		width: "80%",
	},
	checkboxContainer: {
		flexGrow: 1,
		justifyContent: "center",
		paddingHorizontal: 40,
		gap: 20,
	},

    // FOOTER
	footer: {
		height: 80,
		justifyContent: "flex-start",
		alignItems: "center",
	},
    buttonFill: {
        elevation: 3,
        backgroundColor: COLORS.tertiary,
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 26
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
})
