import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native';

const CardComp = ({title, imgSrc, cardText, extraStyles}) => {

  return (
    <View style={styles.CardWrapper}>
      <Text style={styles.CardTitle}>{title}</Text>
      <View style={{position: 'relative'}}>
        <Image
          source={imgSrc} 
          style={styles.CardImg}
        />
        <View style={[styles.CardTextWrapper]}>
          <Text style={[styles.CardText, extraStyles]}>{cardText}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  CardWrapper: {
    marginTop: 20,
    marginHorizontal: 16,
    padding: 0
  },
  CardTitle: {
    paddingBottom: 5,
    paddingLeft: 3,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Regular'
  },
  CardImg: {
    alignItems: 'stretch',
    alignSelf: 'stretch',
    resizeMode: 'stretch',
    margin: 0,
    width: 360,
    borderRadius: 10
  },
  CardTextWrapper: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  CardText:{
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '900',
    maxWidth: 275,
    fontFamily: 'Poppins-Regular',
    borderRadius:7
  }
});

export default CardComp