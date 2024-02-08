import React, {useEffect} from 'react'
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import ListComponent from '../common/ListComponent';

const IngredientList = ({displayList}) => {

  useEffect(() => {
    console.log(displayList.length)
  }, [displayList])
  

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={displayList}
          renderItem={({item}) => (
            <ListComponent item={item} />
          )}
          keyExtractor={item => item.id}
          removeClippedSubviews={true}
          maxToRenderPerBatch={8}
          initialNumToRender={20}
        />
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    item: {
      padding: 10,
      marginVertical: 2,
      marginHorizontal: 12,
      borderRadius: 10
    },
    title: {
      fontSize: 16,
    }
  });

export default IngredientList