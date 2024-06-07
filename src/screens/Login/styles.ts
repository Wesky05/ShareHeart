import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#6A77EB",
        alignItems: "center"
    },

    logoContainer: {
        width: "100%",
        height: "40%",
        backgroundColor: "#6A77EB",
        justifyContent: "center",
        alignItems: "center",
    },

    formContainer: {
        width: "100%",
        height: "60%",
        paddingVertical: 40,
        backgroundColor: "#FAFAFA",
        position: "absolute",
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height:4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 24,
    },
    formTitle: {
        fontSize: 32,
        fontWeight: "600",
        color: "#6A77EB",
    },

    inputContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 16,
    },
    formInput: {
        width: "80%",
        height: 50,
        backgroundColor: "#EEE",
        borderRadius: 25,
        paddingLeft: 20,
        color: "#1A1A1A",
    },

    link: {
        color: "#EB6AAF",
        position: "relative",
        left: 100,    
    },

    button: {
        width: "50%",
        height: 50,
        backgroundColor: "#6A77EB",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#FAFAFA"
    },

    text: {
        color: "#1A1A1A",
    },

    socialsContainer: {
        flexDirection: "row",
        width: "50%",
        justifyContent: "space-between",
    },
    socialBg: {
        width: 30,
        height: 30,
        backgroundColor: "#EB6AAF",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },

    singInContainer: {
        flexDirection: "row",
        gap: 2,
    },
    singIn: {
        color: "#6A77EB",
        fontWeight: "600",
    },
});