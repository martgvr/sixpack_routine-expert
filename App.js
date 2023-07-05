// import { styles } from "./src/style"
import { SafeAreaView, StyleSheet, StatusBar } from "react-native"
import { NativeRouter, Route, Routes } from "react-router-native"

import { useEffect, useState } from "react"
import { getData } from "./src/services/database.service"

// import ExerciseContainer from "./src/components/ExerciseContainer"
// import TodayContainer from "./src/components/TodayContainer"
// import Config from "./src/components/Config"
// import Welcome from "./src/components/Welcome"

import Welcome from "./src/screens/Welcome"
import RoutineConfig from "./src/screens/RoutineConfig"

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Routes>
          <Route exact path="/" element={<RoutineConfig />} />
        </Routes>
      </SafeAreaView>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  }
})