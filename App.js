import { styles } from "./src/style"
import { SafeAreaView } from "react-native"
import { NativeRouter, Route, Routes } from "react-router-native"

import ExerciseContainer from "./src/components/ExerciseContainer"

export default function App() {
  return (
    <NativeRouter>
      <SafeAreaView style={styles.app}>
        <Routes>
          <Route exact path="/" element={<ExerciseContainer />} />
        </Routes>
      </SafeAreaView>
    </NativeRouter>
  );
}