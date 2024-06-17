import { ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import { Plus } from "phosphor-react-native";



export function Comunidade({navigation}) {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Header
                cta="Explore sua comunidade!"
            />
            <ScrollView contentContainerStyle={styles.postsContainer}>
                <Post/>
                <Post/>
                <Post/>
            </ScrollView>
            <TouchableOpacity style={styles.addPostButton} onPress={() => navigation.navigate('Postar')}>
                <Plus
                    color="#FAFAFA"
                    size={30}
                    weight="regular"
                />
            </TouchableOpacity>
        </ScrollView>
    );
}