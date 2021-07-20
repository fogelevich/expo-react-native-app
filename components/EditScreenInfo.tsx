import * as WebBrowser from "expo-web-browser";

import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "./Themed";

import Colors from "../constants/Colors";
import React from "react";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          ECOMMERCE PLATFORM
        </Text>
      </View>
      <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
        <View style={styles.helpContainer}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            BIPTIK
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync("https://biptik.com");
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    backgroundColor: "#fff",
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    color: "#000",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
});
