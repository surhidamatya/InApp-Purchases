import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

export type NavigationProp =  NativeStackNavigationProp<RootStackParamList, "Home">;

type Props = {
    title: string,
    screen: any,
    color:string,
    requiresPro?:boolean,
    icon? : any,
    vertical? : boolean
}

const ActionRow = ({title, screen, color, requiresPro, icon, vertical}: Props) => {

    const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity 
    onPress={() => requiresPro ? navigation.navigate('Paywall') : navigation.navigate(screen)}
    className={`flex m-2 flex-1 justify-center items-center py-6 rounded-lg space-x-2
    
    ${ vertical ? "flex-col": "flex-row"}`} style = {{backgroundColor:requiresPro?'gray': color}}>

        {requiresPro && (
            <View className='absolute top-4 right-4 rotate-6 items-center'>
                <Ionicons name='lock-closed' size={18} color="white" />
        <Text className='text-white font-bold text-lg'>PRO</Text>
            </View>
        )}

        <Ionicons name={icon} size={30} color="white" />
        <Text className='text-white font-bold text-lg'>{title}</Text>
    </TouchableOpacity>
  )
}

export default ActionRow