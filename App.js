import { useEffect, useState } from "react"
import { getData } from "./src/services/database.service"
import { NativeRouter, Route, Routes } from "react-router-native"
import { SafeAreaView, StyleSheet, StatusBar } from "react-native"

import Welcome from "./src/screens/Welcome"
import DateRoutine from "./src/screens/DateRoutine"
import TodayResume from "./src/screens/TodayResume"
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
          <Route exact path="/" element={<DateRoutine />} />
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