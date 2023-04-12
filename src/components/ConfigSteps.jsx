import React from "react"
import { styles } from "../style"
import { View, Text } from "react-native"

const activeStepBadge = { backgroundColor: '#2d85dd', borderColor: '#2d85dd' }
const activeStepText = { color: '#fff' }
const activeStepDescription = { color: '#2d85dd' }

const ConfigSteps = ({ step }) => {
	return (
		<View style={styles.configStepsContainer}>
            <View>
                <View style={styles.configFirstStep}>
                    <Text style={styles.configStepTextDone}>1</Text>
                </View>
                <Text style={styles.configStepDescriptionActive}>Selección de días</Text>
            </View>

            <View>
                <View style={[styles.configMiddleStep, step >= '2' && activeStepBadge ]}>
                    <Text style={[styles.configStepText, step >= '2' && activeStepText ]}>2</Text>
                </View>
                <Text style={[styles.configStepDescriptionInactive, step >= '2' && activeStepDescription ]}>Selección de músculos</Text>
            </View>
            
            <View>
                <View style={[styles.configLastStep, step == '3' && activeStepBadge]}>
                    <Text style={[styles.configStepText, step == '3' && activeStepText]}>3</Text>
                </View>
                <Text style={[styles.configStepDescriptionInactive, step == '3' && activeStepDescription]}>Resumen</Text>
            </View>
		</View>
	)
}

export default ConfigSteps
