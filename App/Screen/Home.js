import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  const logo = require("../../assets/logo.webp");
  const nav = useNavigation();
  const [ballAnimationTriggered, setBallAnimationTriggered] = useState(false);
  const [ballAnimationTriggered2, setBallAnimationTriggered2] = useState(false);
  const ballScale = useRef(new Animated.Value(1)).current;
  const ballScale2 = useRef(new Animated.Value(1)).current;

  const navigate = () => {
    setBallAnimationTriggered(true);
    Animated.timing(ballScale, {
      toValue: 20,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      nav.navigate('login'); 
    });
  };

  const navigate2 = () => {
    setBallAnimationTriggered2(true);
    Animated.timing(ballScale2, {
      toValue: 20,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      nav.navigate('signup'); 
    });
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#0F172A", flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={logo}
          style={{
            width: 250,
            height: 250,
            resizeMode: "contain",
            borderRadius: 10,
            marginBottom: 20,
          }}
        />
        <Text
          style={{
            color: "#85C898",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Welcome to Einco
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Manage, visualize, and track your finances effortlessly.
        </Text>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <TouchableOpacity
            onPress={navigate2}
            style={{
              backgroundColor: "transparent",
              paddingVertical: 15,
              paddingHorizontal: 50,
              borderColor: "#85C898",
              borderWidth: 2,
              borderRadius: 25,
              marginBottom: 20,
            }}
          >
            <Text style={{ color: "#ffffff", fontSize: 16, fontWeight: "600" }}>
              Sign up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigate}
            style={{
              backgroundColor: "#85C898",
              paddingVertical: 15,
              paddingHorizontal: 50,
              borderRadius: 25,
              marginBottom: 20,
            }}
          >
            <Text style={{ color: "#0F172A", fontSize: 16, fontWeight: "600" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        {ballAnimationTriggered && (
        <Animated.View
          style={[styles.ball, { transform: [{ scale: ballScale }] }]}
        />
      )}

{ballAnimationTriggered2 && (
        <Animated.View
          style={[styles.ball2, { transform: [{ scale: ballScale2 }] }]}
        />
      )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ball: {
    width: 50,
    height: 50,
    backgroundColor: '#85C898',
    borderRadius: 25,
    position: 'absolute',
  },
  ball2: {
    width: 50,
    height: 50,
    backgroundColor: '#0F172A',
    borderRadius: 25,
    position: 'absolute',
  },
})

export default Home;
