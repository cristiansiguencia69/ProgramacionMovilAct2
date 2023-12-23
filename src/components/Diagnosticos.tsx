import { Image, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'


type DiagnosticosProps = PropsWithChildren<{
  diagnostico: Diagnostico
}>

const Diagnosticos = ({ diagnostico }: DiagnosticosProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.containe2}>
        <Text style={styles.titulo}>
          nombre: <Text style={styles.name}>{diagnostico.name}</Text>        
        </Text>
        <Text style={styles.titulo}>
          especie:  <Text style={styles.name}>{diagnostico.especie}</Text>          
        </Text>
        <Text style={styles.titulo}>
          fecha: <Text style={styles.name}>{diagnostico.date}  </Text>        
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
  containe2: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: 'powderblue'
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

export default Diagnosticos
