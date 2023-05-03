import { Text, View, TextInput, Dimensions, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { Fontisto, Ionicons, Feather, MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import SmallCard from '../components/SmallCard';
import { useSelector, useDispatch } from 'react-redux';

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=nfs&type=video&key=AIzaSyBzp4uTKD8MF7euMQUWFQbMG665cBjthJQ

const Search = () => {
    const navigation = useNavigation()
    const {colors} = useTheme()
    const [searchQ, setSearchQ] = useState('')
    const [loading, setLoading] = useState(false)
    // const [smallCardData, setSmallCardData] = useState([])
    const dispatch = useDispatch()
    const smallCardData = useSelector(state => {
        return state
    })
    const fetchSmallCardData = () => {
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${searchQ}&type=video&key=AIzaSyAt02rT2OpJW3ndLMW8PiIiFJLOZ5yAKw4`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                dispatch({ type: 'add', payload: data.items })
                console.log(data.items)
            })
            .catch((error) => {
                console.log("Api call error");
                alert(error.message);
            });
    }
    return (
        <View>
            <View style={{
                marginTop: 25,
                marginBottom: 10,
                flexDirection: 'row',
                height: 55,
                alignItems: 'center',
                justifyContent: 'space-around',
                backgroundColor: colors.headerColor,
                elevation: 10,
                width: Dimensions.get('screen').width
            }}>
                <Ionicons name='arrow-back'  color={colors.iconColor} size={32} onPress={() => navigation.goBack()} />
                <TextInput
                    placeholder='Search Youtube...'
                    placeholderTextColor='#999'
                    style={{
                        backgroundColor: colors.secondaryColor,
                        color: colors.fontColor,
                        borderRadius: 20,
                        padding: 10,
                        paddingLeft: 18,
                        height: 40,
                        width: '70%'
                    }}
                    value={searchQ}
                    onChangeText={(text) => { setSearchQ(text) }}
                />
                <Ionicons name='send' color={colors.iconColor} onPress={() => fetchSmallCardData()} size={32} />
            </View>
            {loading ? <ActivityIndicator
                style={{
                    margin: 180
                }}
                size={60} color='#ddd'
            /> : <FlatList
                showsVerticalScrollIndicator={false}
                data={smallCardData}
                renderItem={({ item }) => {
                    return <SmallCard
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channelName={item.snippet.channelTitle}
                    />
                }}
                keyExtractor={item => item.id.videoId}
            />}

        </View>
    )
}

export default Search