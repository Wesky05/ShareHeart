import { Button, KeyboardAvoidingView, ScrollView, ScrollViewComponent, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import LogoImage from "../../assets/shareheart-logo-blue.svg";
import { ArrowLeft } from "phosphor-react-native";
import { useState } from "react";



export function Cadastro({navigation}) {
    const [selectedProfile, setSelectedProfile] = useState('donor');

    
    return(
        <KeyboardAvoidingView behavior="height" style={styles.container}>
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
                    <ScrollView>
                        <View style={styles.inputsContainer}>
                            <Text style={styles.formsTopic}>Informações Pessoais</Text>
                            <TextInput style={styles.formInput}
                                placeholder="Nome"
                                placeholderTextColor="#9D9D9D"
                                cursorColor="#6A77EB"
                                keyboardType="default"
                                selectionColor="#6A77EB"
                                selectionHandleColor="#EB6AAF"
                            />
                            <TextInput style={styles.formInput}
                                placeholder="CPF"
                                placeholderTextColor="#9D9D9D"
                                cursorColor="#6A77EB"
                                keyboardType="number-pad"
                                selectionColor="#6A77EB"
                                selectionHandleColor="#EB6AAF"
                            />
                            <View style={styles.formInput50Container}>
                                <TextInput style={styles.formInput50}
                                    placeholder="Data de Nasc."
                                    placeholderTextColor="#9D9D9D"
                                    cursorColor="#6A77EB"
                                    keyboardType="numbers-and-punctuation"
                                    selectionColor="#6A77EB"
                                    selectionHandleColor="#EB6AAF"
                                ></TextInput>
                                <TextInput style={styles.formInput50}
                                    placeholder="Telefone"
                                    placeholderTextColor="#9D9D9D"
                                    cursorColor="#6A77EB"
                                    keyboardType="numeric"
                                    selectionColor="#6A77EB"
                                    selectionHandleColor="#EB6AAF"
                                ></TextInput>
                            </View>
                        </View>
                        <View style={styles.inputsContainer}>
                            <Text style={styles.formsTopic}>Informações da conta</Text>
                            <TextInput style={styles.formInput}
                                placeholder="Email"
                                placeholderTextColor="#9D9D9D"
                                cursorColor="#6A77EB"
                                keyboardType="email-address"
                                selectionColor="#6A77EB"
                                selectionHandleColor="#EB6AAF"
                            />
                            <TextInput style={styles.formInput}
                                placeholder="Criar senha"
                                placeholderTextColor="#9D9D9D"
                                cursorColor="#6A77EB"
                                keyboardType="default"
                                secureTextEntry
                                selectionColor="#6A77EB"
                                selectionHandleColor="#EB6AAF"
                            />
                            <View style={styles.formInput50Container}>
                                <TextInput style={styles.formInput50}
                                    placeholder="Data de Nasc."
                                    placeholderTextColor="#9D9D9D"
                                    cursorColor="#6A77EB"
                                    keyboardType="numbers-and-punctuation"
                                    selectionColor="#6A77EB"
                                    selectionHandleColor="#EB6AAF"
                                ></TextInput>
                                <TextInput style={styles.formInput50}
                                    placeholder="Telefone"
                                    placeholderTextColor="#9D9D9D"
                                    cursorColor="#6A77EB"
                                    keyboardType="numeric"
                                    selectionColor="#6A77EB"
                                    selectionHandleColor="#EB6AAF"
                                ></TextInput>
                            </View>
                        </View>
                        <View style={styles.signInBtnContainer}>
                            <TouchableOpacity style={styles.signInBtn}>
                                 <Text style={styles.signInBtnText}>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                ) : (
                    <Text>Formulário de Instituição</Text>
                )}

            </View>
        </KeyboardAvoidingView>
    );
}