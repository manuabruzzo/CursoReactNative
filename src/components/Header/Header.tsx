import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {goBack} from '../../navigation/controls';

import {colors} from '../../utils/theme';
import CustomText from '../CustomText';
import Separator from '../Separator';
import styles from './styles';

interface Props {
  onPressBackButton?: () => void;
  onPressRightButton?: () => void;
  RightSideComponent?: React.FC;
  showBackButton?: boolean;
  title: string;
}

const Header = ({
  onPressBackButton,
  onPressRightButton,
  RightSideComponent,
  showBackButton,
  title,
}: Props) => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.mainContainer}>
        {showBackButton ? (
          <TouchableOpacity
            onPress={onPressBackButton}
            style={styles.sideButtonContainer}>
            <MaterialIcon
              name="navigate-before"
              size={35}
              color={colors.black}
            />
          </TouchableOpacity>
        ) : (
          <Separator isHorizontal size={40} />
        )}
        <View style={styles.titleContainer}>
          <CustomText variant="bold" size={17}>
            {title}
          </CustomText>
        </View>
        {RightSideComponent ? (
          <TouchableOpacity
            onPress={onPressRightButton}
            style={styles.sideButtonContainer}>
            <RightSideComponent />
          </TouchableOpacity>
        ) : (
          <Separator isHorizontal size={40} />
        )}
      </View>
    </>
  );
};

Header.defaultProps = {
  onPressBackButton: goBack,
  onPressRightButton: () => {},
  showBackButton: true,
};

export default Header;
