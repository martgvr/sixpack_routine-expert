import { styles } from "./src/style"
import { SafeAreaView } from "react-native"
import { NativeRouter, Route, Routes } from "react-router-native"

import WeeksContainer from "./src/components/WeeksContainer"

export default function App() {
  return (
    <NativeRouter>
      <SafeAreaView style={styles.app}>
        <Routes>
          <Route exact path="/" element={<WeeksContainer />} />
        </Routes>
      </SafeAreaView>
    </NativeRouter>
  );
}