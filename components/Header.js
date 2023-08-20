import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import theme from '../data/Style'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>RecipEasy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
   header: {
    width: '100%',
    flexDirection: "row",
    height: 71,
    padding: 12,
    backgroundColor: theme.PRIMARY_COLOUR,
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 32,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontWeight: '700'
  }
});

export default Header;