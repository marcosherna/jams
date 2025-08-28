import { View } from "react-native";
import XButton from "../../../components/XButton";

import MIcon from "@expo/vector-icons/MaterialIcons";

export default function LibraryScreen() {
  const handleClick = () => {
    // alert("Library button clicked!");
  };

  return (
    <View style={{ gap: 12, padding: 16 }}>
      <XButton
        title=""
        shape="circle"
        type="text"
        icon={<MIcon name="library-books" size={24} color="#7d7777ff" />}
        onClick={handleClick}
      />

      <XButton
        title="Login"
        onClick={handleClick}
        icon={<MIcon name="library-books" size={24} color="#fffbfbff" />}
      />
    </View>
  );
}
