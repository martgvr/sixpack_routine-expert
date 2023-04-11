import { styles } from "./src/style"
import { SafeAreaView } from "react-native"
import { NativeRouter, Route, Routes } from "react-router-native"

import { useEffect, useState } from "react"
import { getData } from "./src/services/database.service"

import ExerciseContainer from "./src/components/ExerciseContainer"
import TodayContainer from "./src/components/TodayContainer"
import ConfigContainer from "./src/components/ConfigContainer"

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  return (
    <NativeRouter>
      <SafeAreaView style={styles.app}>
        <Routes>
          <Route exact path="/" element={<ConfigContainer />} />
        </Routes>
      </SafeAreaView>
    </NativeRouter>
  );
}