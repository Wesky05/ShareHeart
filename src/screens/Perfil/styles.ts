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
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
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
    },

    chooseAccount: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 16
    },
    accountType: {
        fontSize: 18,
        fontWeight: "600",
        color: "#EB6AAF",
        opacity: 0.5,
    },
    activeAccountType: {
        fontSize: 18,
        fontWeight: "600",
        color: "#6A77EB",
        opacity: 1,
    },

    accountTypeLink: {
        padding: 10,
    },
    activeAccountTypeLink: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: "#6A77EB",
        borderRadius: 1,
    },

    profileInteractionsContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: 100,
    },
    profileInteractions: {
        alignItems: "center",
        gap: 24,
    },
    profileInteractionsText: {
        fontSize: 32,
        fontWeight: "500",
        color: "#6A77EB",
        textAlign: "center",
        maxWidth: 280
    }
});