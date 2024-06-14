import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MapView, { Callout, Marker } from 'react-native-maps';

export default function CustomMarker({ coordinate, title, image }) {
  return (
    <Marker coordinate={coordinate}>
        <View style={styles.markerContainer}>
            <Image source={image} style={styles.markerImage} />
        </View>
      </Marker>
  )
}

const styles = StyleSheet.create({
    
    markerImage: {
      width: '100%', 
      height: '100%', 
    },
    markerContainer: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#FFF',
        borderWidth: 4,
        backgroundColor: '#EB6AAF',
        shadowColor: "#FEC9D5",
        shadowOffset: {
            width: 0,
            height:0,
        },
        shadowOpacity: 1,
        shadowRadius: 11.43,
    }
  });
  