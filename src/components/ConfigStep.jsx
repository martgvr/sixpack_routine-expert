import { styles, COLORS } from "../style"
import React, { useState } from 'react'
import { View, Text } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"

const ConfigStep = ({ step }) => {
    const [isSelected, setSelection] = useState(false)

	return (
		<View style={styles.configStep}>
            {
                step === '1' && 
                <View style={styles.configStepContainer}>
                    <View>
                        <Text style={styles.configStepTitle}>Selección de días</Text>
                        <Text style={styles.configStepSubtitle}>Seleccione los días de la semana que desea entrenar.</Text>
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
                step === '2' && 
                <View>
                    <Text style={styles.configStepTitle}>Selección de músculos</Text>
                    <Text style={styles.configStepSubtitle}>Seleccione los músculos que entrenará cada día.</Text>
                </View>
            }
            {
                step === '3' && 
                <View>
                    <Text style={styles.configStepTitle}>Selección de ejercicios</Text>
                    <Text style={styles.configStepSubtitle}>Seleccione los ejercicios que entrenará por grupo muscular.</Text>
                </View>
            }
		</View>
	)
}

export default ConfigStep
