import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hides the top bar across all stack screens
      }}
    />
  );
}
