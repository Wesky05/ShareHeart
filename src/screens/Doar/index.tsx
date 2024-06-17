import { View } from "react-native";
import { styles } from "./styles";
import { SemTela } from "../../components/SemTela";
import { Header } from "../../components/Header";



export function Doar({navigation}) {
    return(
        <View style={styles.container}>
            <Header
                navigation={navigation}
                cta="Essa funcionalidade ainda não está disponível."
            />
            <SemTela/>
        </View>
    );
}