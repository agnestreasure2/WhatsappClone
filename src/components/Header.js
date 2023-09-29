import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import { CartContext } from '../components/CartContext';

const Header = () => {
  const navigation = useNavigation();
  const { cartCount } = useContext(CartContext); // Retrieve cartCount from CartContext

  const openGoogleMaps = () => {
    const url = 'https://maps.google.com/';
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={openGoogleMaps}>
          <AntDesign name="enviromento" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openGoogleMaps}>
          <Text style={styles.location}>Click to view location</Text>
        </TouchableOpacity>
        <View style={styles.rightIcons}>
          <Ionicons name="ios-notifications-outline" size={24} color="black" style={styles.icon1} />
          <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
            <Feather name="shopping-cart" size={24} color="black" style={styles.icon} />
            {cartCount > 0 && (
              <View style={styles.cartCount}>
                <Text style={styles.cartCountText}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
    marginTop: 15,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    right: 5,
  },
  icon1: {
    marginRight: 15,
  },
  icon: {
    width: 24,
    height: 24,
    justifyContent: 'space-between',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  location: {
    fontWeight: '400',
    fontSize: 16,
    marginRight: 70,
    lineHeight: 24,
  },
  cartCount: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartCountText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Header;
