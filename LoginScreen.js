import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default class LoginScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
      }

      handleLogin = (email, password) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then( () => {
            this.props.navigation.navigate("BottomTab");
          })
          .catch(error => {
            Alert.alert(error.message);
          });
      };


    render(){
        return(

            <View>
                <Text>Pantalla de acceso</Text>

                <TextInput
                placeholder= "Escribe tu correo electrónico"
                />

                <TextInput
                placeholder= "Escribe tu contraseña"
                />

                <TouchableOpacity>
                    <Text> Iniciar Sesión </Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}


const styles = StyleSheet.create({
    loginBox: {
        width: 300,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        margin: 10,
        paddingLeft: 10

    }
});