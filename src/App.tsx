import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';

import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import dimensions from '../theme/dimensions';
import DiceONe from '../assets/1.png';
import DiceTwo from '../assets/2.png';
import DiceThree from '../assets/3.png';
import DiceFour from '../assets/4.png';
import DiceFive from '../assets/5.png';
import DiceSix from '../assets/6.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps) => {
  return (
    <View>
      <Image style={styles.images} source={imageUrl} />
    </View>
  );
};
function App() {
  // const dices = [DiceONe, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix];
  // const [dice, setDice] = useState(dices[0]);
  // console.log(dimensions);
  const [dice, setDice] = useState(DiceONe);

  const handleDice = () => {
    let randomNumber = Math.floor(Math.random() * 7);
    // setDice(dices[randomNumber]);
    // console.log({dice});
    switch (randomNumber) {
      case 1:
        setDice(DiceONe);
        break;
      case 2:
        setDice(DiceTwo);
        break;
      case 3:
        setDice(DiceThree);
        break;
      case 4:
        setDice(DiceFour);
        break;
      case 5:
        setDice(DiceFive);
        break;
      case 6:
        setDice(DiceSix);
        break;
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Dice imageUrl={dice} />

        <TouchableOpacity onPress={handleDice}>
          <View style={styles.actionBtn}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
              Roll The Dice
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: dimensions.vh * 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    width: dimensions.vw * 40,
    height: dimensions.vh * 19,
  },
  actionBtn: {
    backgroundColor: 'teal',
    marginTop: dimensions.vh * 4,
    paddingHorizontal: dimensions.vw * 4,
    paddingVertical: dimensions.vh * 1,
    borderRadius: 30,
  },
});

export default App;
