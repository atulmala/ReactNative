import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
export default function App() {
  var login_id = "";
  var password = "";

  _onPressLogin = () => {
    if (login_id == "") {
      alert('Please enter Login ID');
      return;
    }
    if (password == "")  {
      alert('Please enter Password');
      return;
    }
    alert('Login Initiated');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ClassUp</Text>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          defaultValue={login_id}
          placeholder="Enter Login ID"
          placeholderTextColor="#e8eaf6"
          onChangeText={text => login_id = text} />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          defaultValue={password}
          placeholder="Enter Password"
          placeholderTextColor="#e8eaf6"
          onChangeText={text => password = text} />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={_onPressLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2dfdb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#1b5e20",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    fontSize: 18,
    color: "white"
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  },
  forgot: {
    marginTop: 15,
    color: "#1a237e",
    fontSize: 18,
    fontStyle: "italic"
  },
});
