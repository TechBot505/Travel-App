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
    title: 'Explore the World Awaits',
    text: 'Embark on a journey of discovery. Swipe, plan, and create unforgettable memories with Wanderlust - your passport to a world of adventure.',
    image: onboarding1,
    backgroundColor: '#59b2ab',
  },
  {
    id: 2,
    title: 'Personalized Travel Plans',
    text: "Tell us your interests, and we'll curate unique itineraries just for you. Whether it's cultural hotspots or hidden gems, we've got your next adventure covered.",
    image: onboarding2,
    backgroundColor: '#febe29',
  },
  {
    id: 3,
    title: 'Effortless Itinerary Management',
    text: "Plan, book, and track your trips effortlessly. From flights to accommodations, keep everything in one place for a stress-free travel experience. Your journey begins with a tap.",
    image: onboarding3,
    backgroundColor: '#22bcb5',
  }
];

const App = () => {
  const [showHomePage, setShowHomePage] = useState(false);

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
            <Text style={{fontWeight: 'bold', fontSize: SIZES.h2}}>{item.title}</Text>
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

export default App;
