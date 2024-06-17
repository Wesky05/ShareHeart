import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ArrowLeft, Gear } from "phosphor-react-native";



export function Perfil({navigation}) {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <ArrowLeft size={32} weight="regular" color="#6A77EB"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                        <Gear
                            color="#444"
                            size={30}
                            weight="regular"
                        />
                    </TouchableOpacity>
            </View>
        </ScrollView>
    );
}