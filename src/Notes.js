import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Note from './Note';
import { TextInput } from 'react-native-gesture-handler';

const Notes = ({navigation}) => {
  const [notes, setNotes] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
 

  const refreshPage = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };
  const getNotes = async () => {
    try {
      const result = await axios.get("http://192.168.1.6:9000/api/auth/getnotes");
      if (result) {
       refreshPage()
        setNotes(result.data.msg);
      } else {
        alert(result.data.msg);
      }
    } catch (error) {
      
    }
  }
  

  useEffect(() => {
    
   
    getNotes();
  }, [refreshKey]);

  return (
    <>
    <View className="mt-5 mb-8">
    <TouchableOpacity onPress={()=>navigation.navigate("NewNote")} >
      
      <Text className="mx-20 px-1 py-2  rounded-xl" style={{ textAlign:"center",color: 'white', fontSize: 18,borderWidth:1.8,shadowColor:"black"}}>➕</Text>
      
      </TouchableOpacity>
      <Text className="mt-4 font-bold" style={{ textAlign:"center",color: 'purple', fontSize: 14 }}>Add New Notes</Text>
    </View>
 
    <ScrollView className="flex-1 mx-4">
      {notes && notes.map((item) => (
        <View style={{ borderWidth: 2, backgroundColor: "#EBF5FB" }} className="py-3 px-3 rounded-xl mt-5" key={item.id}>
         <Note item={item} refreshPage={refreshPage} navigation={navigation} />
        </View>
      ))}
    </ScrollView>
    </>
  );
};

export default Notes;

const styles = StyleSheet.create({});
