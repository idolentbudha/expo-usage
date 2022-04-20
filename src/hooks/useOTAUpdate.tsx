import * as React from "react";
import Updates from "expo-updates";
import { Text, View, StyleSheet, Alert } from "react-native";

interface useOTAUpdateProps {}

export type APP_UPDATING_TYPE = "CHECKING" | "UPDATING" | "IDLE";

const useOTAUpdate = () => {
  const [updatingState, setUpdatingState] =
    React.useState<APP_UPDATING_TYPE>("CHECKING"); // checking, updating

  const checkOTAUpdate = async () => {
    console.log("checking OTAUpdate");
    try {
      const update = await Updates.checkForUpdateAsync();
      update.isAvailable ? askUserForUpdate() : setUpdatingState("IDLE");
    } catch (e) {
      console.log("check,OTAUpdate ERROR", e);
      setUpdatingState("IDLE");
    }
  };

  //private functions
  const onlyFetchAppUpdates = async () => {
    await Updates.fetchUpdateAsync();
  };

  const askUserForUpdate = async () => {
    Alert.alert(
      "New Updates Available",
      "Would you like to update now ?",
      [
        {
          text: "UPDATE",
          onPress: async () => {
            setUpdatingState("UPDATING");
            try {
              await Updates.fetchUpdateAsync();
              await Updates.reloadAsync();
            } catch (e) {}
          },
        },
        // {
        //   text: 'Later',
        //   onPress: () => onlyFetchAppUpdates(),
        // },
      ],
      { cancelable: false }
    );
  };

  return { updatingState, setUpdatingState, checkOTAUpdate };
};

export default useOTAUpdate;
