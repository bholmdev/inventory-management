import { Text, View } from 'react-native';
import React, { Component } from 'react';

const AddInventoryScreen = () => {
    return (
        <View>
            <Text style={{ textAlign: 'center', marginTop: 40, backgroundColor:"#4444", padding: 20 }}>New Inventory</Text>
            <Text>+ inventory</Text>
        </View>
    )
}

export default AddInventoryScreen;