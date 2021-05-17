import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log('handleSubmit called!');
  };

  const handleAlternative = () => {
    console.log('handleAlternative called!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signUpText}>Cadastro</Text>
      <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            value={name}
            placeholder='Nome completo'
            placeholderTextColor='rgba(0, 0, 0, 0.54)'
            onChangeText={(text) => setName(text)}
          />
        </View>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          value={email}
          placeholder='E-mail'
          placeholderTextColor='rgba(0, 0, 0, 0.54)'
          keyboardType='email-address'
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          secureTextEntry
          value={password}
          style={styles.inputText}
          placeholder='Senha'
          placeholderTextColor='rgba(0, 0, 0, 0.54)'
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}>
        <Text style={styles.submitBtnText}>CADASTRAR</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>ou</Text>
      <TouchableOpacity onPress={handleAlternative} style={styles.alternativeBtn}>
        <Text style={styles.alternativeBtnText}>ENTRE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  signUpText: {

  },
  input: {

  },
  inputText: {

  },
  submitBtn: {

  },
  submitBtnText: {

  },
  orText: {

  },
  alternativeBtn: {

  },
  alternativeBtnText: {

  }
});

export default Register;