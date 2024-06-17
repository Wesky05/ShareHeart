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
        paddingBottom: 30,
        justifyContent: "flex-start"
    },
    fields: {
        gap: 30,
        paddingBottom: 120,
    },
    photoField: {
        width: "100%",
        gap: 30,
    },
    fieldTextTitle: {
        fontSize: 32,
        fontWeight: "600",
        color: "#1A1A1A"
    },
    fieldTextSubtitle: {
        fontSize: 24,
        fontWeight: "600",
        color: "#EB6AAF",
    },
    photo: {
        width: "100%",
        maxWidth: 500,
        height: 230,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#9D9D9D",
        borderWidth: 1,
    },
    addImageButton: {
        width: 50,
        height: 50,
        backgroundColor: "#6A77EB",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },

    subtitleField: {
        width: "100%",
        gap: 30,
    },
    subtitle: {
        width: "100%",
    },
    subtitleInput: {
        width: "100%",
        padding: 20,
        fontSize: 16,
        fontWeight: "400",
        color: "#1A1A1A",
        borderColor: "#9D9D9D",
        borderWidth: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        textAlignVertical: "top",
    },

    publicarBtn: {
        position: "absolute",
        bottom: 30,
        right: 0,
        
        backgroundColor: "#EB6AAF",
        borderRadius: 25,

    },
    publicarBtnText: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        fontSize: 16,
        color: "#FAFAFA",
        fontWeight: "500",
        textAlign: "center",
    },
});