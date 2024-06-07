import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import LogoImage from "../../assets/shareheart-logo-blue.svg";
import { ArrowLeft } from "phosphor-react-native";



export function Cadastro({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
              <LogoImage width={200}/>  
            </View>
            <View style={styles.formContainer}>
                <View style={styles.formContainerHeader}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <ArrowLeft size={32} weight="regular" color="#6A77EB"/>
                    </TouchableOpacity>
                    <Text style={styles.formTitle}>Cadastre-se</Text>
                    <View style={{width: 32, height: 32}}></View>
                </View>
                
            </View>
        </View>
    );
}