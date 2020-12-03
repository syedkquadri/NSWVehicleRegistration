import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';
const VehicleSummary = ({vehicle}) => {
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
                    {vehicle.registration.expired ? <Text style={styles.expired}>expired</Text> : <Text style={styles.notExpired}>{moment(vehicle.registration.expiry_date).diff(Date.now(), "months") + ' months to expiry'}</Text>}
                </View>                
            </View>

            <Text style={styles.containerTitle}>Vehicle Details</Text>
            <View style={styles.subContainer}>
                <View style={styles.columnStyle}>
                    <Text style={styles.fieldTitle}>Make: </Text>                    
                    <Text>{vehicle.vehicle.make}</Text>
                </View>
                <View style={styles.columnStyle}>
                    <Text style={styles.fieldTitle}>VIN: </Text>                    
                    <Text>{'*******' + vehicle.vehicle.vin.slice(-4)}</Text>
                </View>                
            </View>
             
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
        padding: 5,
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 5
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
    ,    
    notExpired:{
        color: 'green'
    }    
});

export default VehicleSummary;