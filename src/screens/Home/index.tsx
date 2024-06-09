import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Gear, MagnifyingGlass } from "phosphor-react-native";



export function Home() {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <View style={styles.profile}>
                        <Text style={styles.profileLetter}>U</Text>
                    </View>
                    <View style={styles.searchbarWrapper}>
                        <TextInput
                            placeholderTextColor="#9D9D9D"
                            cursorColor="#EB6AAF"
                            selectionColor="#EB6AAF"
                            selectionHandleColor="#6A77EB"
                            style={styles.input}
                            placeholder="Buscar"
                        />
                        <MagnifyingGlass
                            color="#9D9D9D"
                            size={14}
                            weight="regular"
                        />
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Gear
                            color="#444"
                            size={30}
                            weight="regular"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.headerBottom}>
                </View>
            </View>
        </ScrollView>
    );
}