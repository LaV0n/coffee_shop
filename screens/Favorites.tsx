import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import {useAppSelector} from "../bll/store";
import React from 'react';
import { CapOfCoffee } from '../components/CapOfCoffee/CapOfCoffee';
import { ScrollView } from 'react-native';

export  function Favorites() {

  const coffee=useAppSelector(state => state.coffee.startData)

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <View style={styles.caps}>
      {coffee.map(c=>c.favorite?<CapOfCoffee key={c.id} data={c}/>:null)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  title: {
    marginTop:40,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center'
  },
  caps: {
    marginTop: 25,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
