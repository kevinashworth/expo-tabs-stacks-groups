//links to open OUTSIDE tab bar

import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function PostsPage() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ padding: 8, fontSize: 20, marginBottom: 16 }}>
        Post detail pages are "pushed ABOVE" the tab bar because `[id].tsx` is
        OUTSIDE the "tabs" file structure. Upon clicking, the tab bar will NOT
        be visible.
      </Text>
      <Link
        href="/posts/1"
        style={{
          color: "rgb(0,122,255)",
          fontSize: 20,
          textDecorationLine: "underline",
        }}
      >
        Post 1
      </Link>
      <Link
        href="/posts/2"
        style={{
          color: "rgb(0,122,255)",
          fontSize: 20,
          textDecorationLine: "underline",
        }}
      >
        Post 2
      </Link>
      <Link
        href="/posts/3"
        style={{
          color: "rgb(0,122,255)",
          fontSize: 20,
          textDecorationLine: "underline",
        }}
      >
        Post 3
      </Link>
      <Text
        style={{
          padding: 8,
          fontSize: 12,
          marginBottom: 16,
          color: "gray",
        }}
      >
        This page is{" "}
        <Text style={{ fontFamily: "SpaceMono" }}>app/(tabs)/post.tsx</Text>
      </Text>
    </View>
  );
}
