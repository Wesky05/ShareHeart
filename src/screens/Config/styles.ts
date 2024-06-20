import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FAFAFA",
        paddingVertical: 60,
        paddingHorizontal: 20,
        justifyContent: "space-between"
    },
    header: {
        width: "100%",
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center"
    },
    headerText: {
        fontSize: 24,
        fontWeight: "500",
        color: "#1A1A1A",
        marginLeft: 32,
    },

    deleteAccountBtn: {
        fontSize: 16,
        fontWeight: "500",
        color: "#EB3D3D"
    }
});