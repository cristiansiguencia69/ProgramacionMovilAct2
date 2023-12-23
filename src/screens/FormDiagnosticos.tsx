import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import RNPickerSelect from 'react-native-picker-select';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView
} from "react-native";
import BouncyCheckboxGroup, {
    ICheckboxButton,
} from "react-native-bouncy-checkbox-group";

//React navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackPramList } from "../../App"


const _iconStyle = (borderColor: string) => ({
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: borderColor,
});

const styles = StyleSheet.create({
    // Pagina
    formContainer: {
        margin: 8,
        padding: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
        alignSelf: 'center'
    },
    heading: {
        fontSize: 15,
    },
    // Formulario
    inputWrapper: {
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    //Input Nombre
    inputColumn: {
        flexDirection: 'column',
    },
    inputStyle: {
        padding: 8,
        width: '100%',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#16213e',
    },
    // Estilos del checkbox
    container: { marginTop: 24 },
    verticalStyle: { marginTop: 16 },
    textStyle: { textDecorationLine: "none" },
    iconImageStyle: { height: 20, width: 20 },
    //Input Nombre
    textAreaStyle: {
        padding: 8,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#16213e',
        marginBottom: 10
    },
    // Botones
    formActions: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    primaryBtn: {
        width: 120,
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: '#065CC6',
    },
    primaryBtnTxt: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
    hiddenInput: {
        width: 0,
        height: 0,
    },
    //Errores
    error: {
        color: 'red',
        fontStyle: 'italic'
    },

});

const optionsCalifica: ICheckboxButton[] = [
    {
        id: '1',
        fillColor: "#fc0000",
        unfillColor: "#ff3333",
        iconStyle: _iconStyle("#fc0000"),
        iconImageStyle: styles.iconImageStyle,
    },
    {
        id: '2',
        fillColor: "#f7883c",
        unfillColor: "#f96906",
        iconStyle: _iconStyle("#f7883c"),
        iconImageStyle: styles.iconImageStyle,
    },
    {
        id: '3',
        fillColor: "#f9de30",
        unfillColor: "#fbd901",
        iconStyle: _iconStyle("#f9de30"),
        iconImageStyle: styles.iconImageStyle,
    },
    {
        id: '4',
        fillColor: "#c1fc39",
        unfillColor: "#affb01",
        iconStyle: _iconStyle("#c1fc39"),
        iconImageStyle: styles.iconImageStyle,
    },
    {
        id: '5',
        fillColor: "#4efc39",
        unfillColor: "#20f906",
        iconStyle: _iconStyle("#4efc39"),
        iconImageStyle: styles.iconImageStyle,
    },
];

type FormDiagnosticoProps = NativeStackScreenProps<RootStackPramList, "FormDiagnostico">

var calificaSelected: string | number = null
var especieSelected: string | number = null

const FormDiagnosticos = ({ navigation, route }: FormDiagnosticoProps) => {
    const getCurrentDate=()=>{
 
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
   
        //Alert.alert(date + '-' + month + '-' + year);
        // You can turn it in to your desired format
        return date + '-' + month + '-' + year;//format: d-m-y;
  }

    const { service } = route.params

    const [coment1, setComment] = useState(
        service
    )
    const especie=()=>(
        <>
        <View>
            <Text>Seleccione animal</Text>
            <RNPickerSelect
                onValueChange={(value) => {
                    especieSelected=value

                }}
                         items={[
                                { label: 'gato', value: 'gato' },
                                { label: 'perro', value: 'perro' },
                                { label: 'vaca', value: 'vaca' },
                                ]}
                />                                  
        </View>  
        </>

    )
    
    const horizontalCheckboxGroupContainer = () => (
        <>
            <View>
                <Text style={styles.heading}>
                    Nivel de atencion (rojo: Inmediato, Verde:Espera )
                </Text>
            </View>
            <View
                style={{
                    marginTop: 16,
                    marginBottom: 16,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <BouncyCheckboxGroup
                    data={optionsCalifica}
                    onChange={(selectedItem: ICheckboxButton) => {
                        //Guardo en variable el id del valor seleccionado
                        calificaSelected = selectedItem.id
                    }}
                />
            </View>
        </>
    );

    //Validaciones del formulario
    const validationSchema = Yup.object().shape({
        nombre: Yup.string()
            .required('Campo requerido')
            .min(3, 'Debe contener al menos 3 caracteres'),
        comentario: Yup.string()
            .required('Campo requerido')
            .min(10, 'Debe contener al menos 10 caracteres'),
    });


    return (
        <>
            <SafeAreaView>
                <ScrollView>

                

                <View style={styles.formContainer}>
                    <Text style={styles.title}>Crear Consulta</Text>
                   
                    {/* COMPONENTE FORMIK */}
                    <Formik
                        initialValues={{
                            nombre: '',
                            califica: '',
                            comentario: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            let idCom:string = ''+service.diagnosticos.length
                            
                          
                           
                            service.diagnosticos.push({ id: idCom, date:getCurrentDate(),name: values.nombre,especie:especieSelected, estado: calificaSelected, descripcion: values.comentario })
                           

                            

                            

                            navigation.navigate('Details',
                                {
                                    service: service
                                }
                            )
                        }}
                    >
                        {({ values,
                            errors,
                            touched,
                            isValid,
                            handleChange,
                            handleSubmit, }) => (

                            <>
                            
                                <View style={styles.inputWrapper}>
                                    
                                    <View style={styles.inputColumn}>
                                        <Text style={styles.heading}>Nombre</Text>
                                    </View>
                                </View>
                                <TextInput
                                    style={styles.inputStyle}
                                    value={values.nombre}
                                    onChangeText={handleChange('nombre')}
                                    placeholder='Nombre'
                                    placeholderTextColor="#878787"
                                    keyboardType='default'
                                />
                                {errors.nombre && <Text style={styles.error}>{errors.nombre}</Text>}

                                <View style={styles.container}>
                                    {horizontalCheckboxGroupContainer()} 
                                    {especie()}
                                </View>
                                  
                                <View style={styles.inputWrapper}>
                                    <View style={styles.inputColumn}>
                                        <Text style={styles.heading}>Diagnostico</Text>
                                    </View>
                                </View>
                                <TextInput
                                    multiline={true}
                                    numberOfLines={6}
                                    onChangeText={handleChange('comentario')}
                                    value={values.comentario}/>
                                {errors.comentario && <Text style={styles.error}>{errors.comentario}</Text>}

                                {/* BOTONES */}

                                <View style={styles.formActions}>
                                    <TouchableOpacity
                                        style={styles.primaryBtn}
                                        disabled={!isValid}
                                        onPress={handleSubmit}
                                    >
                                        <Text style={styles.primaryBtnTxt}>Enviar</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </Formik>
                    {/* COMPONENTE FORMIK */}
                </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default FormDiagnosticos;
