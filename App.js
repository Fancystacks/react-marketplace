import React, { useState } from 'react';
import Screen from "./app/components/Screen";
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';

const categories = [
  { label: "Clothing", value: 1 },
  { label: "Technology", value: 2 },
  { label: "Furniture", value: 3 }
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker 
      selectedItem={category}
      onSelectItem={(item )=> setCategory(item)}
      items={categories}
      icon="apps" 
      placeholder="category"/>
      <AppTextInput icon="email" placeholder="email"/>
    </Screen>
    );
  }