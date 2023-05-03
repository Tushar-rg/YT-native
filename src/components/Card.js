import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Fontisto, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation, useTheme } from '@react-navigation/native';


const Card = ({ videoId, title, channelName }) => {
    const navigation = useNavigation()
    const {colors} = useTheme()
    const textColor = colors.fontColor
    const channelNameColor = colors.iconColor
    return (
        <TouchableOpacity
            style={{ marginBottom: 10 }}
            // onPress={ navigation.navigate('player', { videoId: videoId, title: title, channelName: channelName })}
        >
            <View>
                <Image
                    source={{ uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` }}
                    style={{
                        width: '100%',
                        height: 225
                    }}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        // alignItems: 'center',
                        // width: 380,
                        margin: 5,
                        height: 70
                    }}>
                    <View style={{
                        margin: 5
                    }}>
                        <MaterialCommunityIcons name='fire-circle' size={44} />
                    </View>
                    <View style={{
                        margin: 5
                    }}>
                        <Text
                            style={{
                                width: Dimensions.get('screen').width - 100,
                                color: textColor,
                                fontSize: 14,
                                marginBottom: 4,
                            }}
                            ellipsizeMode='tail'
                            numberOfLines={2}>
                            {title}
                        </Text>
                        <Text style={{
                                fontSize: 12,
                                color: channelNameColor
                            }}>
                            {channelName}
                        </Text>
                    </View>
                    <View style={{
                        alignContent: 'flex-end'
                    }}>
                        <Text>:</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card