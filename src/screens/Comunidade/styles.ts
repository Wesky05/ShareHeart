import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FAFAFA",
        alignItems: "center"
    },
    postsContainer: {
        minWidth: "100%",
        minHeight: "100%",
        paddingBottom: 90,
        paddingTop: 190,
    },
    addPostButton: {
        width: 50,
        height: 50,
        backgroundColor: "#EB6AAF",
        position: "absolute",
        bottom: 100,
        right: 10,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    }
});