import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard
        imgUrl="https://i.postimg.cc/FKW4cFQJ/image.png"
        title="Test 1"
      />
      <CategoryCard
        imgUrl="https://i.postimg.cc/FKW4cFQJ/image.png"
        title="Test 2"
      />
      <CategoryCard
        imgUrl="https://i.postimg.cc/FKW4cFQJ/image.png"
        title="Test 3"
      />
      <CategoryCard
        imgUrl="https://i.postimg.cc/FKW4cFQJ/image.png"
        title="Test 4"
      />
      <CategoryCard
        imgUrl="https://i.postimg.cc/FKW4cFQJ/image.png"
        title="Test 5"
      />
      <CategoryCard
        imgUrl="https://i.postimg.cc/FKW4cFQJ/image.png"
        title="Test 6"
      />
    </ScrollView>
  );
};

export default Categories;
