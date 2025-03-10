//links to open OUTSIDE tab bar

import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function PostsPage() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        Pages "pushed ABOVE" the tab bar because it's OUTSIDE the "tabs" file
        structure. Upon clicking, the tab bar will NOT be visible.
      </Text>
      <Link href="/posts/1" style={{ fontSize: 20, color: "blue" }}>
        Post 1
      </Link>
      <Link href="/posts/2" style={{ fontSize: 20, color: "blue" }}>
        Post 2
      </Link>
      <Link href="/posts/3" style={{ fontSize: 20, color: "blue" }}>
        Post 3
      </Link>
    </View>
  );
}
