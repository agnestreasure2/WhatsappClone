import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome5 from react-native-vector-icons
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
      <TouchableOpacity>
        <Text size={24} color="black" style={styles.edit}>Edit</Text>
      </TouchableOpacity>
        <View style={styles.rightIcons}>
          <Ionicons name="ios-camera-outline" size={24} color="black" style={styles.icon1} />
          <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
          {/* <FontAwesome5.Button
              name="pencil-alt" size={24}  color="black" style={styles.icon} /> */}
              <Image
              source={require('../assets/icons/edit.png')}
              size={24}  color="black" style={styles.icon}
            />
         
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // backgroundColor: '#ffffff',
    marginTop: 15,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    right: 5,
  },
  edit: {
    marginTop: 9,
    fontSize: 16,
    color: '#0096FF',

  },
  icon1: {
    marginRight: 30,
    tintColor:  '#0096FF',
  },
  icon: {
    width: 24,
    height: 24,
    justifyContent: 'space-between',
    tintColor:  '#0096FF',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
   
  },
 
});

export default Header;
