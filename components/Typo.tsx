import { StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";
import { colors } from "@/constants/theme";
import { TypoProps } from "@/Types";
import { verticalScale } from "@/utils/styling";
const Typo = ({
  size,
  color = colors.text,
  fontWeight = "400",
  children,
  style,
  textProps = {},
}: TypoProps) => {
  const textStyle: TextStyle = {
    fontSize: size ? verticalScale(size) : verticalScale(18),
    color,
    fontWeight,
  };
  return (
    <Text style={[style, textStyle]} {...textProps}>
      {children}
    </Text>
  );
};

export default Typo;

const styles = StyleSheet.create({});
