import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Login } from './src/screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Cadastro } from './src/screens/Cadastro';
import { Routes } from './src/routes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Routes/>
      <StatusBar style="auto" />
    </>
  );
}