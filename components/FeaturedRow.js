import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#5c99fa" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        <RestaurantCard
          id={1}
          imgUrl="https://i.postimg.cc/bwgLNsQk/image.png"
          title="Burger Daddy"
          rating={4.8}
          genre="American"
          address="44 Broad Street"
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={2}
          imgUrl="https://i.postimg.cc/bwgLNsQk/image.png"
          title="Burger Daddy"
          rating={4.8}
          genre="American"
          address="44 Broad Street"
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={3}
          imgUrl="https://i.postimg.cc/bwgLNsQk/image.png"
          title="Burger Daddy"
          rating={4.8}
          genre="American"
          address="44 Broad Street"
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
