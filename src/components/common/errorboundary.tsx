import React, { ErrorInfo, ReactChildren, ReactNode } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";

interface ErrorBoundaryProps {
  children: ReactChildren;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component {
  public state: ErrorBoundaryState;
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <ErrorBoundaryBody />
          <Button
            onPress={() => this.setState({ hasError: false })}
            title="Go"
            accessibilityLabel="btnlable"
          />
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

/************************* ErrorBoundaryBody ******************/

const ErrorBoundaryBody = (props: any) => {
  return (
    <View style={errorBodyStyles.container}>
      <View style={errorBodyStyles.imageContainer}>
        {/* <Image
          source={require("../../assets/images/error-message.png")}
          resizeMode="contain"
          style={{ flex: 1 }}
        /> */}
      </View>
      <Text style={errorBodyStyles.message}>
        Opps. Looks like you've encountered an error.
      </Text>
      <Text style={[errorBodyStyles.message, { fontSize: 12 }]}>
        Please try again later.
      </Text>
    </View>
  );
};
const errorBodyStyles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  imageContainer: {
    flex: 0.4,
    overflow: "hidden",
    alignItems: "center",
    position: "relative",
    margin: 10,
  },
  message: {
    fontSize: 15,
    opacity: 0.6,
    marginBottom: 3,
  },
});
