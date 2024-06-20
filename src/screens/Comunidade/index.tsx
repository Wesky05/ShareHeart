import { ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import { Plus } from "phosphor-react-native";



export function Comunidade({navigation}) {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Header
            navigation={navigation}
                cta="Explore sua comunidade!"
            />
            <ScrollView contentContainerStyle={styles.postsContainer}>
                <Post
                    profilePic="https://aacarecife.org/wp-content/uploads/2017/05/logo-site.png"
                    profileName="AACA"
                    postLocation="Recife - PE"
                    postImageUrl="https://aacarecife.org/wp-content/uploads/2023/10/1697473536781.jpg"
                    subtitle="Hoje foi um dia muito especial! Recebemos mais de 50 doações para alegrarmos o dia de nossas crianças."
                />
                <Post
                    profilePic="https://media.licdn.com/dms/image/C4E0BAQEY_PSz7WFlaA/company-logo_200_200/0/1630644975115/hospital_de_cncer_de_pernambuco___hcp_logo?e=2147483647&v=beta&t=r0SmKb-vqpNPEoBXYSA3aHV8Z0IsN-8o_iWOr6iSuZo"
                    profileName="HCP"
                    postLocation="Recife - PE"
                    postImageUrl="https://novosite.hcp.org.br/wp-content/uploads/2022/11/Rede-Feminina.jpg"
                    subtitle="A Rede Feminina Estadual de Combate ao Câncer de Pernambuco voluntariou-se para uma campanha de doação de sangue."
                />
                <Post
                    profilePic="http://gruporuasepracas.org.br/wp-content/uploads/2018/10/website-logo.jpg"
                    profileName="Grupo Ruas e Praças"
                    postLocation="Recife - PE"
                    postImageUrl="https://pbs.twimg.com/media/EaLa7M-XkAAwFur.jpg"
                    subtitle="Recebemos as doações de alimentos que vocês nos mandaram e já auxiliamos centenas de moradores em situação de vulnerabilidade com cestas básicas. Agradecemos à todos que colaboraram, nos vemos nas Ruas e Praças!"
                />
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