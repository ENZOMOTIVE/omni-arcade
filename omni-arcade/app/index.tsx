import { View, Text, StyleSheet, Button } from "react-native";
import { Image } from 'expo-image';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router, useRouter } from "expo-router";
import { appRed } from "@/constants/theme";

export default function HomeScreen() {
    const PlaceholderImage = require('@/assets/images/app_logo.png');
    return (


       
        <View style={styles.container}>
           
            <Image
                source={PlaceholderImage}
                style={styles.logo}
            />

            <Button title="Play Games"
            color = {appRed}
            onPress={() => router.navigate('/game_arena')}
                   
            />
                

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center", // This centers the image and text vertically
        alignItems: "center",     // This centers them horizontally
    },
    logo: {
        width: 200,               // Adjust these sizes to fit your logo
        height: 200,
        marginBottom: 20,         // Adds space between the logo and the text
        resizeMode: 'contain',    // Ensures the logo isn't stretched
    },
    text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
    }
});