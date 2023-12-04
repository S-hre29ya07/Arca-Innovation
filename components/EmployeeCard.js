// components/EmployeeCard.js
import React from 'react';
import { View, Text } from 'react-native';

const EmployeeCard = ({ employee }) => {
  return (
    <View style={{ backgroundColor: employee.backgroundColor, padding: 10, margin: 10 }}>
      <Text>Name: {employee.name}</Text>
      <Text>Email: {employee.email}</Text>
      <Text>Phone: {employee.phone}</Text>
      <Text>Manager: {employee.parentId ? 'Yes' : 'No'}</Text>
    </View>
  );
};


export default EmployeeCard;
