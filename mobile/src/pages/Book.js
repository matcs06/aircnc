import React, { useState  } from 'react';
import { SafeAreaView , StyleSheet, Text, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';

export default function Book({ navigation }){
  const id = navigation.getParam('id');
  const [date, setDate] = useState('');

  function handleSubmit(){

  }

  return (
    <SafeAreaView style={styles.container}>
       <Text style={styles.label}>DATA DE INTERESSE *</Text>
       <TextInput
        style={styles.input}
        placeholder="Qual data você quer reservar"
        placeholderTextColor="#999"  
        keyboardType="email-address"
        autoCapitalize="words"
        autoCorrect={false}
        value={date}
        onChangeText={setDate}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Solicitar reservar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSubmit} style={[styles.button, styles.cancelButton]}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({

  container:{
    margin: 30,
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
    marginTop: 30,
  },

  input:{
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
  },

  button:{
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },

  cancelButton:{
    backgroundColor: '#ccc',
    marginTop: 10,
  },

  buttonText:{
   color: '#FFF',
   fontWeight: 'bold',
   fontSize: 16,
  },


});