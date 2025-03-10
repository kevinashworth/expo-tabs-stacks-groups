import { Pressable, Text, View } from "react-native";

import { Link } from "expo-router";

export default function HomePage() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        Page "pushed WITHIN" the tab bar because it's UNDER the "tabs" file
        structure. Upon clicking, the tab bar will remain visible.
      </Text>

      <Link href="/home/settings" asChild>
        <Pressable>
          <Text> Settings Page</Text>
        </Pressable>
      </Link>
    </View>
  );
}
