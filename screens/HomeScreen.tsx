import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import ActionRow from '../components/ActionRow';
import { RootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export type NavigationProp =  NativeStackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const isProMember = true;
  return (
    <SafeAreaView className='flex-1 bg-gray-50 relative mt-10'>
        <ScrollView>

      <TouchableOpacity onPress={() => navigation.navigate('Paywall')} className='absolute z-50 top-5 right-10 items-center'>
      <Ionicons name="person-circle" size={30} color="#E5962D" />
        <Text className='text-center text-[#E5962D]'>{isProMember? 'Pro' : 'Upgrade'}</Text>
      </TouchableOpacity>

      <Image source={{uri: "https://i.imgur.com/e14NE49.png"}}
      className='w-full h-64'
      />

     <View className='mx-5'>
<View className='flex-row justify-between space-x-2'>
<ActionRow 
      title='Track Workout'
      screen='Demo'
      color='#E5962D'
      icon='fitness'
      vertical
      />
<ActionRow 
      title='Browse Workout'
      screen='Demo'
      color='#1982C4'
      icon='library'
      vertical
      />
</View>

<ActionRow 
title='Connect With Friends'
screen='Connect'
color='#8AC926'
icon='share-social'
vertical
/>

      <ActionRow 
      title='Add an Excercise'
      screen='Excercise'
      color='#C03221'
      icon='add-circle'
      vertical
      requiresPro={true}
      />
      <ActionRow 
      title='Create a Routine'
      screen='Routine'
      color='#E5962D'
      icon='md-time'
      vertical
      requiresPro={true}
      />
      <ActionRow 
      title='Join Challenges'
      screen='Challenges'
      color='#E5962D'
      icon='fitness'
      vertical
      requiresPro={true}
      />
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;