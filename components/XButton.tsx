import {
  View,
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from "react-native";

type Shape = "rounded" | "square" | "circle";
type TypeButton = "default" | "text";

interface XButtonProps {
  title: string;
  icon?: React.ReactNode;
  shape?: Shape;
  type?: TypeButton;
  onClick?: (event: GestureResponderEvent) => void;
}

export default function XButton({
  title,
  icon,
  onClick,
  shape = "rounded",
  type = "default",
}: XButtonProps) {
  const { button, pressableStyle, buttonText } = computableStyle(shape, type);

  return (
    <Pressable
      onPress={onClick}
      style={({ pressed }) => [
        styles.pressable,
        {
          borderRadius: button.borderRadius,
          ...pressableStyle(pressed),
        },
      ]}
    >
      <View style={button}>
        {icon ?? undefined}

        {/* {({ pressed }: { pressed: boolean }) => (
          <Text>{pressed ? "Pressed!" : "Press Me"}</Text>
        )} */}

        {shape === "rounded" ? (
          <Text style={buttonText}>{title}</Text>
        ) : undefined}
      </View>
    </Pressable>
  );
}

const computableStyle = (shape: Shape, type: TypeButton) => {
  const button: ViewStyle = {
    ...styles.button,
    borderRadius: shape === "circle" ? 50 : styles.button.borderRadius,
    backgroundColor:
      type === "text" ? "transparent" : styles.button.backgroundColor,
  };

  const buttonText: TextStyle = {
    ...styles.buttonText,
    color: type === "text" ? "#0000001a" : styles.buttonText.color,
  };

  const pressableStyle = (press: boolean): ViewStyle => {
    const style: ViewStyle = {
      opacity: press ? 0.5 : 1,
      transform: press ? [{ scale: 0.95 }] : [{ scale: 1 }],
      backgroundColor: press ? "#3700b3" : "#6200ee",
    };

    if (type === "text") {
      style.backgroundColor = press ? "#6200ee1a" : "transparent";
    }

    return style;
  };

  return { button, pressableStyle, buttonText };
};

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  button: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#6200ee",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
