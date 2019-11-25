import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ label, onPress, children }) => {
  return <TouchableOpacity onPress={onPress}>{children || <Text>{label}</Text>}</TouchableOpacity>;
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
