import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { APP_UPDATING_TYPE } from "../hooks/useOTAUpdate";
import LoadingContainer from "./common/loadingcontainer";

interface AppUpdateProps {
  isLoading: APP_UPDATING_TYPE;
  children: React.ReactChild;
}

const AppUpdate = ({ isLoading, children }: AppUpdateProps) => {
  const loadingBool = isLoading == "CHECKING" || isLoading == "UPDATING";
  return (
    <LoadingContainer
      isLoading={loadingBool}
      loadingText={
        isLoading == "CHECKING"
          ? "Checking for updates..."
          : "Applying updates..."
      }
    >
      {loadingBool ? <></> : children}
    </LoadingContainer>
  );
};

export default AppUpdate;

const styles = StyleSheet.create({
  container: {},
});
