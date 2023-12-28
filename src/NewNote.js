import React,{useState} from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

const NewNote = ({navigation}) => {
    const [input, setInput] = useState({
    
        title: "",
        description: ""
      });
    const handleNewNote = async()=>{
        const result = await axios.post("http://192.168.1.6:9000/api/auth/add-note",input)
        if(result){
            alert(result.data.msg)
            navigation.navigate("Notes")
        } else{
            alert("Failed to add note")
        }
      }
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Add a New Note</Text>
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
      <TouchableOpacity onPress={handleNewNote}
       style={styles.button}>
        <Text style={styles.buttonText}>Add Note</Text>
      </TouchableOpacity>
    
    </View>
  </View>
  )
}

export default NewNote

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