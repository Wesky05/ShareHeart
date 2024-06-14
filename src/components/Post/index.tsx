import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { DotsThree, DotsThreeCircle } from "phosphor-react-native";
import ProfileImage from "../../assets/profile-img.svg";

export function Post() {
    return(
        <View style={styles.container}>
            <View style={styles.postHeader}>
                <View style={styles.postProfile}>
                    <TouchableOpacity style={styles.profile}>
                        <ProfileImage width={40}/>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.profileName}>Nome do perfil</Text>
                        </TouchableOpacity>
                            <Text style={styles.postLocation}>Cidade - UF</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <DotsThree
                        color="#444"
                        size={30}
                        weight="regular"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}