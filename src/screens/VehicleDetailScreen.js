import React from 'react';
import {StyleSheet, Text, ActivityIndicator} from 'react-native';
import useVehicles from '../hooks/useVehicles';
import VehicleDetail from '../components/VehicleDetail';
import {SafeAreaView} from 'react-navigation';

const VehicleDetailScreen = ({navigation}) => {
    const vin = navigation.getParam('vin')
    const [searchApi, vehicles, errorMessage] = useVehicles(vin);

    if(vehicles.length == 0)
    {
        return <ActivityIndicator style={styles.loader} size="large" color="blue" />
    }

    return (
    <SafeAreaView style={styles.container}> 
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}    
        {vehicles.length > 0 ? <VehicleDetail vehicle={vehicles[0]} />: null}
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
      },
      errorMessage:{
          marginLeft: 15,
          color: 'red',
          alignSelf: 'center'
      },
      loader: {
          flex: 1
      }
});


export default VehicleDetailScreen;