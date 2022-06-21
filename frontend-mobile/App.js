import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BrowserRouter } from 'react-router-dom';
import { AllRoutes } from './AllRoutes'
import { Nav } from './component/Nav';

export default function App() {
  return (
    <BrowserRouter>
    <AllRoutes />
      <Nav />
    </BrowserRouter>
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
