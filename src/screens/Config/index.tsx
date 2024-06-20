import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ArrowLeft, TrashSimple } from "phosphor-react-native";
import { ConfigBtn } from "../../components/ConfigBtn";


export function Config({navigation}) {
    return(
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
                        <ArrowLeft size={32} weight="regular" color="#EB6AAF"/>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Configurações</Text>
                </View>
                <View style={{marginTop: 24}}>
                    <ConfigBtn
                        title="Ajuda"
                    />
                    <ConfigBtn
                        title="Status da conta"
                    />
                    <ConfigBtn
                        title="Minha carteira"
                    />
                    <ConfigBtn
                        title="Sobre"
                    />
                </View>
            </View>
            <TouchableOpacity style={{justifyContent: "flex-end", flexDirection: "row", alignItems: "center", gap: 4}}>
                <TrashSimple size={16} weight="bold" color="#EB3D3D"/>
                <Text style={styles.deleteAccountBtn}>Excluir conta</Text>
            </TouchableOpacity>
        </View>
    );
}