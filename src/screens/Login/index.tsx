import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import LogoImage from "../../assets/shareheart-logo.svg";
import { AppleLogo, GoogleLogo, MetaLogo, MicrosoftOutlookLogo } from "phosphor-react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";
import axios from "axios";



export function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
          const response = await axios.post('http://192.168.0.7:3000/donor/login', { email, password }); 
          const { token } = response.data;
          await AsyncStorage.setItem('token', token);
          Alert.alert('Login bem-sucedido');
          navigation.navigate('Home'); // Navegar para a tela principal após o login
        } catch (error) {
          console.error(error);
          Alert.alert('Erro ao fazer login');
        }
      };

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.logoContainer}>
              <LogoImage width={300}/>  
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Login</Text>
                <View style={styles.inputContainer} >
                    <TextInput style={styles.formInput}
                        placeholder="Email"
                        placeholderTextColor="#9D9D9D"
                        cursorColor="#EB6AAF"
                        keyboardType="default"
                        selectionColor="#EB6AAF"
                        selectionHandleColor="#6A77EB"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput style={styles.formInput}
                        placeholder="Senha"
                        placeholderTextColor="#9D9D9D"
                        cursorColor="#EB6AAF"
                        secureTextEntry
                        selectionColor="#EB6AAF"
                        selectionHandleColor="#6A77EB"
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.link}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
            
        </ScrollView>
    );
}