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
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
    },

    formContainer: {
        width: "100%",
        height: "80%",
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
    formContainerHeader: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    formTitle: {
        fontSize: 32,
        fontWeight: "600",
        color: "#EB6AAF",
    },
    
});