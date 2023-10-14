import * as React from 'react'
import { Text, View, FlatList, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import { fakeServer } from '../../fakeServer';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';


let stopFetchMore = true

export function Movies(){
    const [data, setData] = React.useState()
    const [loading, setLoading] = React.useState(false)

    const fetchData = async() => {
        const response = await fakeServer(15)
        setData([...response])
    }

    React.useEffect(() => {
        fetchData()
        console.log(data)
    }, [])

    const handleOnEndReached = async() => {
        setLoading(true)
        if (!stopFetchMore){
            const response = await fakeServer(15)
            if (response === 'done') return setLoading(false)
            setData([...data, ...response])
            stopFetchMore = true
        }
        setLoading(false)
    }

    const LeftActions = (progess, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: "clamp"
        })
        return (
            <View style={styles.leftAction}>
                <Animated.Text style={[styles.actionText, {transform: [{ scale }]}]}>Add to Cart</Animated.Text>
            </View>   
        )
    }
    
    function RightActions({progess, dragX, onPress}){
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: "clamp"
        })
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.rightAction}>
                    <Animated.Text style={[styles.actionText, {transform: [{ scale }]}]}>Delete</Animated.Text>
                </View>   
            </TouchableOpacity>
        )
    }
    
   
    function onRightPressCallback(id) {
        setData(data.filter((item) => item.id !== id))
    }
    
    
    
    
    const renderItem = ({item}) => (
        <GestureHandlerRootView key={item.id}>
            <Swipeable renderLeftActions={LeftActions} renderRightActions={(progress, dragX) => <RightActions progress={progress} dragX={dragX} onPress={() => onRightPressCallback(item.id)}/>}>
                <Text style={{textAlign: 'center', fontSize: 30, padding: 5, borderBottomColor: '#DD4124', borderBottomWidth: 2 }}>{item.Title}</Text>
            </Swipeable>
        </GestureHandlerRootView>
    )
    
    const ListFooterComponent = () => (
        <Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 5}}>
            Loading...
        </Text>
    )

    
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: "bold"}}>Movie Screen</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                onEndReached={handleOnEndReached}
                onEndReachedThreshold={0.01}
                onScrollBeginDrag={() => {
                    stopFetchMore = false
                }}
                ListFooterComponent={() => loading && <ListFooterComponent/>}
                onRefresh={() => console.log("refreshing")}
                refreshing={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    leftAction: {
        backgroundColor: "#388e3c",
        justifyContent: "center",
        flex: 1
    },
    rightAction: {
        backgroundColor: "#dd2c00",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    actionText: {
        color: "#fff",
        fontWeight: "bold",
        padding: 20
    }
})