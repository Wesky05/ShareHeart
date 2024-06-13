import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Gear, Info, MagnifyingGlass } from "phosphor-react-native";
import MapView from "react-native-maps";
import { useState } from "react";



export function Home() {
    const initialLocation = {
        latitude: -8.052564746833177, 
        longitude: -34.88518525077827
    }
    
    const [myLocation, setMyLocation] = useState(initialLocation)
    
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TouchableOpacity style={styles.profile}>
                        <Text style={styles.profileLetter}>U</Text>
                    </TouchableOpacity>
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
                    <View>
                        <Text style={styles.textH1}>Olá, Usuário!</Text>
                        <Text style={styles.textP}>Qual causa você irá ajudar hoje?</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Info
                            color="#444"
                            size={30}
                            weight="regular"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <MapView
                style={styles.map}
                initialRegion={
                    {
                        latitude: myLocation.latitude,
                        longitude: myLocation.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }
                }
                provider="google"
            >

            </MapView>
        </ScrollView>
    );
}