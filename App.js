import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import Stackscreen from "./src/navigations/StackScreen";
import { NavigationContainer } from "@react-navigation/native";



export default function App() {
	const [fontsLoaded] = useFonts({
		"satoshi-bold": require("./src/assets/fonts/Satoshi-Bold.otf"),
		"satoshi-regular": require("./src/assets/fonts/Satoshi-Regular.otf"),
		"satoshi-medium": require("./src/assets/fonts/Satoshi-Medium.otf"),
		"satoshi-italic": require("./src/assets/fonts/Satoshi-Italic.otf"),
		// "satoshi-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}
	onLayoutRootView();
	return (
		
		<SafeAreaProvider>
			<NavigationContainer>
				<Stackscreen />
			</NavigationContainer>
		</SafeAreaProvider>
		
		
		
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
