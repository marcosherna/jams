import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

type Service = "MaterialIcons" | "FontAwesome" | "Ionicons";

type FWIcons = keyof typeof FontAwesomeIcon.glyphMap;
type IIcons = keyof typeof Ionicons.glyphMap;
type MIcons = keyof typeof MaterialIcon.glyphMap;

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  type?: Service;
}

export default function Icon({
  name,
  size = 24,
  color = "#4c4848ff",
  type = "MaterialIcons",
}: IconProps) {
  switch (type) {
    case "FontAwesome":
      return (
        <FontAwesomeIcon name={name as FWIcons} size={size} color={color} />
      );
    case "Ionicons":
      return <Ionicons name={name as IIcons} size={size} color={color} />;
    case "MaterialIcons":
    default:
      return <MaterialIcon name={name as MIcons} size={size} color={color} />;
  }
}
