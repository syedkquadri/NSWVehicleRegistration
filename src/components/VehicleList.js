import React from 'react';
import {Text, StyleSheet, FlatList, TouchableOpacity, View} from 'react-native';
import VehicleSummary from './VehicleSummary'
import {withNavigation} from 'react-navigation';

const VehicleList = ({ title, vehicles, navigation}) => {

    return (
            <View style={styles.scrollableArea}>
                {vehicles.length > 0 ? <Text style={styles.title}>{title} ({vehicles.length})</Text>: <Text style={styles.title}>No recrods found</Text>}                
                <FlatList
                    data={vehicles}
                    keyExtractor={(vehicles) => vehicles.vehicle.vin}
                    renderItem={
                        ({item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('VehicleDetail', { vin: item.vehicle.vin})}>
                                <VehicleSummary vehicle={item} />
                            </TouchableOpacity>
                        )
                        }
                    }
                />
            </View>            
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    scrollableArea: {
        flex: 1      
    }
});

export default withNavigation(VehicleList);