import React, { Component } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Icon } from 'expo';
import Colors from '../constants/Colors';

const icon_color = "#586069";
const icon_size = 15;

export default class IconButton extends React.Component {
  render() {
    const { icon, onPress, data } = this.props;

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          onPress(data);
        }}
      >
        <View>
          <Icon.Ionicons
            name={icon}
            size={icon_size}
            style={styles.icon}
            color={icon_color}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  icon: {
    paddingLeft: 5,
    paddingRight: 5
  }
};
