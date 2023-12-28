import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import axios from 'axios'

const Note = ({item,refreshPage,navigation}) => {
 
    
    const deleteNote = async()=>{
        try {
          const result = await axios.delete(`http://192.168.1.6:9000/api/auth/delete-note/${item._id}`)
          if(result){
           refreshPage()
           
          }
        } catch (error) {
     
          alert("Some Error occured")
        }
        }
  return (
    <View>
       <View className="flex-row justify-between">
           <TouchableOpacity onPress={()=>navigation.navigate("Edit",{id:item._id})}>
          <Text style={{fontSize:14}}>✏️</Text>

          </TouchableOpacity>
          <Text className="font-semibold" style={{ color: "red", textAlign: "center" }}>{item.title}</Text>
          <TouchableOpacity onPress={deleteNote} >
           <Text style={{fontSize:14}}>🗑️</Text>
          </TouchableOpacity>
          </View>
          <Text style={{ color: "black", textAlign: "center", marginTop: 10 }}>{item.description}</Text>
    </View>
  )
}

export default Note

const styles = StyleSheet.create({})