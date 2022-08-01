import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  // Access to the navigation object
  const navigation = useNavigation();

  // As soon as the screen mounts, do whatever is inside the effect
  useLayoutEffect(() => {
    // Allows to modify default RN header
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5 ">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://i.postimg.cc/NfDBYkP4/image.png" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#5c99fa" />
          </Text>
        </View>
        <UserIcon size={35} color="#5c99fa" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <SearchIcon size={20} color="gray" />
          <TextInput
            placeholder="Search restaurants near you"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#5c99fa" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured */}
        <FeaturedRow
          id="1"
          title="Featured"
          description="People in your area love that food!"
        />

        {/* Tasty Discounts */}
        <FeaturedRow
          id="2"
          title="Mega Discounts"
          description="You won't believe how cheap it gets!"
        />

        {/* Offers near you! */}
        <FeaturedRow
          id="3"
          title="Restaurants near you!"
          description="Why not grab something local? Quick delivery guaranteed!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
