import React, { Dispatch, SetStateAction } from 'react';
import { TextInput, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import { colors } from '../../utils/theme';

interface Props {
  placeholder: string;
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
}

const SearchBox = ({ placeholder, inputText, setInputText }: Props) => {
  // const [inputText, setInputText] = useState<string>('');

  return (
    <View style={styles.searchboxContainer}>
      <MaterialIcon name="search" size={30} style={styles.icon} allowFontScaling={false} selectable={false} />
      <TextInput
        allowFontScaling={false}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor={colors.red}
        value={inputText}
        onChangeText={setInputText}
        style={styles.textInput}
      />
    </View>
  );
};

export default SearchBox;
