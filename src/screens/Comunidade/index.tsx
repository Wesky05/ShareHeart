import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Post } from "../../components/Post";



export function Comunidade() {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Header
                cta="Explore sua comunidade!"
            />
            <Post/>
        </ScrollView>
    );
}