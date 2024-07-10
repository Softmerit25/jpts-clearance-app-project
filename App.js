import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import Index from './app';


export default function App() {
  return (
      <>
      <Index />
      <StatusBar style="auto" />
      </>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
