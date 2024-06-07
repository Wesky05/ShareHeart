import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#EB6AAF",
        alignItems: "center"
    },

    logoContainer: {
        width: "100%",
        height: "60%",
        backgroundColor: "#6A77EB",
        justifyContent: "center",
        alignItems: "center",
    },

    formContainer: {
        width: "80%",
        height: "50%",
        backgroundColor: "#FAFAFA",
        position: "absolute",
        bottom: 30,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height:4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        alignItems: "center",
        justifyContent: "center"
    },
    formInput: {
        width: 250,
        height: 50,
        backgroundColor: "#EEE",
        borderRadius: 25,
        paddingLeft: 20, 
    },
});