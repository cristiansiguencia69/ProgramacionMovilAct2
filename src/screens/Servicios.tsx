import { FlatList, Pressable, StyleSheet, Text, View, Image, ScrollView, SafeAreaView} from 'react-native'
import React, { useEffect, useState, PropsWithChildren } from 'react'
import { NestableScrollContainer, NestableDraggableFlatList } from "react-native-draggable-flatlist"
//React navigation
import { RootStackPramList } from "../../App"

import Separator from '../components/Separator'
import Servicios from '../components/Servicios'


import { SERVICES_LIST, VACUNAS } from '../data/contants'

//import { VACUNAS } from '../data/contants'
import Vacunas from '../components/Vacunas'


const Services = ({ route, navigation }) => {
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View >
          <View style={styles.containerGreen}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
            >
              <FlatList
                data={SERVICES_LIST}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={Separator}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Details', {
                        service: item,
                      }
                      )
                    }}
                  >
                    <Servicios service={item} />
                  </Pressable>
                )}
              />
             
            </ScrollView>
            
          </View>
        </View>
      </ScrollView>
      <ScrollView style={styles.scrollView}>
        <View >
          <View style={styles.containerGreen}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
            >
              <FlatList
                data={VACUNAS}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={Separator}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => {
                      navigation.navigate('DetailsVacuna', {
                        vacuna: item
                      })
                    }}
                  >
                    <Vacunas vacuna={item} />
                  </Pressable>
                )}
              />
             
            </ScrollView>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 16,
    marginBottom: 4
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 20,
  },
  containerGreen: {
    flex: 1,
    flexDirection: 'column',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
    margin: 2
  },
});

export default Services
