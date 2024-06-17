import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: "7%",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 20,
        backgroundColor: "#FAFAFA",
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        shadowColor: "#9d9d9d80",
        shadowOffset: {
            width: 0,
            height: -1,
        },
        shadowRadius: 10,
        shadowOpacity: 0.5,
        elevation: 2,
        zIndex: 999,
    },
    headerTop: {
        width:"100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerBottom: {
        width:"100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    profile: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EB6AAF",
    },

    searchbarWrapper: {
        width: "58.14%",
        minWidth: 250,
        maxWidth: 400,
        height: 40,
        paddingHorizontal: 30,
        borderRadius: 20,
        position: "relative",
        backgroundColor: "#EEE",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
    },
    input: {
        width: "100%",
        color: "#1A1A1A",
        fontWeight: "400",
    },

    button: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#EEE",
    },


    textH1: {
        fontSize: 24,
        fontWeight: "600",
        color: "#1A1A1A",
    },
    textP: {
        fontSize: 16,
        fontWeight: "400",
        color: "#616161",
    },
}); 