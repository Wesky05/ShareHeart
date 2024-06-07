import { Image, KeyboardAvoidingView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import LogoImage from "../../assets/shareheart-logo.svg";
import { Svg } from "react-native-svg";


export function Login() {
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
              <LogoImage width={300}/>  
            </View>
            <View style={styles.formContainer}>
                <TextInput style={styles.formInput}
                    placeholder="CPF/CNPJ"
                    placeholderTextColor="#6A77EB"
                />
            </View>
            
        </View>
    );
}