import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import LogoImage from "../../assets/shareheart-logo-blue.svg";
import { ArrowLeft } from "phosphor-react-native";
import { useState } from "react";



export function Cadastro({navigation}) {
    const [selectedProfile, setSelectedProfile] = useState('donor');

    
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
              <LogoImage width={200}/>  
            </View>
            <View style={styles.formContainer}>
                <View style={styles.formContainerHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ArrowLeft size={32} weight="regular" color="#EB6AAF"/>
                    </TouchableOpacity>
                    <Text style={styles.formTitle}>Cadastre-se</Text>
                    <View style={{width: 32, height: 32}}></View>
                </View>
                <View style={styles.chooseAccount}>
                    <TouchableOpacity style={[styles.accountTypeLink, selectedProfile === 'donor' && styles.activeAccountTypeLink]} onPress={() => setSelectedProfile('donor')}>
                        <Text style={[styles.accountType, selectedProfile === 'donor' && styles.activeAccountType]}>Doador</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.accountTypeLink, selectedProfile === 'institution' && styles.activeAccountTypeLink]} onPress={() => setSelectedProfile('institution')}>
                        <Text style={[styles.accountType, selectedProfile === 'institution' && styles.activeAccountType]}>Instituição</Text>
                    </TouchableOpacity>
                </View>
                {selectedProfile === 'donor' ? (
                    <View style={styles.inputsContainer}>
                        <Text style={styles.formsTopic}>Informações Pessoais</Text>
                        <TextInput style={styles.formInput}
                            placeholder="Nome"
                            placeholderTextColor="#9D9D9D"
                            cursorColor="#EB6AAF"
                            keyboardType="default"
                            selectionColor="#EB6AAF"
                            selectionHandleColor="#6A77EB"
                        />
                        <TextInput style={styles.formInput}
                            placeholder="CPF"
                            placeholderTextColor="#9D9D9D"
                            cursorColor="#EB6AAF"
                            keyboardType="number-pad"
                            selectionColor="#EB6AAF"
                            selectionHandleColor="#6A77EB"
                        />
                        <View style={styles.formInput50Container}>
                            <TextInput style={styles.formInput50}
                                placeholder="Data de Nasc."
                                placeholderTextColor="#9D9D9D"
                                cursorColor="#EB6AAF"
                                keyboardType="numbers-and-punctuation"
                                selectionColor="#EB6AAF"
                                selectionHandleColor="#6A77EB"
                            ></TextInput>
                            <TextInput style={styles.formInput50}
                                placeholder="Telefone"
                                placeholderTextColor="#9D9D9D"
                                cursorColor="#EB6AAF"
                                keyboardType="numeric"
                                selectionColor="#EB6AAF"
                                selectionHandleColor="#6A77EB"
                            ></TextInput>
                        </View>
                    </View>
                ) : (
                    <Text>Formulário de Instituição</Text>
                )}
            </View>
        </View>
    );
}