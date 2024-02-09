import { Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")

export const COLORS = {
    // base colors
    primary: "#5390ff", // Blue
    secondary: "#cacfd9", // Gray
    
    // colors
    black: "#1e1f20",
    white: "#FFFFFF",
    lightGray: "#f5f7fa",
    lightGray2: "#f6f9fc",
    lightGray3: "#e0e0e0",
    lightGray4: "#f8f8f8",
    transparent: "transparent",
    darkgray: "#898c95",
    gray: "#7f7f7f",
}

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