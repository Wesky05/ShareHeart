import { StyleSheet } from "react-native";
import { Header } from "../../components/Header";


export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#EB6AAF",
        alignItems: "center"
    },

    map: {
        zIndex: -999,
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 100,
        right: 30,
        width: '100%',
        alignItems: 'flex-end'
    },
    markerImage: {
        width: 40,
        height: 40,
        borderRadius: 20
    },

    currentLocationBtn: {
        width: 50,
        height: 50,
        backgroundColor: '#EB6AAF',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25
    }
});