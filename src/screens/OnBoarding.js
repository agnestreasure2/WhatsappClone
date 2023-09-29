import React from "react";
import { Text,
     View,
      Dimensions, 
      Image,
       StyleSheet, 
       SafeAreaView } from "react-native";
       import SwiperFlatList from "react-native-swiper-flatlist";

       const lists = [
        {
            id: 1,
            // title: "Welcome to ChowNow...",
            text: "From Meta",
            image: require("../assets/images/whatsapp-logo.png"),
        },
       
    ];
    
    // try {
    // 	await AsyncStorage.setItem("@viewedOnboarding", "true");
    // } catch (error) {
    // 	console.log("Error @setItem", error);
    // }
    const Slide = ({ item }) => (
        <SafeAreaView>
            <View style={styles.slideContainer}>
                <View style={styles.child}>
                    <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.containerTwo}>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            
            </View>
        </SafeAreaView>
    );
    
    const OnBoarding = () => {
        return (
            <SwiperFlatList
                index={0}
                showPagination
                data={lists}
                bounces={false}
                // paginationStyle={styles.pagination}
                PaginationActiveColor={styles.active}
                paginationStyleItemActive={styles.active}
                // paginationStyleItem={styles.dot}
                paginationStyleItemInactive={styles.inactive}
                renderItem={({ item }) => <Slide item={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        );
    };
    
    const { width } = Dimensions.get("window");
    const styles = StyleSheet.create({
        slideContainer: {
            flex: 1,
            width,
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            marginTop: Platform.OS === "ios" ? 0 : 35,
        },
        image: {
            marginTop: 200,
            width: "25%",
            height: 100,
            resizeMode: "cover",
            // marginTop: Platform.OS === "ios" ? 5 : 15,
            borderRadius: Platform.OS === "ios" ? 30 : 20,
        },
    
        child: {
            flexDirection: "row",
            flexWrap: "wrap",
            overflow: "hidden",
        },
       
        container: {
            marginTop: 30,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },
        // title: {
        //     fontSize: 20,
        //     color: "#121212",
        //     fontFamily: "satoshi-bold",
        //     fontWeight: 700,
        // },
        containerTwo: {
            marginTop: 140,
    
            alignItems: "center",
        },
        text: {
            fontSize: 14,
            color: "#6B6C6C",
            fontFamily: "satoshi-regular",
            fontWeight: 400,
            textAlign: "center",
            marginTop: 100,
        },
    
    });
    
    export default OnBoarding;
    