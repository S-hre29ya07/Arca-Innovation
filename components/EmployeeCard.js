// components/EmployeeCard.js
import React from 'react';
import { View, Text } from 'react-native';

const EmployeeCard = ({ employee }) => {
  return (
    <View style={{ backgroundColor: employee.backgroundColor, padding: 10, margin: 10 }}>
      <Text>ID: {employee.id}</Text>
      <Text>Name: {employee.name}</Text>
      <Text>Email: {employee.email}</Text>
      <Text>Address: {employee.address}</Text>
      <Text>Phone: {employee.phone}</Text>     
      <Text>Manager: {employee.parentId}</Text>
      <Text>Background color: {employee.backgroundColor}</Text>
    </View>
  );
};



export default EmployeeCard;
