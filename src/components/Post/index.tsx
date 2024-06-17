import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { DotsThree, DotsThreeCircle, HandHeart, Heart } from "phosphor-react-native";
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
            <View style={styles.postImageContainer}>
                <Image style={styles.postImage} source={require("../../assets/photo-placeholder.png")}/>
            </View>
            <View style={styles.postInteractions}>
                <TouchableOpacity>
                    <Heart
                        color="#EB6AAF"
                        size={30}
                        weight="regular"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <HandHeart
                        color="#EB6AAF"
                        size={30}
                        weight="regular"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.postBottom}>
                <TouchableOpacity>
                    <Text style={styles.postProfileName}>Nome do perfil</Text>
                </TouchableOpacity>
                <Text style={styles.postSubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis eleifend lobortis. Phasellus congue, elit eu rhoncus vehicula, mauris nisl vestibulum odio, in iaculis tellus nulla quis erat. Vivamus faucibus urna condimentum, fermentum libero a, rutrum neque. Phasellus bibendum iaculis egestas.</Text>
            </View>
        </View>
    );
}