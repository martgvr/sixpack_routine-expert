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
				<View style={styles.firstStep}>
					<Text style={styles.stepTextDone}>1</Text>
				</View>
				<Text style={styles.stepDescriptionActive}>Selección de días</Text>
			</View>

			<View>
				<View style={[styles.middleStep, step >= "2" && activeStepBadge]}>
					<Text style={[styles.stepText, step >= "2" && activeStepText]}>2</Text>
				</View>
				<Text style={[styles.stepDescriptionInactive, step >= "2" && activeStepDesc]}>Selección de músculos</Text>
			</View>

			<View>
				<View style={[styles.lastStep, step == "3" && activeStepBadge]}>
					<Text style={[styles.stepText, step == "3" && activeStepText]}>3</Text>
				</View>
				<Text style={[styles.stepDescriptionInactive, step == "3" && activeStepDesc]}>Selección de ejercicios</Text>
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
	firstStep: {
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
	middleStep: {
		backgroundColor: "transparent",
		paddingHorizontal: 30,
		paddingVertical: 6,
		borderColor: "#666666",
		borderWidth: 2,
		width: 100,
		justifyContent: "center",
		alignItems: "center",
	},
	lastStep: {
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

	stepText: {
		color: "#666",
		fontSize: 12,
		fontWeight: "bold",
	},
	stepTextDone: {
		color: "#fff",
		fontSize: 12,
		fontWeight: "bold",
	},
	stepDescriptionInactive: {
		textAlign: "center",
		marginTop: 6,
		color: "#aaa",
		fontSize: 11,
	},
	stepDescriptionActive: {
		textAlign: "center",
		marginTop: 6,
		color: COLORS.tertiary,
		fontSize: 11,
	},
})
