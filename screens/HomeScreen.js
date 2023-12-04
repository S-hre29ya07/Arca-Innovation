import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, Button, TouchableOpacity, Text } from 'react-native';
import { getEmployees } from '../services/employeeService';
import EmployeeCard from '../components/EmployeeCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [employees, setEmployees] = useState([]);
  const [viewType, setViewType] = useState('list');

  const fetchEmployees = useCallback(async () => {
    try {
      // Fetch data from the API
      const apiData = await getEmployees();
  
      // Fetch data from local storage
      const localStorageData = JSON.parse(await AsyncStorage.getItem('employees')) || [];
  
      // Merge API-fetched data with local storage data
      const mergedData = [...apiData, ...localStorageData];
  
      // Update the state with the merged data
      setEmployees(mergedData);
    } catch (error) {
      // Handle error
    }
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchEmployees);
    
    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [navigation, fetchEmployees]);

  const renderCardItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('EmployeeDetails', { employee: item })}>
        <EmployeeCard employee={item} />
      </TouchableOpacity>
    );
  };

  const renderListItem = ({ item }) => {
    return (
      <View style={{ marginVertical: 10, marginLeft: 20 }}>
        <Text>ID: {item.id}</Text>
        <Text>Name: {item.name}</Text>
        <Text>Email: {item.email}</Text>
        <Text>Phone: {item.phone}</Text>
        <Text>Address: {item.address}</Text>
        <Text>Manager: {item.parentId}</Text>
        <Text>Background color: {item.backgroundColor}</Text>
      </View>
    );
  };

  const handleRefresh = () => {
    // Manually trigger the fetchEmployees function to refresh the data
    fetchEmployees();
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Home</Text>
        <TouchableOpacity onPress={handleRefresh}>
          <Text style={{ color: 'blue' }}>Refresh</Text>
        </TouchableOpacity>
      </View>
      <Button title="Add Employee" onPress={() => navigation.navigate('AddEmployee')} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
        <Button title="Switch to Card View" onPress={() => setViewType('card')} />
        <Button title="Switch to List View" onPress={() => setViewType('list')} />
      </View>
      {viewType === 'card' ? (
        <FlatList
          data={employees}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCardItem}
          style={{ flex: 1 }}
        />
      ) : (
        <FlatList
          data={employees}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderListItem}
          style={{ flex: 1 }}
        />
      )}
    </View>
  );
};

export default HomeScreen;
