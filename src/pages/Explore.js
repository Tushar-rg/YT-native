import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, FlatList } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import TopList from '../components/TopList';


const Explore = () => {
    const cardData = useSelector(state=>{
        return state
    })
    return (
        <View style={{flex: 1}}>
            <Header />
            <TopList/>
            <FlatList
            style={{
                flexGrow: 0,
                height: 660,
            }}
            showsVerticalScrollIndicator={false}
            data={cardData}
            renderItem={({ item }) => {
                return <Card
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channelName={item.snippet.channelTitle}
                />
            }}
            keyExtractor={item=>item.id.videoId}/>
        </View>
    );
}
export default Explore