import { Text, TextInput, TouchableOpacity, View } from "react-native";
import ProfileImage from "../../assets/profile-img.svg";
import { Gear, Info, MagnifyingGlass } from "phosphor-react-native";
import { styles } from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserDetails } from '../../services/api';
import { useEffect, useState } from "react";


export function Header({navigation, cta}) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
        try {
            const userDetails = await getUserDetails();
            setUser(userDetails);
        } catch (error) {
            console.error('Erro ao buscar detalhes do usuário:', error);
        }
    };

    fetchUser();
    }, []);
    
    return(
        <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TouchableOpacity style={styles.profile} onPress={() => navigation.navigate("Perfil")}>
                        <ProfileImage width={40}/>
                    </TouchableOpacity>
                    <View style={styles.searchbarWrapper}>
                        <TextInput
                            placeholderTextColor="#9D9D9D"
                            cursorColor="#EB6AAF"
                            selectionColor="#EB6AAF"
                            selectionHandleColor="#6A77EB"
                            style={styles.input}
                            placeholder="Buscar"
                        />
                        <MagnifyingGlass
                            color="#9D9D9D"
                            size={14}
                            weight="regular"
                        />
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Gear
                            color="#444"
                            size={30}
                            weight="regular"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.headerBottom}>
                    <View>
                        <Text style={styles.textH1}>{"Olá, " + (user ? user.name : "Carregando...") + "!"}</Text>
                        <Text style={styles.textP}>{cta}</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Info
                            color="#444"
                            size={30}
                            weight="regular"
                        />
                    </TouchableOpacity>
                </View>
            </View>
    );
}