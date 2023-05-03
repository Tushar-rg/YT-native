import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Fontisto, Ionicons, Feather, MaterialIcons, } from '@expo/vector-icons'
import Constant from 'expo-constants'

const SmallCard = ({ videoId, title, channelName }) => {
    // const navigation = useNavigation()
    const {colors} = useTheme()
    const textColor = colors.fontColor
    const channelNameColor = colors.iconColor
    return (
        <TouchableOpacity
            style={{ marginBottom: 5 }}
            // onPress={navigation.navigate('player')}
            >
            <View>
                <Image
                    source={{ uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` }}
                    style={{
                        width: '100%',
                        height: 215
                    }}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        marginLeft: 10,
                        marginVertical: 14,
                        height: 70

                    }}>

                    <View style={{
                        margin: 5
                    }}>
                        <Text
                            style={{
                                width: Dimensions.get('screen').width - 60,
                                color: textColor
                            }}
                            ellipsizeMode='tail'
                            numberOfLines={2}>
                            {title}
                        </Text>
                        <Text style={{
                                color: channelNameColor
                            }}>
                            {channelName}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SmallCard