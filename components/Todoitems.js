import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Todoitems({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color="red" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
  },

  itemText: {
    marginLeft: 10,
  },
});
