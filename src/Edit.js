import React,{useState} from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

const Edit = ({ navigation,route}) => {
    const {id} = route.params
  const [input, setInput] = useState({
    
    title: "",
    description: ""
  });
  const handleSubmit = async () => {
    try {
      const result = await axios.put(`http://192.168.1.6:9000/api/auth/update-note/${id}`, input);
      if (result) {
        setTimeout(()=>{
            <ActivityIndicator size={'large'} />
        },1000)
        navigation.navigate("Notes")
        alert(result.data.msg);
      }else{
        console.log(error.message)
          alert("Failed to make changes");
        }
       
      
    } catch (error) {
      console.log("Error: " + error.message);
      alert("Some error occurred");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit your Content</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Title'
          value={input.title}
          onChangeText={(text)=>setInput({...input,title:text})}
        />
        <TextInput
        
          style={styles.input}
          placeholder='Description'
          value={input.description}
        onChangeText={(text)=>setInput({...input,description:text})}
         
        />
        <TouchableOpacity onPress={handleSubmit}
         style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
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
    fontSize: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    
  },
  
 
});

export default Edit;
