import React, { useState } from 'react';
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import SearchBar from '../components/SearchBar';
import VehicleList from '../components/VehicleList';
import useVehicles from '../hooks/useVehicles';

const SearchVehiclesScreen = () => {
    const [searchCriteria, setSearchCriteria] = useState('');
    const [searchApi, vehicles, errorMessage, loading] = useVehicles(searchCriteria);
    
    if(loading)
    {
        return <ActivityIndicator style={styles.loader} size="large" color="blue" />
    }

    return (
    <SafeAreaView style={styles.container}>
        <SearchBar searchCriteria={searchCriteria} 
            onSearchCriteriaChange={setSearchCriteria} 
            onSearchCriteriaSubmit={() => {
                searchApi(searchCriteria);
            }} />
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        <VehicleList vehicles={vehicles} title="Vehicles"></VehicleList>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1
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

export default SearchVehiclesScreen;
