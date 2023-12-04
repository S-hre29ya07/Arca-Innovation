import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AddEmployeeScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddEmployee = () => {
    // Add logic to add employee locally
  };

  return (
    <View>
      <Text>Add Employee</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <Button title="Add Employee" onPress={handleAddEmployee} />
    </View>
  );
};

export default AddEmployeeScreen;
