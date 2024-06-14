import { Dimensions, StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 5,
        paddingBottom: 110,
        position: "static",
    },
    postHeader: {
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    postProfile: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EB6AAF",
    },
    profileName: {
        fontSize: 16,
        fontWeight: "500",
        color: "#1A1A1A"
    },
    postLocation: {
        fontSize: 12,
        fontWeight: "400",
        color: "#1A1A1A"
    },
});