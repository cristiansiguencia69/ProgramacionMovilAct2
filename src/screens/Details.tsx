import { StyleSheet, Text, View, Image, Pressable, Button, FlatList } from 'react-native'
import React, { useState, useEffect, PropsWithChildren } from 'react'
import { ScrollView } from 'react-native-virtualized-view'

// react navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native";

import { RootStackPramList } from "../../App"
import Servicios from '../components/Servicios';
import Separator from '../components/Separator'
import Diagnosticos from '../components/Diagnosticos';

type DetailsProps = NativeStackScreenProps<RootStackPramList, "Details">
const i=0
const Details = ({ route, navigation }) => {
  
  const { service } = route.params
  const [diagnostic] = useState(

    service
  
  )

  useEffect(() => {

    if(service.diagnosticos.length%3==0)
    {
      navigation.navigate(
        'Home',{consultas:service.diagnosticos.length-1,vacunas:'agregue vacunas para ver la cantidad de vacunas'}
      )
      console.log('superaste')
    }
    
}, [service.diagnosticos.length]);

  return (
    <ScrollView>

    <View>
      <View>
      <Image
                style={styles.imagen}
                source={{ uri: 'data:image/jpeg;base64,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' }}
              />
      </View>
      <View>
        <Text style={styles.titulo}>Consultas de la ciudad de {diagnostic.city}</Text>

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
          navigation.navigate('FormDiagnosticos', { service: service })
        }}
      >
        <Text style={styles.textBtn}>consulta</Text>

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


export default Details
