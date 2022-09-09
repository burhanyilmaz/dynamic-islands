import AirpodsConnect from 'components/AirpodsConnect';
import { SafeAreaView, StyleSheet } from 'react-native';

const App = () => (
  <SafeAreaView style={styles.safeArea}>
    <AirpodsConnect />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
