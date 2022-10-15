import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

//Creates button and tells the computer that the buttons
//will be pressed by the user

const Button = (props) => {

    const type = props.type;
    const content = props.content;
    const onPress = props.onPress;

    const backgroundColor = type == 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type == 'primary' ? 'wFFFFFFA6' : '#171A20CC';
    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
    


        </View>
    );
};

export default Button;