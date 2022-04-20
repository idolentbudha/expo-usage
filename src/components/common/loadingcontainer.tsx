import * as React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";

interface LoadingContainerProps {
  children: React.ReactChild;
  isLoading: boolean;
  loadingText?: string;
}

const LoadingContainer = ({
  children,
  isLoading,
  loadingText = "loading...",
}: LoadingContainerProps) => {
  return (
    <>
      {isLoading ? (
        <>
          <LoadingView loadingText={loadingText} />
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

const LoadingView = ({ loadingText }: { loadingText: string }) => {
  return (
    <View style={loadingViewstyles.container}>
      <ActivityIndicator size={"large"} color={"black"} />
      <Text>{loadingText}</Text>
    </View>
  );
};

export default LoadingContainer;

const styles = StyleSheet.create({
  container: {},
});

const loadingViewstyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
});
