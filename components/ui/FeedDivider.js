import { View } from "react-native";
import Colors from "../../constants/colors";

const FeedDivider = ({ children }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 18,
        paddingBottom: 15,
      }}
    >
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: Colors.accentLilac,
          marginRight: 16,
          marginLeft: 16,
          opacity: 0.5,
        }}
      />
    </View>
  );
};

export default FeedDivider;
