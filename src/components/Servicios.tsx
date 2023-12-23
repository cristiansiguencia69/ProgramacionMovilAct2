import { Image, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'


type EventosProps = PropsWithChildren<{
  service: Services
}>

const Servicios = ({ service }: EventosProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: service.imageUrl }}
        style={styles.image}
      />
      <View>
        <Text style={styles.titulo}>
          {service.name}          
        </Text>
        <Text style={styles.name}>
          {service.date}          
        </Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 8,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
    marginRight: 12,
  },
  titulo: {
    fontSize: 16,
    fontWeight: '800',
    paddingTop: 50,
    marginBottom: 4,
    textAlign:'center'
  },
  name: {
    fontSize: 12,
    fontWeight: '500',
    textAlign:'center'
  }
});

export default Servicios
