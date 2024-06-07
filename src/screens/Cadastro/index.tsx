import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import LogoImage from "../../assets/shareheart-logo-blue.svg";
import { ArrowLeft } from "phosphor-react-native";
import { useState } from "react";



export function Cadastro({navigation}) {
    const [selectedProfile, setSelectedProfile] = useState('donator');

    
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
                    <TouchableOpacity style={[styles.accountTypeLink, selectedProfile === 'donator' && styles.activeAccountTypeLink]} onPress={() => setSelectedProfile('donator')}>
                        <Text style={[styles.accountType, selectedProfile === 'donator' && styles.activeAccountType]}>Doador</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.accountTypeLink, selectedProfile === 'institution' && styles.activeAccountTypeLink]} onPress={() => setSelectedProfile('institution')}>
                        <Text style={[styles.accountType, selectedProfile === 'institution' && styles.activeAccountType]}>Instituição</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}