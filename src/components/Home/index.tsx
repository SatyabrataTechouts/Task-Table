import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';



const TableRow = ({number, name, age, occupation }:any) => {
    return (
      <View style={styles.row}>
        <Text style={styles.cell}>{number}</Text>
        <Text style={styles.cell}>{name}</Text>
        <Text style={styles.cell}>{age}</Text>
        <Text style={styles.cell}>{occupation}</Text>
      </View>
    );
  };
const Home =  () => {
    
   
    
  return (

    <ScrollView >
    <ScrollView horizontal>
    <View style={styles.table}>
      <TableRow number={"number"} name="Name" age="Age" occupation="occupation" />
      <TableRow number={1} name="John" age="30" occupation="Engineer" />
      <TableRow number={2} name="Jane" age="28" occupation="Designer" />
      <TableRow number={3} name="Bob" age="35" occupation="Developer" />
      <TableRow number={4} name="John" age="30" occupation="Engineer" />
      <TableRow number={5} name="Jane" age="28" occupation="Designer" />
      <TableRow number={6} name="Bob" age="35" occupation="Developer" />
      <TableRow number={7} name="John" age="30" occupation="Engineer" />
      <TableRow number={8} name="Jane" age="28" occupation="Designer" />
      <TableRow number={9} name="Bob" age="35" occupation="Developer" />
      <TableRow number={10} name="John" age="30" occupation="Engineer" />
      <TableRow number={11} name="Jane" age="28" occupation="Designer" />
      <TableRow number={12} name="Bob" age="35" occupation="Developer" />
      <TableRow number={13} name="John" age="30" occupation="Engineer" />
      <TableRow number={14} name="Jane" age="28" occupation="Designer" />
      <TableRow number={15} name="Bob" age="35" occupation="Developer" />
      <TableRow number={16} name="John" age="30" occupation="Engineer" />
      <TableRow number={17} name="Jane" age="28" occupation="Designer" />
      <TableRow number={18} name="Bob" age="35" occupation="Developer" />
     
    </View>
    </ScrollView>
    </ScrollView>
  )
}

export default Home
const styles = StyleSheet.create({
    table: {
      borderWidth: 1,
      borderColor: '#000',
      width:900
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#000',
      
    },
    cell: {
      flex: 1,
      textAlign: 'center',
      borderRightWidth:1,
    
    },
  });