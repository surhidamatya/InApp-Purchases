import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

import { Ionicons } from '@expo/vector-icons';


import { RootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

export type NavigationProp =  NativeStackNavigationProp<RootStackParamList, "Paywall">;

const PaywallScreen = () => {
    const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView className='bg-[#1A2F44] flex-1'>
        <View className='m-10 space-y-2'>
            <Text className='text-2xl text-center uppercase text-white font-bold'>Upgrade</Text>
            <Text className='text-center  text-white'>Upgrade to Pro to Access premiium features</Text>
        </View>

        <TouchableOpacity className=' absolute top-0 right-0 p-5' onPress={navigation.goBack}>
        <Ionicons name={'md-close-circle-sharp'} size={30} color="#E5962D" />
        </TouchableOpacity>

        <View className='items-center'>
            <MaterialCommunityIcons
                name='trophy-award'
                size = {150}
                color="#E5962D"/>
        </View>
        
        
        <View className='space-y-5 px-5 pt-5 py-5'>
        <View className='flex-row space-x-10 items-center'>
        <Ionicons name={'md-key'} size={32} color="#E5962D" />
        <View className='flex-1'>
            <Text className='text-white font-bold text-lg'>Access to all pro features</Text>
            <Text className='text-white font-extralight text-sm'>Upgrade to the premium version of the app and enjoy all the exclusive features available only to premium users. {""}</Text>
        </View>
        </View>

        <View>
        <View className='flex-row space-x-10 items-center'>
        <Ionicons name={'md-person-add-outline'} size={32} color="#E5962D" />
        <View className='flex-1'>
            <Text className='text-white font-bold text-lg'>Helpline 24/7 to Personal Trainers</Text>
            <Text className='text-white font-extralight text-sm'>Get unlimited access to our fitness support team and get help anytime you need it - day or night. {""}</Text>
        </View>
        </View>

        </View>

        <View>
        <View className='flex-row space-x-10 items-center'>
        <Ionicons name={'md-star'} size={32} color="#E5962D" />
        <View className='flex-1'>
            <Text className='text-white font-bold text-lg'>Unlock Limited Edition Content</Text>
            <Text className='text-white font-extralight text-sm'>Unlock exclusive content that you can't get anywhere else, like special exclusive workouts and routines. {""}</Text>
        </View>
        </View>
        </View>
        </View>

        <TouchableOpacity className='items-center px-10 py-5 bg-[#E5962D] mx-10 rounded-full'>
            <Text className='text-white text-md text-center font-bold mb-1'>Free Trial for 1 week ....</Text>
            <Text className='text-white'>20$/Mo</Text>
        </TouchableOpacity>

        <TouchableOpacity className='items-center px-10 py-5 mx-10 rounded-full bg-gray-700 mt-4'>
            <Text className='text-white text-md text-center font-bold mb-1'>Save {" "} {((1- 100/(10*12))*100).toPrecision(2)}% annually</Text>
            <Text className='text-white'>299 yearly</Text>
        </TouchableOpacity>

        <TouchableOpacity className='items-center px-10 py-5 mx-10 mt-1'>
            <Text className='text-md text-center font-bold mb-1 text-gray-500'>Restore Purchases</Text>
        </TouchableOpacity>



    </ScrollView>
  )
}

export default PaywallScreen