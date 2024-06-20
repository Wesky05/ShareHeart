import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { DotsThree, HandHeart, Heart } from "phosphor-react-native";
import ProfileImage from "../../assets/profile-img.svg";

export function Post({profileName, profilePic, postLocation, postImageUrl, subtitle}) {
    return(
        <View style={styles.container}>
            <View style={styles.postHeader}>
                <View style={styles.postProfile}>
                    <TouchableOpacity style={styles.profile}>
                        <Image style={{width: 40, height: 40, borderRadius: 20}} source={profilePic ? { uri: profilePic } : require("../../assets/profile-img.png")}/>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.profileName}>{profileName ? profileName : "Nome do perfil"}</Text>
                        </TouchableOpacity>
                            <Text style={styles.postLocation}>{postLocation}</Text>
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
                <Image style={styles.postImage} source={postImageUrl ? { uri: postImageUrl } : require("../../assets/photo-placeholder.png")}/>
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
                    <Text style={styles.postProfileName}>{profileName ? profileName : "Nome do perfil"}</Text>
                </TouchableOpacity>
                <Text style={styles.postSubtitle}>{subtitle}</Text>
            </View>
        </View>
    );
}