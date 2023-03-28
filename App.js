import { View } from "react-native"
import { NativeRouter, Route, Routes } from "react-router-native"

import LoginContainer from "./src/components/LoginContainer";

export default function App() {
  return (
    <NativeRouter>
      <View>
        <Routes>
          <Route exact path="/" element={<LoginContainer/>} />
          <Route exact path="/login" element={<LoginContainer/>} />
        </Routes>
      </View>
    </NativeRouter>
  );
}