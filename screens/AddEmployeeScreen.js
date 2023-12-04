import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const AddEmployeeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [parentId, setParentId] = useState('');
  const [bgcolor, setBgColor] = useState('');

  const handleAddEmployee = async () => {
    try {
      const newEmployee = {
        id: Date.now().toString(), 
        name,
        email,
        address,
        phone,
        parentId,
        backgroundColor: bgcolor,
      };

      // Retrieve existing data from local storage
      const existingData = JSON.parse(await AsyncStorage.getItem('employees')) || [];

      // Add the new employee data to the existing data
      const updatedData = [...existingData, newEmployee];

      // Save the updated data back to local storage
      await AsyncStorage.setItem('employees', JSON.stringify(updatedData));

      // Clear the form fields
      setName('');
      setEmail('');
      setAddress('');
      setPhone('');
      setParentId('');
      setBgColor('');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error saving employee data:', error);
      // Handle error
    }
  };

  return (
    <View>
      <Text>Add Employee</Text>
      <TextInput placeholder="Name" value={name} onChangeText={(text) => setName(text)} />
      <TextInput placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
      <TextInput placeholder="Address" value={address} onChangeText={(text) => setAddress(text)} />
      <TextInput placeholder="Phone" value={phone} onChangeText={(text) => setPhone(text)} />
      <TextInput placeholder="Parent ID" value={parentId} onChangeText={(text) => setParentId(text)} />
      <TextInput
        placeholder="Background Color"
        value={bgcolor}
        onChangeText={(text) => setBgColor(text)}
      />
      <Button title="Add Employee" onPress={handleAddEmployee} />
    </View>
  );
};

export default AddEmployeeScreen;
