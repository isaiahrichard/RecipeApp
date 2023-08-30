import React from 'react'
import {View, StyleSheet, Image, TextInput} from 'react-native';
const FieldInputBox = ({icon='', value, setValue, placeholder}) => {
    
  return (
    <View style={styles.InputWrapper}>
        {icon &&
            <View style={styles.IconWrapper}>
                <Image source={icon}/>
            </View>
        }
        <View style={styles.InputBox}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#515151"
                underlineColorAndroid="transparent"
                spellCheck={false}
                value={value}
                onChangeText={(inputText) => setValue(inputText)}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    InputBox: {
        flexGrow: 2.5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingLeft: 10,
    },
    InputWrapper : {
        flexDirection: 'row',
        marginHorizontal: 55,
        marginTop: 22,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#686060',
    },
    IconWrapper: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 50,
        borderRightWidth: 1,
        borderRightColor: '#686060',
    }
  });

export default FieldInputBox