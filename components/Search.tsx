import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type SearchType = {
  searchKeywords?: string;

  /** Style props */
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Search = ({ searchKeywords, propTop }: SearchType) => {
  const searchStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.search, styles.searchLayout, searchStyle]}>
      <View style={[styles.searchChild, styles.searchLayout]} />
      <Text style={styles.searchKeywords}>{searchKeywords}</Text>
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    height: 40,
    width: 361,
    position: "absolute",
  },
  searchChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.gray200,
  },
  searchKeywords: {
    top: 11,
    left: 43,
    fontSize: FontSize.paragraphMDRegular_size,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.gray400,
    textAlign: "left",
    position: "absolute",
  },
  searchIcon: {
    top: 8,
    left: 11,
    width: 24,
    height: 24,
    position: "absolute",
  },
  search: {
    top: 376,
    left: 16,
  },
});

export default Search;
