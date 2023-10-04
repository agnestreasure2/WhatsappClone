import React, { useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';

import Header from "../components/Header";

const Chats = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState(""); // Define searchText state
    const [isFilterActive, setFilterActive] = useState(false); // Define isFilterActive state

    const handleSearchChange = (text) => {
        setSearchText(text); // Update searchText state when input changes
    }
    const [activeTab, setActiveTab] = useState('restaurant');

    const handleCategoryPress = (category) => {
      setActiveTab(category);
    };

    return (
        <View>

<Header />
        <ScrollView>
           
            <View>
                <Text style={styles.Chats}>Chats</Text>
                <View style={styles.searchBar}>
                    <Image
                        source={require("../assets/icons/search.png")}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        style={styles.searchText}
                        placeholder="Search"
                        value={searchText}
                        onChangeText={handleSearchChange}
                    />
                    <Image
                        source={require("../assets/icons/filter-icon.png")}
                        style={styles.filter}
                    />
                   
                </View>
            </View>
            <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => handleCategoryPress('broadcastlists')}>
          <Text style={[styles.tabText, activeTab === 'broadcastlists' && styles.activeTabText]}>Broadcast Lists</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCategoryPress('newgroup')}>
          <Text style={[styles.tabText, activeTab === 'newgroup' && styles.activeTabText]}>New Group</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      // backgroundColor: '#ffffff',
      marginTop: 15,
    },
    Chats: {
        fontSize: 24,
        fontFamily: 'satoshi-bold',
        left: 7,
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#888989",
        borderRadius: 12,
        gap: 12,
        padding: 8,
        width: 290,
        height: 35,
        left: 8,
      },
      searchIcon: {
        // marginRight: 10,
        width: 25,
        height: 12,
        justifyContent: "center",
        tintColor: "#6B6C6C",
        left: 15,
      },
      searchText: {
        flex: 1,
        fontSize: 16,
        color: "black",
        paddingLeft: 1,
        justifyContent: "center",
        borderRadius: 7,
        marginRight: 3,
        right: 7,
      },
      filter: {
        position: "absolute",
        borderRadius: 8,
        padding: 5,
        marginLeft: 310,
        width: 30,
        height: 30,
        tintColor: '#0096FF',
      },
      tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        marginTop: 20,
      },
      tabText: {
        fontSize: 16,
        fontWeight: '500',
        right: 25,
        color: '#0096FF',
        
      },
      activeTabText: {
        color: '#0096FF',
      },
    
}); 


export default Chats;
