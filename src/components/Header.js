import { Text, View } from 'react-native';
import { Fontisto, Ionicons, Feather, MaterialIcons } from '@expo/vector-icons'
import { useNavigation, useTheme } from '@react-navigation/native';
import Constant from 'expo-constants'

export default function Header() {
    const navigation = useNavigation()
    const {colors} = useTheme()
    let iconColor = colors.iconColor
    return (
        <View style={{
            height: 55,
            width: 385,
            backgroundColor: colors.headerColor,
            elevation: 8,
            marginTop: Constant.statusBarHeight,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems:'center',
                margin: 10,
                marginLeft: 18
            }}>
                <Fontisto name='youtube-play' size={22} color='red'/>
                <Text style={{
                    fontSize: 16,
                    color: colors.fontColor,
                    marginLeft: 10,
                    marginTop: 1,
                }}>YTNative</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: 180
            }}>
                <Feather name='cast' size={22} color={iconColor}/>
                <Fontisto name='bell' size={20} color={iconColor}/>
                <Ionicons name='search' size={22} color={iconColor} onPress={()=>navigation.navigate('search')}/>
                <MaterialIcons name='account-circle' size={22} color={iconColor}/>
            </View>
        </View>
    );
}