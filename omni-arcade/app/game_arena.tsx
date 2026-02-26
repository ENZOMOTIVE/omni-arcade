import { appRed } from "@/constants/theme";
import { Button, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// The screen that contains most of the Games
export default function GameArena(){

    return(


            <View style={{flex: 1, justifyContent: "center",alignItems: 'center', backgroundColor: "#000", gap: 20}}>
                
                <View style= {{backgroundColor: appRed, height: 150, width: 150, justifyContent: "center",alignItems: 'center'}}>
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: '900'}}>
                        L U D O
                    </Text>
                    

                </View>

                <Button 
                title="start"
                color={appRed}

                />

                
            </View>

    )
}