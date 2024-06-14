import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Crosshair, Gear, Info, MagnifyingGlass } from "phosphor-react-native";
import MapView, { Marker } from "react-native-maps";
import React, { useEffect, useState } from "react";
import * as Location from 'expo-location';
import ProfileImage from "../../assets/profile-img.svg";
import CustomMarker from "./CustomMarker";
import PinMarker from "./PinMarker";
import { Header } from "../../components/Header";



export function Home() {
    const initialLocation = {
        latitude: -8.052564746833177, 
        longitude: -34.88518525077827,
    }

    const local = {
        latitude: -8.063209572987331, 
        longitude: -34.874093027577686
    }
    
    const [myLocation, setMyLocation] = useState(initialLocation);
    const [pin, setPin] = useState(local)
    const [region, setRegion] = useState(null)
    const mapRef = React.useRef(null)

    useEffect(() => {
        setPin(local)
      _getLocation()
    }, [])
    
    const _getLocation = async () => {
        try{
            let { status } = await Location.requestForegroundPermissionsAsync(); 

            if(status !== 'granted') {
                console.warn('Permissão para acessar localização foi recusada');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setMyLocation(location.coords);
        }
        catch(err){
            console.warn(err);
        }
    }

    const focusOnLocation = async () => {
        if(myLocation.latitude && myLocation.longitude) {
            const newRegion = {
                latitude: myLocation.latitude,
                longitude: myLocation.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }

            if(mapRef.current) {
                mapRef.current.animateToRegion(newRegion, 500)
            }
        }
    }
    
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Header
                cta="Qual causa você irá ajudar hoje?"            
            />
            <MapView
                style={styles.map}
                initialRegion = {{
                    latitude: myLocation.latitude,
                    longitude: myLocation.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                region={region}
                onRegionChangeComplete={setRegion}
                ref={mapRef}
                provider="google"
            >
                
                { myLocation.latitude && myLocation.longitude &&
                    <CustomMarker
                        coordinate={{
                            latitude: myLocation.latitude,
                            longitude: myLocation.longitude
                        }}
                        title=""
                        image={require('../../assets/profile-img.png')}
                    />
                }
                
                { pin.latitude && pin.longitude &&
                    <PinMarker
                    coordinate={{
                        latitude: pin.latitude,
                        longitude: pin.longitude
                    }}
                    title="Instituição"
                    description="Descrição"
                    image={require('../../assets/pin.png')}
                    />
                }
                
            </MapView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.currentLocationBtn} onPress={focusOnLocation}>
                    <Crosshair 
                        color="#FAFAFA"
                        size={30}
                        weight="regular"
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}