import React, { useState } from 'react'
import { COLORS } from '../global/colors'
import { View, Text, StyleSheet } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"

const RoutineConfigSteps = ({ step }) => {
    const [isSelected, setSelection] = useState(false)

	return (
		<View style={styles.container}>
            {
                step === 1 && 
                <View style={styles.stepContainer}>
                    <View>
                        <Text style={styles.stepTitle}>Selección de días</Text>
                        <Text style={styles.stepSubtitle}>Seleccione los días de la semana que desea entrenar.</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <BouncyCheckbox text="Lunes" textStyle={{ color: '#ddd', fontSize: 25 }} size={35} fillColor={COLORS.tertiary} unfillColor="#FFFFFF" iconStyle={{ borderColor: "red" }} innerIconStyle={{ borderWidth: 2 }} onPress={(isChecked) => setSelection(isChecked)} />
                        <BouncyCheckbox text="Martes" textStyle={{ color: '#ddd', fontSize: 25 }} size={35} fillColor={COLORS.tertiary} unfillColor="#FFFFFF" iconStyle={{ borderColor: "red" }} innerIconStyle={{ borderWidth: 2 }} onPress={(isChecked) => setSelection(isChecked)} />
                        <BouncyCheckbox text="Miercoles" textStyle={{ color: '#ddd', fontSize: 25 }} size={35} fillColor={COLORS.tertiary} unfillColor="#FFFFFF" iconStyle={{ borderColor: "red" }} innerIconStyle={{ borderWidth: 2 }} onPress={(isChecked) => setSelection(isChecked)} />
                        <BouncyCheckbox text="Jueves" textStyle={{ color: '#ddd', fontSize: 25 }} size={35} fillColor={COLORS.tertiary} unfillColor="#FFFFFF" iconStyle={{ borderColor: "red" }} innerIconStyle={{ borderWidth: 2 }} onPress={(isChecked) => setSelection(isChecked)} />
                        <BouncyCheckbox text="Viernes" textStyle={{ color: '#ddd', fontSize: 25 }} size={35} fillColor={COLORS.tertiary} unfillColor="#FFFFFF" iconStyle={{ borderColor: "red" }} innerIconStyle={{ borderWidth: 2 }} onPress={(isChecked) => setSelection(isChecked)} />
                        <BouncyCheckbox text="Sabado" textStyle={{ color: '#ddd', fontSize: 25 }} size={35} fillColor={COLORS.tertiary} unfillColor="#FFFFFF" iconStyle={{ borderColor: "red" }} innerIconStyle={{ borderWidth: 2 }} onPress={(isChecked) => setSelection(isChecked)} />
                        <BouncyCheckbox text="Domingo" textStyle={{ color: '#ddd', fontSize: 25 }} size={35} fillColor={COLORS.tertiary} unfillColor="#FFFFFF" iconStyle={{ borderColor: "red" }} innerIconStyle={{ borderWidth: 2 }} onPress={(isChecked) => setSelection(isChecked)} />
                    </View>
                </View>
            }
            {
                step === 2 && 
                <View>
                    <Text style={styles.stepTitle}>Selección de músculos</Text>
                    <Text style={styles.stepSubtitle}>Seleccione los músculos que entrenará cada día.</Text>
                </View>
            }
            {
                step === 3 && 
                <View>
                    <Text style={styles.stepTitle}>Selección de ejercicios</Text>
                    <Text style={styles.stepSubtitle}>Seleccione los ejercicios que entrenará por grupo muscular.</Text>
                </View>
            }
		</View>
	)
}

export default RoutineConfigSteps

const styles = StyleSheet.create({
	container: {
        flexGrow: 1,
        paddingVertical: 40
    },
    stepContainer: {
        flexGrow: 1
    },
    stepTitle: {
        color: COLORS.tertiary,
        fontSize: 40,
        textAlign: 'center'
    },
    stepSubtitle: {
        marginTop: 10,
        color: '#ddd',
        fontSize: 20,
        alignSelf: 'center',
        textAlign: 'center',
        width: '80%',
    },
    checkboxContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 40,
        gap: 20
    },  
})