import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import PreviousRounds from "./components/PreviousRounds";
import NewRound from "./screens/NewRound";
import MapScreen from "./screens/MapScreen";
import CourseSelect from "./components/CourseSelect";
import { Provider } from "react-redux";
import { store } from "./store";
import Scorecard from "./components/Scorecard";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Rounds" component={PreviousRounds} />
          <Stack.Screen name="Start New Round" component={NewRound} />
          <Stack.Screen name="GPS" component={MapScreen} />
          <Stack.Screen name="Scorecard" component={Scorecard} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
