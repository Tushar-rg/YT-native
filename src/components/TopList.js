import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import Header from '../components/Header';
import Card from '../components/Card';

const Option = ({ name }) => {
    const { colors } = useTheme()
    const textColor = colors.fontColor
    const channelNameColor = colors.iconColor
    return (
        <View id='topButton' style={{
            backgroundColor: '#272727',
            height: 32,
            borderRadius: 20,
            paddingHorizontal: 15,
            marginVertical: 8,
            marginHorizontal: 4,
            borderWidth: 0.6,
            borderColor: colors.borderColor
        }}>
            <Text style={{
                textAlign: 'center',
                color: colors.fontColor,
                fontSize: 13,
                marginTop: 6,
            }}>{name}</Text>
        </View>
    )
}

const TopList = () => {
    const { colors } = useTheme()
    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{
                    flexGrow: 0,
                    backgroundColor: colors.headerColor,
                    flexDirection: 'row',
                    overflow: 'scroll',

                    paddingHorizontal: 10
                }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: '#252525',
                        justifyContent: 'center',
                        paddingHorizontal: 11,
                        paddingVertical: 5,
                        marginHorizontal: 5,
                        marginVertical: 8
                    }}>
                        <Ionicons name='compass' size={22} color={colors.iconColor}/>
                    </View>
                    <View style={{
                        backgroundColor: '#444',
                        width: 1,
                        height: 35,
                        marginHorizontal: 6
                    }}>

                    </View>
                </View>
                <Option name='Music' />
                <Option name='Music' />
                <Option name='Music' />
                <Option name='Music' />
                <Option name='Music' />
                <Option name='Music' />
                <Option name='Music' />
                <Option name='Music' />
                <Option name='Music' />
                <Option name='Music' />
                <Option name='Music' />
                <Option name='Music' />
                <Option name='Music' />
                <Option name='Music' />
                <Option name='Music' />
            </ScrollView>

        </View>
    );
}
export default TopList