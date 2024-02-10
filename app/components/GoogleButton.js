import { GoogleSigninButton } from '@react-native-google-signin/google-signin'

const GoogleButton = ({ onGoogleButtonPress }) => {
    return (
          <GoogleSigninButton
            style={{ width: 240, height: 56 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
          />
      )
}

export default GoogleButton;