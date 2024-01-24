import { View, Text, Image, StyleSheet, TextInput, ToastAndroid, TouchableOpacity, Keyboard, ScrollView, StatusBar, Button } from "react-native";
import React, { useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';

export default listOfPlaces = ({ navigation }) => {
    const [myData, setMyData] = useState(null);
    useEffect(() => {
        getDatabase();
    }, []);

    const getDatabase = async () => {
        try {
            const data = await firestore().collection('Places').doc('ZriwJyE0XoscNNG8ue3G').get();
            setMyData(data._data)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View>

            <Text style={styles.text}>    Famous Places For Visit</Text>

            <ScrollView style={styles.listView}>

                <Image
                    source={require('./image/img1.png')}
                    style={styles.image}
                    resizeMode="cover" // Choose the appropriate resize mode
                />
                <Text style={styles.text}>{myData ? myData.n1 : "Loading"}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('DetailOfPlace', { name: myData.n1 })}
                    style={styles.btn}
                >
                    <Text style={{ color: '#FFFFFF',fontSize:18 }}>Details</Text>
                </TouchableOpacity>

                <Image
                    source={require('./image/img2.png')}
                    style={styles.image}
                    resizeMode="cover" // Choose the appropriate resize mode
                />
                <Text style={styles.text}>{myData ? myData.n2 : "Loading"}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('DetailOfPlace', { name: myData.n2 })}
                    style={styles.btn}
                >
                    <Text style={{ color: '#FFFFFF',fontSize:18 }}>Details</Text>
                </TouchableOpacity>

                <Image
                    source={require('./image/img3.png')}
                    style={styles.image}
                    resizeMode="cover" // Choose the appropriate resize mode
                />
                <Text style={styles.text}> {myData ? myData.n3 : "Loading"}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('DetailOfPlace', { name: myData.n3 })}
                    style={styles.btn}
                >
                    <Text style={{ color: '#FFFFFF' ,fontSize:18}}>Details</Text>
                </TouchableOpacity>

                <Image
                    source={require('./image/img4.png')}
                    style={styles.image}
                    resizeMode="cover" // Choose the appropriate resize mode
                />
                <Text style={styles.text}> {myData ? myData.n4 : "Loading"}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('DetailOfPlace', { name: myData.n4 })}
                    style={styles.btn}
                >
                    <Text style={{ color: '#FFFFFF',fontSize:18 }}>Details</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "lightblue",
        padding: 10
    },
    headerText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },
    image: {
        width: 300, // Set your desired width
        height: 200, // Set your desired height
        borderRadius: 20, // Optional: Add border radius or other styles,
        marginTop: 5
    },
    listView: {
        width: "90%",
        alignSelf: "center",
        marginTop: 15
    },
    btn:{
        backgroundColor: '#0000FF',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300, // Adjust the width as needed
    },
    
    text: {
        fontSize: 20, color: 'black',
    }
});