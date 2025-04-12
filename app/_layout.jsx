import { Stack } from 'expo-router';
import {UserProvider} from '../UserContext';

export default function RootLayout() {
  return (
    <UserProvider>
    <Stack
      screenOptions={{
        headerShown: false, // Hides the top bar across all stack screens
      }}
    />
    </UserProvider>
  );
}
