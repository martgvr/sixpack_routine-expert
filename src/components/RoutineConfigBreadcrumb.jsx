import React from "react"
import { COLORS } from "../global/colors"
import { View, Text, StyleSheet } from "react-native"

const activeStepText = { color: "#fff" }
const activeStepDesc = { color: "#2d85dd" }
const activeStepBadge = { backgroundColor: "#2d85dd", borderColor: "#2d85dd" }

const RoutineConfigBreadcrumb = ({ step }) => {
	return (
		<View style={styles.container}>
			<View>
				<View style={styles.configFirstStep}>
					<Text style={styles.configStepTextDone}>1</Text>
				</View>
				<Text style={styles.configStepDescriptionActive}>Selección de días</Text>
			</View>

			<View>
				<View style={[styles.configMiddleStep, step >= "2" && activeStepBadge]}>
					<Text style={[styles.configStepText, step >= "2" && activeStepText]}>2</Text>
				</View>
				<Text style={[styles.configStepDescriptionInactive, step >= "2" && activeStepDesc]}>Selección de músculos</Text>
			</View>

			<View>
				<View style={[styles.configLastStep, step == "3" && activeStepBadge]}>
					<Text style={[styles.configStepText, step == "3" && activeStepText]}>3</Text>
				</View>
				<Text style={[styles.configStepDescriptionInactive, step == "3" && activeStepDesc]}>Selección de ejercicios</Text>
			</View>
		</View>
	)
}

export default RoutineConfigBreadcrumb

const styles = StyleSheet.create({
	container: {
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
})
