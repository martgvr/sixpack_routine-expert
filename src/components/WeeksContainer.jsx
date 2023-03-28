import React from 'react'
import { Text, SafeAreaView, View, ScrollView, StatusBar } from 'react-native'

import { styles } from '../style'
import Header from './Header'
import MuscleWeekRow from './MuscleWeekRow'

const WeeksContainer = () => {
  return (
    <SafeAreaView style={styles.weeksContainer}>
      <StatusBar />
      <Header />

      <ScrollView horizontal={true} style={styles.weeksContainer__cardsContainer}>
        <View style={styles.weeksContainer__card} >
          <View style={styles.weeksContainer__cardTitle}>
            <Text style={styles.weeksContainer__cardTitleText}>Semana 1</Text>
          </View>
          
          <View style={styles.weeksContainer__cardMuscles}>
            <MuscleWeekRow text={'Chest'} icon={'https://i.ibb.co/9Gx6fXz/chest.png'} />
            <MuscleWeekRow text={'Shoulders'} icon={'https://i.ibb.co/tcy6FtJ/84885-shoulders-512x512.png'} />
            <MuscleWeekRow text={'Triceps'} icon={'https://i.ibb.co/zmPLFQ8/triceps.png'} />
          </View>
        </View>

        <View style={styles.weeksContainer__card} >
          <View style={styles.weeksContainer__cardTitle}>
            <Text style={styles.weeksContainer__cardTitleText}>Semana 2</Text>
          </View>
          
          <View style={styles.weeksContainer__cardMusclesEmpty}>
            <Text style={styles.weeksContainer__noMusclesCardText}>No hay musculos agregados</Text>
            <Text style={styles.weeksContainer__noMusclesCardText}>Presione + para agregar</Text>
          </View>
        </View>

        <View style={styles.weeksContainer__card} >
          <View style={styles.weeksContainer__cardTitle}>
            <Text style={styles.weeksContainer__cardTitleText}>Semana 3</Text>
          </View>
          
          <View style={styles.weeksContainer__cardMusclesEmpty}>
            <Text style={styles.weeksContainer__noMusclesCardText}>No hay musculos agregados</Text>
            <Text style={styles.weeksContainer__noMusclesCardText}>Presione + para agregar</Text>
          </View>
        </View>

        <View style={styles.weeksContainer__card} >
          <View style={styles.weeksContainer__cardTitle}>
            <Text style={styles.weeksContainer__cardTitleText}>Semana 4</Text>
          </View>
          
          <View style={styles.weeksContainer__cardMusclesEmpty}>
            <Text style={styles.weeksContainer__noMusclesCardText}>No hay musculos agregados</Text>
            <Text style={styles.weeksContainer__noMusclesCardText}>Presione + para agregar</Text>
          </View>
        </View>

      </ScrollView>

    </SafeAreaView>
  )
}

export default WeeksContainer