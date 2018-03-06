// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="bar">
        <Slide transition={["zoom"]} bgColor="#f44336">
          <Heading size={1} fit caps lineHeight={1} textColor="#fff">
            Hi, I'm Vijay Dev
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>I build stuff.</Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="#fff">
            Say hello to Firebase
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>Before that, we need to take a look at the two basic components of a web browser.</Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>Address and content. Meaning there is a machine on the internet that serves the content for the address.</Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>Building an infrastructure for building and maintaining such a machine requires effort and machine.</Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>What if someone can provide the infrastructure that we can make use of and build our product.</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Appear order={1}><Heading size={6} textColor="primary" caps>Typography</Heading></Appear>
          <Appear order={2}><Heading size={1} textColor="secondary">Heading 1</Heading></Appear>
          <Appear order={3}><Heading size={2} textColor="secondary">Heading 2</Heading></Appear>
          <Appear order={4}><Heading size={3} textColor="secondary">Heading 3</Heading></Appear>
          <Appear order={5}><Heading size={4} textColor="secondary">Heading 4</Heading></Appear>
          <Appear order={6}><Heading size={5} textColor="secondary">Heading 5</Heading></Appear>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
