import { KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ArrowLeft, Plus } from "phosphor-react-native";



export function Postar({navigation}) {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Comunidade")}>
                    <ArrowLeft size={32} weight="regular" color="#6A77EB"/>
                </TouchableOpacity>
            </View>
            <View style={styles.fields}>
                <View style={styles.photoField}>
                    <View>
                        <Text style={styles.fieldTextTitle}>Escolha uma foto</Text>
                        <Text style={styles.fieldTextSubtitle}>da sua galeria</Text>
                    </View>
                    <View style={styles.photo}>
                        <TouchableOpacity style={styles.addImageButton}>
                            <Plus
                                color="#FAFAFA"
                                size={30}
                                weight="regular"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.subtitleField}>
                    <View>
                        <Text style={styles.fieldTextTitle}>Adicione uma</Text>
                        <Text style={[styles.fieldTextSubtitle, {color: "#6A77EB"}]}>legenda</Text>
                    </View>
                    <KeyboardAvoidingView behavior="height" style={styles.subtitle}>
                        <TextInput style={styles.subtitleInput}
                            placeholder="Mensagem..."
                            placeholderTextColor="#9D9D9D"
                            cursorColor="#EB6AAF"
                            selectionColor="#EB6AAF"
                            selectionHandleColor="#6A77EB"
                            multiline = {true}
                            numberOfLines = {6}
                        />
                    </KeyboardAvoidingView>
                </View>
            </View>
            <TouchableOpacity style={styles.publicarBtn}>
                <Text style={styles.publicarBtnText}>Publicar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}