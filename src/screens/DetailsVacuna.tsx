import { StyleSheet, Text, View, Image, Pressable, Button, FlatList } from 'react-native'
import React, { useState, useEffect, PropsWithChildren } from 'react'
import { ScrollView } from 'react-native-virtualized-view'


import Vacunas from '../components/Vacunas';
import Diagnosticos from '../components/Diagnosticos';

const DetailsVacuna = ({ route, navigation }) => {
  
  const { vacuna } = route.params

  const [diagnostic] = useState(

    vacuna
  
  )
  
  useEffect(() => {

    if(vacuna.diagnosticos.length%3==0)
    {
      navigation.navigate(
        'Home',{vacunas:vacuna.diagnosticos.length-1,consultas:'debe agregar vacuna si desea consultar'}
      )
      console.log('superaste')
    }
    
  
}, [vacuna.diagnosticos.length]);

  return (
    <ScrollView>

    <View>
      <View>
      <Image
                style={styles.imagen}
                source={{ uri: 'https://www.paho.org/sites/default/files/styles/top_hero/public/2021-04/vaccine-safety-1500x810.jpg?h=b0b513fd&itok=icqAqx1k' }}
              />
      </View>
      <View>
        <Text style={styles.titulo}>Vacunas de la ciudad de {diagnostic.city}</Text>

        <Text style={styles.textos}>{diagnostic.name}</Text>
        <Text style={styles.textos}>{diagnostic.date}</Text>
        <Text style={styles.textos}>{diagnostic.description}</Text>

        <View>
          <FlatList
            data={diagnostic.diagnosticos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Diagnosticos diagnostico={item} />
            )}
          />
       </View>
      </View>



      <Pressable
        style={styles.btnIrComentarios}
        onPress={() => {
          navigation.navigate('FormVacunas', { vacuna: vacuna })
        }}
      >
        <Text style={styles.textBtn}>vacunas</Text>

      </Pressable>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imagen: {
    width: '60%',
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 20
  },
  boxScroll: {
    width: '100%',
  },
  titulo: {
    fontSize: 16,
    fontWeight: '800',
    paddingTop: 10,
    marginBottom: 4,
    textAlign: 'center'
  },
  textos: {
    fontSize: 12,
    fontWeight: '500',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    textAlign: 'left'
  },
  btnIrComentarios: {
    width: '50%',
    padding: 5,
    borderRadius: 8,
    marginTop:10,
    marginHorizontal: 8,
    backgroundColor: '#065CC6',
    alignSelf: 'center'
  },
  textBtn: {
    color: '#ffffff',
    textAlign: 'center',
  },
  containerGreen: {
    flex: 1,
    flexDirection: 'column',
  },
});


export default DetailsVacuna
