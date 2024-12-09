import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignUp = () => {
  const nav = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // save info in redux store

  const handleSignUp = async () => {
    if (!username || !password || !email) {
      Alert.alert("Validation Error", "Please provide a username and password.");
    }
    try {
      const response = await fetch(
        `https://final-project-backend-9io5wpxd9-joshs-projects-9174c388.vercel.app/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password, email }),
        }
      );
      const data = await response.json();
      if (data.Success) {
        console.log(data);
        // setUserid(String(data.User._id));
        // dispatch(setUser(data.User)) <-- need implementation
        nav.navigate("budgets");
      }
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#0F172A",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <Text
        onPress={() => nav.navigate("home")}
        style={{
          fontSize: 20,
          position: "absolute",
          top: 0,
          padding: 40,
          color: "white",
          alignSelf: "left",
        }}
      >
        Back
      </Text>
      <View
        style={{
          width: "100%",
          padding: 30,
          backgroundColor: "tranparent",
          borderWidth: 2,
          borderColor: "transparent",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Sign up for Einco
        </Text>
        <View style={{ width: "100%", marginBottom: 20 }}>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="username"
            placeholderTextColor="#aaa"
            style={{
              backgroundColor: "none",
              color: "white",
              fontSize: 16,
              borderWidth: 2,
              borderColor: "#85C898",
              borderRadius: 10,
              paddingVertical: 15,
              paddingHorizontal: 20,
              marginBottom: 15,
            }}
          />

          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor="#aaa"
            style={{
              backgroundColor: "none",
              color: "white",
              fontSize: 16,
              borderWidth: 2,
              borderColor: "#85C898",
              borderRadius: 10,
              paddingVertical: 15,
              paddingHorizontal: 20,
              marginBottom: 15,
            }}
          />
          <TextInput
          onChangeText={setPassword}
          value={password}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={{
              backgroundColor: "none",
              color: "white",
              fontSize: 16,
              borderWidth: 2,
              borderColor: "#85C898",
              borderRadius: 10,
              paddingVertical: 15,
              paddingHorizontal: 20,
              marginBottom: 15,
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#85C898",
            paddingVertical: 15,
            paddingHorizontal: 50,
            borderRadius: 25,
            marginBottom: 20,
            width: "100%",
            alignItems: "center",
          }}
          onPress={handleSignUp}
        >
          <Text style={{ color: "#0F172A", fontSize: 16, fontWeight: "600" }}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 10, textAlign: "right" }}>
          <Text style={{ color: "white", fontSize: 14, fontWeight: "500" }}>
            Already have an account?{" "}
            <Text
              style={{ color: "#85C898", fontWeight: "bold" }}
              onPress={() => nav.navigate("login")}
            >
              Login
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
