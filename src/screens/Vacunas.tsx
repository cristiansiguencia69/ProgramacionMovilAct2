import { StyleSheet, Text, View, Image, Pressable, Button, FlatList } from 'react-native'
import React, { useState, useEffect, PropsWithChildren } from 'react'
import { ScrollView } from 'react-native-virtualized-view'

// react navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native";

import { RootStackPramList } from "../../App";
import Servicios from '../components/Servicios';
import Separator from '../components/Separator';
import Vacunas from '../components/Vacunas';

const i=0
const Vacuna = ({ route, navigation }) => {
  
  const { vacuna } = route.params

  const [diagnostic] = useState(

    vacuna
  
  )
  
  useEffect(() => {

    if(route.params?.vacuna.diagnosticos[1])
    
    {
    
     diagnostic.diagnosticos.push(route.params?.vacuna.diagnosticos[1])

    }
}, [route.params?.vacuna]);

  return (
    <ScrollView>

    <View>
      <View>
        
      </View>
      <View>
        <Text style={styles.titulo}>{diagnostic.name}</Text>
        <View>
        <FlatList
            data={diagnostic.diagnosticos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Vacunas vacuna={item} />
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
        <Text style={styles.textBtn}>vacuna</Text>

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


export default Vacuna