import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';
const VehicleDetail = ({vehicle}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.containerTitle}>Plate Details</Text>            
            <View style={styles.subContainer}>
                <View style={styles.columnStyle}>                
                    <Text style={styles.fieldTitle}>Plate Number: </Text>
                    <Text>{vehicle.plate_number}</Text>
                </View>
            </View>

            <Text style={styles.containerTitle}>Registration Details</Text>            
            <View style={styles.subContainer}>
                <View style={styles.columnStyle}>
                    <Text style={styles.fieldTitle}>Expiry Date: </Text>                    
                    <Text>{moment(vehicle.registration.expiry_date).format('DD MMMM YY')}</Text>
                </View>
                <View style={styles.columnStyle}>
                    <Text style={styles.fieldTitle}>Status: </Text>
                    {vehicle.registration.expired ? <Text style={styles.expired}>expired</Text> : <Text>{moment(vehicle.registration.expiry_date).diff(Date.now(), "months") + ' months to expiry'}</Text>}
                </View>                
            </View>

            <Text style={styles.containerTitle}>Vehicle Details</Text>
            <View style={styles.subContainer}>
                <View style={styles.columnStyle}>
                    <Text style={styles.fieldTitle}>Type: </Text>
                    <Text>{vehicle.vehicle.type}</Text>
                    <Text style={styles.fieldTitle}>Make: </Text>                    
                    <Text>{vehicle.vehicle.make}</Text>
                    <Text style={styles.fieldTitle}>Model: </Text>                    
                    <Text>{vehicle.vehicle.model}</Text>
                    <Text style={styles.fieldTitle}>Colour: </Text>                    
                    <Text>{vehicle.vehicle.colour}</Text>                    
                </View>
                <View style={styles.columnStyle}>
                    <Text style={styles.fieldTitle}>VIN: </Text>                    
                    <Text>{vehicle.vehicle.vin}</Text>
                    <Text style={styles.fieldTitle}>Tare Weight: </Text>                                        
                    <Text>{vehicle.vehicle.tare_weight}</Text>
                    {vehicle.vehicle.gross_mass ? <Text style={styles.fieldTitle}>Gross Mass: </Text> : null}                                        
                    {vehicle.vehicle.gross_mass ? <Text>{vehicle.vehicle.gross_mass}</Text> : null}
                </View>                
            </View>

            <Text style={styles.containerTitle}>Insurance Details</Text>
            <View style={styles.subContainer}>
                <View style={styles.columnStyle}>
                <Text style={styles.fieldTitle}>Name: </Text>                    
                    <Text>{vehicle.insurer.name}</Text>
                </View>
                <View style={styles.columnStyle}>
                    <Text style={styles.fieldTitle}>Code: </Text>                
                    <Text>{vehicle.insurer.code}</Text>
                </View>                    
            </View>                
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        padding: 5,
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 5,
        flex: 1
    },
    subContainer: {
        flexDirection: 'row',
        marginLeft: 15
    },
    columnStyle: {
        flex: 1,
        flexDirection: 'column'     
    },                  
    containerTitle:{
        fontWeight: 'bold',
        fontSize: 16
    },
    fieldTitle:{
        fontWeight: 'bold'
        
    },    
    expired:{
        color: 'red'
    }
});

export default VehicleDetail;