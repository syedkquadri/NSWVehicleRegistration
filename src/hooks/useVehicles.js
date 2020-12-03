import {useEffect, useState} from 'react';
import nswVehicleRegistration from '../api/nswVehicleRegistration';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-community/async-storage';

export default (vin) => {
    const [vehicles, setVehicles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true);

    const searchApi = async () => {
        try
        {   setErrorMessage('')
            let isConnected = (await NetInfo.fetch()).isConnected; 
            if(!isConnected)
            {
                //Fetch from cache
                let vehiclesOffline = await AsyncStorage.getItem('vehicles')
                if (vehiclesOffline != null)
                {
                    setVehicles(JSON.parse(vehiclesOffline).filter (record => {
                        if(vin === '')
                            return record
                        
                        return record.vehicle.vin.includes(vin);
                    }))                    
                }
                setLoading(false)
                return;
            }        

            const response = await nswVehicleRegistration.get('/', {
                params:{
                limit: 5,
                vin
                }
            })

            await AsyncStorage.setItem('vehicles', JSON.stringify(response.data.registrations))

            setLoading(false)
            setVehicles(response.data.registrations.filter (record => {
                if(vin === '')
                    return record
                
                return record.vehicle.vin.includes(vin);
            }))
                        
        }
        catch(err)
        {
            console.log(err);
            setErrorMessage('Something went wrong...')
        }
    };

    useEffect(() => {
        searchApi('');
    }, []);

    return [searchApi, vehicles, errorMessage, loading]
};

