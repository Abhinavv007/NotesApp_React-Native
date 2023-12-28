import React,{useState} from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({ navigation, isLoggedIn}) => {
  const [input, setInput] = useState({
    
    email: "",
    password: ""
  });
  const handleSubmit = async () => {
    try {
      const result = await axios.post("http://192.168.1.6:9000/api/auth/login", input);
      if (result) {
        
       
        if(result.data.msg==="Login Successfully Done"){
          alert(result.data.msg);
          navigation.navigate("Notes");
        } else{
          

          alert(result.data.msg);
        }
       
      }
    } catch (error) {
      console.log("Error: " + error.message);
      alert("Some error occurred");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Login Page</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Enter your email'
          value={input.email}
          onChangeText={(text)=>setInput({...input,email:text})}
        />
        <TextInput
          style={styles.input}
          placeholder='Enter your password'
          value={input.password}
        onChangeText={(text)=>setInput({...input,password:text})}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={handleSubmit}
         style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {!isLoggedIn ? (
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={[styles.createAccountButton, { marginTop: 40 }]}
          >
            <Text style={styles.createAccountButtonText}>Create Account</Text>
          </TouchableOpacity>
        ) : null}
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
    fontSize: 28,
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
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
  createAccountButton: {
    borderWidth: 2,
    height: 60,
    fontSize: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
  },
  createAccountButtonText: {
    color: 'black',
    fontSize: 24,
  },
});

export default Login;
