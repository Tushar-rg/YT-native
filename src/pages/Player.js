import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Card from '../components/Card';
import WebView from 'react-native-webview';

const Player = () => {
    const navigation = useNavigation()
    // const {playerVideoId, playerTitle, playerchannelName} = route.params
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View styles={{
                width: '100%',
                height: 200
            }}>
                <WebView source={{ uri: `https://www.youtube.com/embed/` }} />
            </View>
            <Text style={{
                fontSize: 20,
                width: Dimensions.get('screen').width - 60,
                margin: 9
            }}
                onPress={()=>navigation.goBack()}
                numberOfLines={2}
                ellipsizeMode='tail'
            >help</Text>
            <View
                style={{ borderBottomWidth: 1 }}
            />
        </View>
    );
}
export default Player