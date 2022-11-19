import React from 'react';
import {View, Text, FlatList, Dimension} from 'react-native';
import styles from './styles';
import clothinglist from './clothinglist';
import ClothingItem from '../Clothing';


//Uses a function so that I can call it in
//App.js and it displays the items information


const ClothingList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={clothinglist}
                renderItem={({item}) => <ClothingItem clothes={item} />}
            />
        </View>
    );
};

export default ClothingList;