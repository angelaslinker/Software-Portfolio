import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import Button from '../Button';

//Creates a layout for each clothing item
//Each page will include the Name, Price/tagline and image

const ClothingItem = (props) => {

  const { name, tagline, image} = props.clothes;

    return (
        <View style={styles.productContainer}>
  
          <ImageBackground
            source={image}
            style={styles.image} 
          />
  
          <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>
              {tagline}
              </Text>
          </View>
          
          
          {/* Creates buttons on each page that pop up with a "warning"
          when pressed to notify that the buttons have been pressed */}
          <View style={styles.buttonsContainer}>
          <Button type='primary' 
          content={"Order"}
          onPress={() => {
            console.warn("Order Was Pressed");
          }}
          />

          <Button type='secondary' 
          content={"Inventroy"}
          onPress={() => {
            console.warn("Existing Inventory Was Pressed");
          }}
          />

        </View>
        </View>
    );
};

export default ClothingItem;