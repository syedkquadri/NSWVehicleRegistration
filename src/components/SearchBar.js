import React from 'react';
import {View, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({searchCriteria, onSearchCriteriaChange, onSearchCriteriaSubmit}) => {
    return (
    <View style={styles.backgroundStyle}> 
        <FontAwesomeIcon style={styles.iconStyle} name="search" />
        <TextInput style={styles.inputStyle} 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search VIN"
            value= {searchCriteria}
            onChangeText={onSearchCriteriaChange}
            onEndEditing={onSearchCriteriaSubmit} >
        </TextInput>
    </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: 'lightgray',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        color: "#0069B7",
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;
