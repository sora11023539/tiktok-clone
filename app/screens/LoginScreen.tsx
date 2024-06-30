import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';
import { Colors } from '@/constants/Colors';

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, height: '100%' }}>
      <Video
        style={styles.video}
        source={{
          uri: 'https://cdn.pixabay.com/video/2022/06/19/120883-724673735_large.mp4',
        }}
        shouldPlay
        resizeMode={ResizeMode.COVER}
        isLooping={true}
      />
      <View style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.BACKGROUND_TRANSP,
        flex: 1,
      }}>
        <Text
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 35,
            color: Colors.WHITE,
          }}
        >Taka Tak</Text>
        <Text
          style={{
            fontFamily: 'outfit',
            color: Colors.WHITE,
            fontSize: 17,
            textAlign: 'center',
            marginTop: 15,
          }}
        >Ultimate Place to Share your Short Videos with Great Community</Text>
        <TouchableOpacity style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          flexDirection: 'row',
          backgroundColor: Colors.WHITE,
          padding: 10,
          paddingHorizontal: 55,
          borderRadius: 99,
          position: 'absolute',
          bottom: 150,
        }}>
          <Image
            source={require('@/assets/images/google.png')}
            style={{
              width: 30,
              height: 30,
            }}
          />
          <Text style={{
            fontFamily: 'outfit',
          }}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  video: {
    height: ScreenHeight,
    width: ScreenWidth,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})
