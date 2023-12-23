import { FlatList, Pressable, StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Button, Touchable, TouchableOpacity } from 'react-native'

import Separator from '../components/Separator'
import Posts from '../components/Posts'


// data
import { POSTS } from '../data/contants'
import { useState } from 'react'


const Home = ({ navigation,route }) => {

  console.log(route.params)
  const {consultas,vacunas}=route.params
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.scrollView}>

        <View >
          <View style={styles.containerBlue}>
            <View style={styles.cajaPorcentaje}>
              <Text style={styles.textTitle}>Veterinaria 100Health</Text>
              <Text style={styles.textInfo}>cuida a tus mascotas!</Text>
              <Pressable
                style={styles.btnIrEventos}
                onPress={() => {
                  navigation.navigate('Servicios', {
                    

                  })
                }}
              >
                <Text style={styles.textBtn}>acceso a servicios</Text>
              </Pressable>
            </View>
            <View style={styles.cajaPorcentaje}>
              <Image
                style={styles.imgPrincipal}
                source={{ uri: 'https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2020/9/7/principalmascotas_2.jpg?itok=VYwk69Rg' }}
              />
            </View>
          </View >
          <View>
            <Text style={styles.textTitle}>Servicios Veterinarios</Text>
          </View>
          <View style={styles.containerGreen}>
            <ScrollView
              style={styles.boxScroll}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
            >
              <FlatList
            data={POSTS}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Posts post={item} />
            )}
          />
            </ScrollView>

          </View>


        </View>

        <View style={styles.footer}>
          <Text style={styles.textInfo}>
            El numero de vacunas al momento es <Text style={styles.textTitle}>{vacunas}</Text>
          </Text>
          <Text style={styles.textInfo}>
            El numero de consultas al momento es  <Text  style={styles.textTitle}>{consultas}</Text>
          </Text>
         
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 0,
    marginBottom: 2
  },
  box: {
    width: 100,
    height: 100,
    margin: 0
  },
  boxScroll: {
    width: '100%',
  },
  containerBlue: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  containerGreen: {
    flex: 1,
    flexDirection: 'column',
  },
  cajaPorcentaje: {
    width: '50%',
    margin: 0
  },
  caja: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 0
  },
  img: {
    width: '100%',
    height: '100%',
  },
  imgPrincipal: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 10
  },
  card: {
    paddingHorizontal: 0,
    justifyContent: 'center',
    backgroundColor: '#8D3DAF',
    alignItems: 'center',
    width: 300,
    height: 300,
    borderRadius: 10,
    margin: 0,
    marginTop: 10
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#8D3DAF',
    padding: 0,
    borderRadius: 10
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF'
  },
  userStatus: {
    fontSize: 12
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 0,
  },
  text: {
    fontSize: 30,
    marginTop: 14,
    margin: 8

  },
  textTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    paddingTop: 20
  },
  textInfo: {
    fontWeight: '400',
    fontSize: 16,
    padding: 10
  },
  btnIrEventos: {
    width: 120,
    padding: 5,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#065CC6',
  },
  textBtn: {
    color: '#ffffff',
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: 'powderblue'
  }
});

export default Home