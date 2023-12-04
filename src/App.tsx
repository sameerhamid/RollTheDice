import React from 'react';
import type {PropsWithChildren} from 'react';

import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
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
      <Image height={dimensions.vh * 30} source={imageUrl} />
    </View>
  );
};
function App() {
  console.log(dimensions);

  return (
    <SafeAreaView>
      <View>
        <Text>sameer</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
