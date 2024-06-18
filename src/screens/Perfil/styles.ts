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

    profileImage: {
        justifyContent: "center",
        alignItems: "center",
    },
    profileName: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
    },
    profileEditField: {
        width: "100%",
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
    },

    profileNameText: {
        fontSize: 24,
        fontWeight: "500",
        color: "#1A1A1A",
    },
    profileType: {
        fontSize: 16,
        fontWeight: "400",
        color: "#EB6AAF",
    },

    profileNumbers: {
        width: "80%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    profileNumberText: {
        fontSize: 24,
        fontWeight: "500",
        color: "#1A1A1A",
    },
    profileNumberInfo: {
        fontSize: 16,
        fontWeight: "400",
        color: "#6A77EB",
    }
});