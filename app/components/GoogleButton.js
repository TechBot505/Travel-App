import { GoogleSigninButton } from '@react-native-google-signin/google-signin'
import { StyleSheet, View } from 'react-native';

const GoogleButton = ({ onGoogleButtonPress }) => {
    return (
      <View style={styles.container}>
          <GoogleSigninButton
            style={styles.button}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
          />
      </View>
      )
}

export default GoogleButton;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  button: {
    width: 265, 
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 32
  }
});