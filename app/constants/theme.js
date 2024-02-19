import { Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")

export const COLORS = {
    black: "#000000",
    darkGray: "#333333",
    lightGray: "#f2f2f2",
    white: "#ffffff",
    teal: "#008080",
    green: "#00ff00",
    blue: "#0000ff",
    purple: "#800080",
    red: "#ff0000",
    orange: "#ffa500",
    yellow: "#ffff00",
    pink: "#ffc0cb",
    brown: "#a52a2a",
    olive: "#808000",
    navy: "#000080",
    maroon: "#800000",
    lime: "#00ff00",
    indigo: "#4b0082",
    gold: "#ffd700"
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
}