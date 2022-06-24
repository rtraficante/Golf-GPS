import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import PreviousRounds from "./components/PreviousRounds";
import NewRound from "./components/NewRound";
import GpsMap from "./components/GpsMap";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Rounds" component={PreviousRounds} />
        <Stack.Screen name="Start New Round" component={NewRound} />
        <Stack.Screen name="GPS" component={GpsMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
