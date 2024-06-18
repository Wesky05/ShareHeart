import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FAFAFA",
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    header: {
        width: "100%",
        paddingBottom: 30,
        justifyContent: "space-between",
        flexDirection: "row",
    },

    button: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#EEE",
    },

    profileInfo: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    profileImage: {
        justifyContent: "center",
        alignItems: "center",
    },
    profileEditField: {
        alignItems: "center",
        gap: 16,
    },
    profileEditBtn: {
        padding: 8,
        backgroundColor: "#EEE",
        borderRadius: 8,
    },
    profileEditBtnText: {
        color: "#444",
        fontSize: 16,
        fontWeight: "500"
    }
});