import { Text, View } from "react-native";
import { styles } from "./styles";



export function SemTela() {
    return(
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Text style={[styles.text, {fontSize: 68}]}>:(</Text>
                <Text style={styles.text}>Oops, ainda estamos trabalhando aqui...</Text>
            </View>
        </View>
    );
}