import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  leftContainer: {},
  middleContainer: {
    height: 60,
    justifyContent: "space-around",
    alignSelf: "center",
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  lastMessage: {
    fontSize: 16,
    color: "grey",
  },
  time: {
    fontSize: 16,
    color: "grey",
  },
});

export default styles;
