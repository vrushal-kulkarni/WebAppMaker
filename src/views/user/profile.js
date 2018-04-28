import React from 'react';
import { StyleSheet, Text, View, StatusBar , TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';

import Form from '../components/Form';
import {Actions} from 'react-native-router-flux';

export default class Profile extends React.Component {
    signup() {
        Actions.signup()
    }

    goBack() {
        Actions.pop();
    }
    render() {
        return(
            <View style={styles.container}>
    <TextInput style={styles.inputBox}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Username"
        placeholderTextColor = "#ffffff"
        selectionColor="#fff"
        keyboardType="email-address"
        onSubmitEditing={()=> this.password.focus()}
    />
    <TextInput style={styles.inputBox}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor = "#ffffff"
        ref={(input) => this.password = input}
    />
    <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
        <Form type="Profile"/>
            <View style={styles.signupTextCont}>
    <Text style={styles.signupText}>Do you want to logout?</Text>
        <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Logout</Text></TouchableOpacity>
        </View>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center'
    },

    inputBox: {
        width:300,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
    },
    button: {
        width:300,
        backgroundColor:'#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }

});