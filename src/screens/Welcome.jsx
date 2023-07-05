import React from "react"
import { COLORS } from "../global/colors"
import { Link } from "react-router-native"
import Svg, { Path } from "react-native-svg"
import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native"

const Welcome = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topContainer}>
				<Text style={styles.topContainerTitle}>Bienvenido!</Text>
				<Text style={styles.topContainerSubtitle}>Sixpack Routine Expert será tu asistente de rutinas de entrenamiento, y te guiará de forma intuitiva a través de tus semanas.</Text>
			</View>

			<View style={styles.wavesDivider}>
				<Svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<Path
						fill={"#232326"}
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
					></Path>
				</Svg>
			</View>

			<View style={styles.bottomContainer}>
				<View>
					<Text style={styles.bottomContainerText}>Haga click en comenzar para iniciar el asistente</Text>

					<Link to="/routineconfig" style={styles.bottomContainerButtonFill}>
                        <Text style={styles.bottomContainerButtonText}>Comenzar</Text>
                    </Link>
				</View>

				<View>
					<Image style={styles.bottomContainerLogoImage} source={require("../../assets/logo4.png")} />
				</View>
			</View>
		</SafeAreaView>
	)
}

export default Welcome

const styles = StyleSheet.create({
	// CONTAINER
	container: {
		height: "100%",
	},

	// TOP
	topContainer: {
		backgroundColor: COLORS.primary,
		height: "40%",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 80,
	},
	topContainerTitle: {
		color: COLORS.tertiary,
		fontSize: 60,
	},
	topContainerSubtitle: {
		color: "#eee",
		width: 300,
		textAlign: "center",
		lineHeight: 25,
	},
	wavesDivider: {
		height: 80,
		width: "100%",
		backgroundColor: COLORS.secondary,
	},

	// BOTTOM
	bottomContainer: {
		backgroundColor: COLORS.secondary,
		flexGrow: 1,
		paddingVertical: 80,
		justifyContent: "space-between",
		alignItems: "center",
	},
	bottomContainerText: {
		color: "#ddd",
		fontWeight: "bold",
		marginBottom: 40,
		textAlign: "center",
	},
	bottomContainerButtonFill: {
		elevation: 3,
		backgroundColor: COLORS.tertiary,
		borderRadius: 10,
		paddingVertical: 16,
		paddingHorizontal: 26,
	},
	bottomContainerButtonText: {
        fontSize: 18,
		color: "#fff",
		fontWeight: "bold",
		alignSelf: "center",
		textTransform: "uppercase",
	},
	bottomContainerLogoImage: {
        marginTop: 90,
		height: 50,
		aspectRatio: 912 / 367,
	},
})
