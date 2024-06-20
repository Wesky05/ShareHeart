import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    buttonTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16
    },
    buttonTitle: {
        fontSize: 16,
        fontWeight: "400",
        color: "#1A1A1A",
    },
});