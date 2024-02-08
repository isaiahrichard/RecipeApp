import React, {useState, useContext, useEffect} from 'react'
import {View, StyleSheet, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import theme from '../../data/Style'
import { StateContext } from '../Context/StateContext';

const RecipePageBase = () => {

    const imgSrc = require('../../Images/DummyRecipe.png')
    const backArrow = require('../../Images/BackArrow.png')

    const [checked, setChecked] = useState({}); 
    const [timeInfo, setTimeInfo] = useState([])
    const [ingredientList, setIngredientList] = useState([])
    const [instructionsList, setInstructionList] = useState([])

    const [currentRecipe, setCurrentRecipe] = useContext(StateContext).curretnRecipeObj
    const navigation = useContext(StateContext).navigation

    useEffect(() => {
        setTimeInfo([
            {name: 'Prep Time', time: currentRecipe.prepTime}, 
            {name: 'Cook Time', time: currentRecipe.cookTime}, 
            {name: 'Total Time', time: currentRecipe.totalTime}
        ])
        setIngredientList(currentRecipe.ingredients)
        instruction = []
        currentRecipe.instructions.forEach((instructionElem, index) => {
            let instructionObj = {id: index, text: instructionElem}
            instruction.push(instructionObj)
        });
        setInstructionList(instruction)
    }, [currentRecipe])
    
    
  return (
    <View style={{flex: 1, backgroundColor: theme.BACKGROUND_COLOUR}}>
        <ScrollView>
            <View>
                <Image source={imgSrc} style={styles.CardImg}/>
                <View style={styles.TitleWrapper}>
                    <Text style={styles.HeaderTitle}>{currentRecipe.name}</Text>
                </View>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('home')}>
                        <Image source={backArrow}style={styles.backArrow}/>
                </TouchableOpacity>
            </View>
            <View style={styles.BodyCard}>
                <View style={styles.TimeInfo}>
                    {timeInfo.map((timeInfo) => <View style={{display: 'flex', alignItems: 'center'}}>
                        <Text style={{fontSize: 12, fontWeight: '700'}}>{timeInfo.name}</Text>
                        <Text style={{fontSize: 12}}>{timeInfo.time}</Text>
                    </View> )}
                </View>
                <View style={styles.ListWrapper}>
                    <Text style={styles.ListTitle}>Ingredients</Text>
                    {ingredientList.map((ingredient) => <View style={styles.ListItemWrapper}>
                        <View style={styles.CheckListCircle} />
                        <Text>{ingredient}</Text>
                        </View>)}
                </View>
                <View >
                    <Text style={[styles.ListTitle, {paddingLeft: 12}]}>Instructions</Text>
                    {instructionsList.map((instruction) => <View style={[styles.ListItemWrapper, {marginBottom: 5}]}>
                        <CheckBox 
                        value={checked[instruction.id]}
                        onValueChange={(newValue) => { setChecked({...checked, [instruction.id]: newValue}) }}
                        />
                        <Text style={{paddingRight: 20}}>{instruction.text}</Text>
                        </View>)}
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    TitleWrapper: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    backButton:{
        position: 'absolute', 
        top: 5, 
        left: 5, 
        height: 22,
        width: 22,
        borderRadius: 50,
        backgroundColor: theme.PRIMARY_COLOUR,
        padding: 3
    }, 
    backArrow:{
        flex: 1,
        height: undefined,
        width: undefined,
        opacity: 1
    },
    HeaderTitle: {
        fontSize: 40,
        fontWeight: '900',
        color: 'black',
        fontFamily: 'Poppins-Regular',
        textAlign: 'center'
    },
    CardImg: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        opacity: 0.7
    },
    BodyCard: {
    },
    TimeInfo: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-around',
        paddingVertical: 20,
        backgroundColor: theme.SECONDARY_COLOUR
    },
    ListTitle: {
        fontSize: 26
    },
    ListWrapper: {
        paddingHorizontal: 12,
        marginBottom: 20
    },
    ListItemWrapper: {
        display: 'flex', 
        flexDirection:'row', 
        alignItems: 'center'
    },
    CheckListCircle: {
        height: 5, 
        width: 5, 
        borderRadius: 50,
        backgroundColor: 'black',
        marginRight: 5
    }
  });

export default RecipePageBase