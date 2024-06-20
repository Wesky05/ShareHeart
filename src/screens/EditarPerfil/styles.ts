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
        justifyContent: "space-between",
        flexDirection: "row",
    },
    

    profileEditField: {
        width: "100%",
        alignItems: "center",
        gap: 16,
    },
    editBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
    },
    editText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#6A77EB",
    },

    formInput: {
        width: "100%",
        height: 50,
        backgroundColor: "#EEE",
        borderRadius: 25,
        paddingLeft: 20,
        color: "#1A1A1A",
    },
    editNameText: {
        fontSize: 16,
        fontWeight: "400",
        color: "#EB6AAF",
        marginLeft: 16.
    }
});