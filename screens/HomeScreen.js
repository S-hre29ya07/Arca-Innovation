// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, Button, TouchableOpacity } from 'react-native';
import { getEmployees } from '../services/employeeService';
import EmployeeCard from '../components/EmployeeCard';

const HomeScreen = ({ navigation }) => {
  const [employees, setEmployees] = useState([]);
  const [viewType, setViewType] = useState('list');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      // Handle error
    }
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('EmployeeDetails', { employee: item })}
      >
        <EmployeeCard employee={item} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Button title="Add Employee" onPress={() => navigation.navigate('AddEmployee')} />
      <Button title={`Switch to ${viewType === 'list' ? 'Card' : 'List'} View`} onPress={() => setViewType(viewType === 'list' ? 'card' : 'list')} />
      {viewType === 'list' ? (
        <FlatList
          data={employees}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      ) : (
        employees.map((employee) => <EmployeeCard key={employee.id} employee={employee} />)
      )}
    </View>
  );
};

export default HomeScreen;
