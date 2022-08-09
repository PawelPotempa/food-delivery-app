import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const PreparingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-[#5c99fa] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/orderLoading.gif")}
        animation="slideInDown"
        iterationCount={1}
        className="flex-1 -mt-12"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-xl mx-10 my-20 text-white font-bold text-center"
      >
        Waiting for the restaurant to accept your order!
      </Animatable.Text>
    </SafeAreaView>
  );
};

export default PreparingScreen;
