export interface TypographyProps {
  children: any;
  fontFamily: string;
  fontSize: string | number;
  fontColor: string;
  fontWeight: string | number;
  extraStyle?: any;
  onPress?: () => void;
}

export interface InputFieldProps {
  placeholder: string;
  onChangeText: (val: string) => void;
  value: string;
  extraStyles?: any;
}

export interface ButtonProps {
  onPress: () => void;
  text: string;
  extraStyles?: any;
}
