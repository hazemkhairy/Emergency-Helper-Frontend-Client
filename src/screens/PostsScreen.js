import React from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import { getData } from '../store/Posts/actions'
import { connect,useSelector,useDispatch } from 'react-redux'
const PostsScreen = (props) => {
    const posts = useSelector(state=>{
        return state.postsReducer
    })
    console.log('done')
    console.log(posts)
    const  dispatch = useDispatch();
    return (
        <View>
            <Text>Posts Screen</Text>
            <Button title="Get Data" onPress={() => { dispatch(getData()) }} />
            <FlatList
                data={posts}
                keyExtractor={(item) => { return String(item.id) }}
                renderItem={({ item }) => { return <Text>{item.id} - {item.name}</Text> }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default PostsScreen;