import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { StyleSheet, Image, Text, View, BackHandler } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const GetStarted = ({ navigation }) => {

    const backPressed = () => {
        BackHandler.exitApp();
        navigation.navigate('LandingScreen');
    };

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener('hardwareBackPress', backPressed);
            return () => {
                BackHandler.removeEventListener('hardwareBackPress', backPressed);
            };
        }, []));

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#d9e7ed','#a5becb', '#d9e7ed']}
                style={styles.gradient}>
                <Image source={require('../assets/companylogo.png')} style={styles.companylogo} />
                <Image source={require('../assets/vector-Ypq.png')} style={styles.vectorP61} />
                <View style={{ width: '100%', alignItems: 'center', position: 'absolute', bottom: '5%' }}>
                    <TouchableOpacity activeOpacity={1} onPress={() => { navigation.navigate('VerifyNumber') }} style={styles.frame2vJu}>
                        <Text style={styles.getStartednru}>Get Started</Text>
                        <Image source={require('../assets/arrowcircleright-R8m.png')} style={styles.arrowcirclerightTy3} />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    gradient: {
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    container: {
        height: '100%',
        width: '100%',
        // backgroundColor: '#d9e7ed',
        alignItems: 'center'
    },
    companylogo: {
        marginTop: 20,
        width: '70%',
        resizeMode: 'contain',
    },
    frame2vJu: {
        backgroundColor: '#140d05',
        borderRadius: 12,
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: '65%',
        flexDirection: 'row',
    },
    getStartednru: {
        backgroundColor: '#140d05',
        textTransform: 'uppercase',
        fontFamily: 'SatoshiVariable, SourceSansPro',
        flexShrink: 0,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center',
        flex: 10,
        zIndex: 10,
        width: '100%'
    },
    arrowcirclerightTy3: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        flexShrink: 0,
        marginRight: 20,
    },
    vectorP61: {
        width: 650,
        height: 527,
        position: 'absolute',
        left: 20,
        top: 170,
        resizeMode: 'contain'
    },
});

export default GetStarted;