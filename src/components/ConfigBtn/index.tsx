import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { CaretRight, Lifebuoy } from "phosphor-react-native";


export function ConfigBtn({title}) {
    return(
        <TouchableOpacity style={styles.container} onPress={() => alert("Opção indisponível")}>
            <View style={styles.buttonTitleContainer}>
                <Text style={styles.buttonTitle}>{title}</Text>
            </View>
            <CaretRight
                color="#1A1A1A"
                size={18}
                weight="regular"
            />
        </TouchableOpacity>
    );
}