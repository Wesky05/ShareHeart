import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ArrowLeft, Check, Gear, PencilSimple } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { getUserDetails, updateUserName } from "../../services/api";

export function EditarPerfil({navigation}) {

    const [user, setUser] = useState(null);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
        try {
            const userDetails = await getUserDetails();
            setUser(userDetails);
            setUserName(userDetails.name);
        } catch (error) {
            console.error('Erro ao buscar detalhes do usuário:', error);
        }
    };

    fetchUser();
    }, []);

    const handleUpdateUserName = async () => {
        if (user && userName) {
            try {
                await updateUserName(user._id, userName);
                // Navegar de volta para o perfil após a atualização
                navigation.navigate("Perfil");
            } catch (error) {
                console.error('Erro ao atualizar o nome do usuário:', error);
            }
        }
    };
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
                    <ArrowLeft size={32} weight="regular" color="#EB6AAF"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleUpdateUserName}>
                    <Check size={32} weight="regular" color="#6A77EB"/>
                </TouchableOpacity>
            </View>
            <View style={{alignItems: "center", gap: 32, justifyContent: "center", width: "100%", height: "100%", marginTop: -60}}>
                <View style={{alignItems: "center", gap: 16, justifyContent: "center"}}>
                    <View style={styles.profileEditField}>
                        <Image style={{width: 100, height: 100, borderRadius: 50}} source={require("../../assets/profile-img.png")}/>
                    </View>
                    <TouchableOpacity style={styles.editBtn}>
                        <Text style={styles.editText}>Editar foto</Text>
                        <PencilSimple
                            size={14}
                            weight="bold"
                            color="#6A77EB"
                        />
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: "flex-start", gap: 8, justifyContent: "flex-start", width: "70%"}}>
                    <Text style={styles.editNameText}>Alterar nome</Text>
                    <TextInput style={styles.formInput}
                        placeholder="Nome"
                        placeholderTextColor="#9D9D9D"
                        cursorColor="#6A77EB"
                        keyboardType="default"
                        selectionColor="#6A77EB"
                        selectionHandleColor="#EB6AAF"
                        value={userName}
                        onChangeText={setUserName}
                    />
                </View>
            </View>
        </View>
    );
}