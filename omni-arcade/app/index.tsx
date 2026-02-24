import { View, Text, StyleSheet } from "react-native";
import { Image } from 'expo-image';

export default function HomeScreen() {
    const PlaceholderImage = require('@/assets/images/app_logo.png');
    return (
        <View style={styles.container}>
           
            <Image
                source={PlaceholderImage}
                style={styles.logo}
            />

            <Text style={styles.text}>
                This is the Home Screen
            </Text>
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