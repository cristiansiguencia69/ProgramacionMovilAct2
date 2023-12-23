import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './src/screens/Home';
import Servicios from './src/screens/Servicios';
import Details from './src/screens/Details';
import FormDiagnosticos from './src/screens/FormDiagnosticos';
import Vacuna from './src/screens/Vacunas';
import DetailsVacuna from './src/screens/DetailsVacuna';
import FormVacunas from './src/screens/FormVacunas';

import {INITIALSERVICES,INITIALVACUNAS} from './src/data/contants'

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
export type RootStackPramList = {
  Home: undefined;
  Details: {service:Services};
  Vacunas:{vacuna:Vacunas};
  DetailsVacuna:{vacuna:Vacunas};
  FormDiagnostico:{service:Services};
  FormVacuna:{vacuna:Vacunas}
}

const App = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home}
        initialParams={{vacunas:'0',consultas:'0'}} 
      />
      <Stack.Screen 
        name="Servicios" 
        component={Servicios} 
         
        />
      <Stack.Screen 
        name="Details" 
        component={Details} 
        initialParams={
          {
            service:INITIALSERVICES[0] 
          }
      }
      />
      <Stack.Screen name="FormDiagnosticos" component={FormDiagnosticos} initialParams={{service:INITIALSERVICES[0]}}/>
      <Stack.Screen name="FormVacunas" component={FormVacunas} initialParams={{vacuna:INITIALVACUNAS[0]}}/>

      <Stack.Screen name="DetailsVacuna" component={DetailsVacuna} initialParams={{vacuna:INITIALVACUNAS[0]}}/>

    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default App

