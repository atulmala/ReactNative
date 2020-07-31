import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import * as Device from 'expo-device';


export default function App() {
  const toastConfig = {
    'error': (internalState) => (
      <View style=
        {{
          height: 60,
          width: '80%',
          fontSize: 24,
          justifyContent: "center",
          backgroundColor: 'pink',
          borderRadius: 15,
          padding: 20
        }}>
        <Text>{toastMessage}</Text>
      </View>
    ),
    'error': () => { },
    'info': () => { },
    'any_custom_type': () => { }
  }

  var login_id = "";
  var password = "";
  var toastMessage = "";

  const _onPressLogin = () => {
    console.log(Device.brand);
    console.log(Device.manufacturer);
    console.log(Device.osName);
    console.log(Device.osVersion);
    console.log(Device.deviceName);
    console.log(Device.productName);
    console.log(Device.designName);
    if (login_id == "") {
      toastMessage = "Please enter Login ID";
      Toast.show({
        type: 'error',
        text1: 'error',
        text2: toastMessage,
      });
      return;
    }
    if (password == "") {
      toastMessage = "Please enter Password";
      Toast.show({
        text1: 'error',
        text2: toastMessage,
      });
      return;
    }
    alert('Login Initiated');
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
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
    </NavigationContainer>
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
