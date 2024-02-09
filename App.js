import { StatusBar } from 'expo-status-bar';
import { View, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/naviagations/AuthNavigator';
import { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider'
import { onboarding1, onboarding2, onboarding3 } from './app/constants/images';
import { COLORS, SIZES } from './app/constants/theme';

const slides = [
  {
    id: 1,
    title: 'Title 1',
    text: 'Say something cool',
    image: onboarding1,
    backgroundColor: '#59b2ab',
  },
  {
    id: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: onboarding2,
    backgroundColor: '#febe29',
  },
  {
    id: 3,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: onboarding3,
    backgroundColor: '#22bcb5',
  }
];

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  // StatusBar.setBarStyle('light-content', true);

  const buttonLabel = (label) => {
    return (
      <View style={{
          padding: 12,
        }}
      >
        <Text style={{fontWeight: 'bold', fontSize: SIZES.h4}}>{label}</Text>
      </View>
    )
  }

  if(!showHomePage) {
    return (
      <AppIntroSlider
      data={slides}
      renderItem={({ item }) => {
        return (
          <View style={{ 
            flex: 1, 
            alignItems: 'center', 
            padding: 15,
            paddingTop: 100
          }}>
            <Image 
              source={item.image}
              style={{
                width: SIZES.width - 80,
                height: 400
              }}
              resizeMode='contain'
            />
            <Text style={{fontWeight: 'bold', fontSize: SIZES.h1}}>{item.title}</Text>
            <Text style={{textAlign: 'center', paddingTop: 5}}>{item.text}</Text>
          </View>
        )
      }}
      activeDotStyle={{
        backgroundColor: COLORS.primary,
        width: 30
      }}
      showSkipButton
      renderNextButton={() => buttonLabel("Next")}
      renderSkipButton={() => buttonLabel("Skip")}
      renderDoneButton={() => buttonLabel("Done")}
      onDone={() => {
        setShowHomePage(true)
      }}
    />
    )
  }
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
