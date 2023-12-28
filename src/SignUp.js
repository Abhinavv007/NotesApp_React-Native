import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const SignUp = ({ navigation, isLoggedIn, handleRegistration }) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async () => {
    try {
      const result = await axios.post("http://192.168.1.6:9000/api/auth/register", input);
      if (result) {
        handleRegistration();
        alert(result.data.msg);
        navigation.navigate("Login");
      }
    } catch (error) {
    
      alert("Some error occurred");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Sign Up Page</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={input.name}
          style={styles.input}
          placeholder='Enter your name'
          onChangeText={(text) => setInput({ ...input, name: text })}
        />
        <TextInput
          value={input.email}
          style={styles.input}
          placeholder='Enter your email'
          onChangeText={(text) => setInput({ ...input, email: text })}
        />
        <TextInput
          value={input.password}
          style={styles.input}
          placeholder='Enter your password'
          onChangeText={(text) => setInput({ ...input, password: text })}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 60,
    color: 'black',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    height: 60,
    fontSize: 18,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    borderWidth: 1,
    height: 60,
    fontSize: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginBottom: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
});

export default SignUp;
