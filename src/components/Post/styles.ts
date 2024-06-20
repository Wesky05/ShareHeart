import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 5,
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
    postImageContainer: {
        width: "100%",
        maxHeight: 300,
    },
    postImage: {
        width: "100%",
        height: "100%"
    },
    postInteractions: {
        width: "100%",
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: "center",
        gap: 5,
        borderBottomColor: "#EEE",
        borderBottomWidth: 1,
    },
    postBottom: {
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    postProfileName: {
        fontSize: 14,
        fontWeight: "500",
        color: "#1A1A1A"
    },
    postSubtitle: {
        fontSize: 14,
        fontWeight: "300",
        color: "#1A1A1A"
    }
});