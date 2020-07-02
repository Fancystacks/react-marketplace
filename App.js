import React, { useState } from 'react';
import Screen from "./app/components/Screen";
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';

const categories = [
  { label: "Clothing", value: 1 },
  { label: "Technology", value: 1 },
  { label: "Furniture", value: 1 }
];

export default function App() {

  return (
    <Screen>
      <AppPicker items={categories} icon="apps" placeholder="category"/>
      <AppTextInput icon="email" placeholder="email"/>
    </Screen>
    );
  }