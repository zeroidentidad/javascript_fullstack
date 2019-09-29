import {
    StyleSheet
} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5"
    },
    fab: {
        position: "absolute",
        margin: 6,
        right: 0,
        bottom: 0
    },
    card: {
        margin: 10
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    avatar: {
        width: 70,
        height: 70
    },
    gift: {
        width: 30,
        height: 30
    }    
});