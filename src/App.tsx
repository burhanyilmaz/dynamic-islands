import CustomButton from 'components/CustomButton';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const App = () => (
  <SafeAreaView style={styles.safeArea}>
    <Text>Dynamic Island</Text>
    <CustomButton title="Press me" onPress={() => {}} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
