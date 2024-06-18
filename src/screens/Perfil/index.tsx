import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ArrowLeft, Gear } from "phosphor-react-native";
import ProfileImage from "../../assets/profile-img.svg";
import { useState } from "react";



export function Perfil({navigation}) {
    const [selectedOption, setselectedOption] = useState('posts');

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
                    <View style={{alignItems: "center", width: 100}}>
                        <Text style={styles.profileNumberText}>0</Text>
                        <Text style={styles.profileNumberInfo}>Doações</Text>
                    </View>
                    <View style={{alignItems: "center", width: 100}}>
                        <Text style={styles.profileNumberText}>0</Text>
                        <Text style={styles.profileNumberInfo}>Seguindo</Text>
                    </View>
                    <View style={{alignItems: "center", width: 100}}>
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
            <View style={styles.chooseAccount}>
                    <TouchableOpacity style={[styles.accountTypeLink, selectedOption === 'posts' && styles.activeAccountTypeLink]} onPress={() => setselectedOption('posts')}>
                        <Text style={[styles.accountType, selectedOption === 'posts' && styles.activeAccountType]}>Publicações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.accountTypeLink, selectedOption === 'donations' && styles.activeAccountTypeLink]} onPress={() => setselectedOption('donations')}>
                        <Text style={[styles.accountType, selectedOption === 'donations' && styles.activeAccountType]}>Suas doações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.accountTypeLink, selectedOption === 'likes' && styles.activeAccountTypeLink]} onPress={() => setselectedOption('likes')}>
                        <Text style={[styles.accountType, selectedOption === 'likes' && styles.activeAccountType]}>Suas curtidas</Text>
                    </TouchableOpacity>
            </View>
        </ScrollView>
    );
}