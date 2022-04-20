import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppUpdate from "./src/components/appupdate";
import { useOTAUpdate } from "./src/hooks";

export default function App() {
  const { updatingState, checkOTAUpdate } = useOTAUpdate();

  React.useEffect(() => {
    setTimeout(() => checkOTAUpdate(), 2000);
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <AppUpdate isLoading={updatingState}>
          <View style={styles.contentContainer}>
            <Text>Expo Updates! </Text>
          </View>
        </AppUpdate>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: { alignItems: "center" },
});
