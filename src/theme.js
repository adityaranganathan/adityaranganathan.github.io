import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: `'Lora Variable', sans-serif`,
    body:    `'Lexend Variable', sans-serif`,
  },
  colors: {
    brand: {
      0: "#F7F3ED",
      1: "#F5EFE7",
      2: "#D8C4B6",
      3: "#4F709C",
      4: "#213555",
    },
  },
})

