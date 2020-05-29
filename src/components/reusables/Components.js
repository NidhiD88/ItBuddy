import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { fonts } from '../../components/constants/font';
import { colors } from '../../components/constants/color';
import { hasValue } from '../../components/utility';

export const CustomCard = ({children, style}) => {
  return (
    <View style={[{...styles.card, ...style}]}>
      {children}
    </View>
  );
};

export const CustomTextInput = (props) => {
  return (
      <TextInput
        style = {[{...styles.textInput, ...props.style}]}
        underlineColorAndroid = "transparent"
        placeholder = {hasValue(props.placeholder)?props.placeholder: null}
        secureTextEntry = {props.secureTextEntry? props.secureTextEntry: false}
        placeholderTextColor = "#cccccc"
        keyboardType = {hasValue(props.keyboardType)?props.keyboardType: null}
        onChangeText = {props.onChangeText}
        returnKeyType = {hasValue(props.returnKeyType)? props.returnKeyType: null}
        numberOfLines = {hasValue(props.numberOfLines)? props.numberOfLines: null}
        multiline = {hasValue(props.multiline)? props.multiline: null}
        onSubmitEditing = {props.onSubmitEditing}
        blurOnSubmit = {false}
        value = {props.value? props.value: null}/>
  );
};

export const CustomButton = (props) => {
  return (
    <TouchableOpacity style = {[{...styles.button, ...props.style}]}
      onPress={props.customClick}>
      <Text style={[{...styles.textBold}]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    elevation: 4,
    shadowColor: '#666',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  textInput: {
    borderBottomColor: '#cccccc',
    borderBottomWidth: 2,
    fontSize: fonts.font_20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: 45
  },
  textBold: {
    color: '#ffffff',
    fontSize: fonts.font_20,
    fontWeight: 'bold'
  },
  textRegular: {
    color: '#ffffff',
    fontSize: fonts.font_20,
    fontWeight: 'bold'
  },
});
