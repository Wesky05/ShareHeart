import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ArrowLeft, Gear } from "phosphor-react-native";
import ProfileImage from "../../assets/profile-img.svg";



export function Perfil({navigation}) {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <ArrowLeft size={32} weight="regular" color="#6A77EB"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Gear
                        color="#444"
                        size={30}
                        weight="regular"
                    />
                </TouchableOpacity>
            </View>
            <View style={{alignItems: "center", gap: 16}}>
                <View style={styles.profileEditField}>
                    <TouchableOpacity style={styles.profileImage}>
                        <ProfileImage width={100} height={100}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileNumbers}>
                    <View style={{alignItems: "center"}}>
                        <Text style={styles.profileNumberText}>12</Text>
                        <Text style={styles.profileNumberInfo}>Doações</Text>
                    </View>
                    <View style={{alignItems: "center"}}>
                        <Text style={styles.profileNumberText}>3</Text>
                        <Text style={styles.profileNumberInfo}>Seguindo</Text>
                    </View>
                    <View style={{alignItems: "center"}}>
                        <Text style={styles.profileNumberText}>0</Text>
                        <Text style={styles.profileNumberInfo}>Seguidores</Text>
                    </View>
                </View>
                <View style={styles.profileName}>
                    <View>
                        <Text style={styles.profileNameText}>Neto</Text>
                        <Text style={styles.profileType}>Doador</Text>
                    </View>
                    <TouchableOpacity style={styles.profileEditBtn}>
                        <Text style={styles.profileEditBtnText}>Editar perfil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}