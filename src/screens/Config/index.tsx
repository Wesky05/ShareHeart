import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ArrowLeft, TrashSimple } from "phosphor-react-native";
import { ConfigBtn } from "../../components/ConfigBtn";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { deleteUserAccount } from "../../services/api";


export function Config({navigation}) {

    const { user } = useContext(UserContext);
    const [modalVisible, setModalVisible] = useState(false);

    const handleDeleteAccount = async () => {
        if (!user) {
            console.error('User não encontrado');
            return;
        }

        try {
            await deleteUserAccount(user._id);
            navigation.navigate('Login'); // Redireciona para a tela de login
        } catch (error) {
            console.error('Erro ao excluir conta do usuário:', error.response ? error.response.data : error.message);
        }
    };
    
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
            <TouchableOpacity style={{justifyContent: "flex-end", flexDirection: "row", alignItems: "center", gap: 4}} onPress={() => setModalVisible(true)}>
                <TrashSimple size={16} weight="bold" color="#EB3D3D"/>
                <Text style={styles.deleteAccountBtn}>Excluir conta</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={modalStyles.centeredView}>
                    <View style={modalStyles.modalView}>
                        <Text style={modalStyles.modalText}>Deseja realmente excluir sua conta?</Text>
                        <View style={modalStyles.buttonContainer}>
                            <TouchableOpacity
                                style={[modalStyles.button, modalStyles.buttonCancel]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={modalStyles.textStyle}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[modalStyles.button, modalStyles.buttonDelete]}
                                onPress={handleDeleteAccount}
                            >
                                <Text style={modalStyles.textStyle}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const modalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonCancel: {
        backgroundColor: "#2196F3",
    },
    buttonDelete: {
        backgroundColor: "#EB3D3D",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});