import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>iNamaste TodoApp</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
