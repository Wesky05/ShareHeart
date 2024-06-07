import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import LogoImage from "../../assets/shareheart-logo.svg";
import { AppleLogo, GoogleLogo, MetaLogo, MicrosoftOutlookLogo } from "phosphor-react-native";



export function Login({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
              <LogoImage width={300}/>  
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Login</Text>
                <View style={styles.inputContainer} >
                    <TextInput style={styles.formInput}
                        placeholder="CPF/CNPJ"
                        placeholderTextColor="#9D9D9D"
                        cursorColor="#EB6AAF"
                        keyboardType="number-pad"
                    />
                    <TextInput style={styles.formInput}
                        placeholder="Senha"
                        placeholderTextColor="#9D9D9D"
                        cursorColor="#EB6AAF"
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.link}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Ou entrar com</Text>
                <View style={styles.socialsContainer}>
                    <TouchableOpacity style={styles.socialBg}>
                        <GoogleLogo size={20} weight="regular" color="#FAFAFA" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialBg}>
                        <AppleLogo size={20} weight="fill" color="#FAFAFA" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialBg}>
                        <MetaLogo size={20} weight="regular" color="#FAFAFA" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialBg}>
                        <MicrosoftOutlookLogo size={20} weight="regular" color="#FAFAFA" />
                    </TouchableOpacity>
                </View>
                <View style={styles.singInContainer}>
                    <Text style={styles.text}>Não tem uma conta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.singIn}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    );
}