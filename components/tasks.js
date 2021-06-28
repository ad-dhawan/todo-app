import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Tasks = (props) => {
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
backgroundColor: "#fff",
padding: 15,
borderRadius: 10,
flexDirection: 'row',
alignItems: 'center',
marginBottom: 20,
justifyContent: 'space-between'
    },
itemLeft:{
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
},
square:{
    width: 24,
    height: 24,
    backgroundColor: '#55bcf6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
},
itemText:{
    maxWidth: '80%',
},
circle:{
    width: 12,
    height: 12,
    borderColor: '#55bcf6',
    borderWidth: 2,
    borderRadius: 5,
},
})

export default Tasks