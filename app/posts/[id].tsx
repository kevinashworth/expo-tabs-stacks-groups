import { Stack, useGlobalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function DetailsPage() {
  const { id } = useGlobalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen options={{ headerTitle: `Details #${id} ` }} />
      <Text>Details for post {id}</Text>
    </View>
  );
}
