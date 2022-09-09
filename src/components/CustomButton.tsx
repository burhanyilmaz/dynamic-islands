import { Pressable, Text } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};

const CustomButton = ({ title, onPress }: Props) => (
  <Pressable onPress={onPress}>
    <Text>{title}</Text>
  </Pressable>
);

export default CustomButton;
