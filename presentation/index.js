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
import CodeSlide from "spectacle-code-slide";
import Terminal from "spectacle-terminal";

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
        <Slide transition={["zoom"]} bgColor="#FF8F00">
          <Heading size={1} fit caps lineHeight={1} textColor="#fff">
            Firebase
          </Heading>
          <Text margin="10px 0 0" textColor="#FFE082" size={1} bold>Build better mobile apps and grow your business</Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="#f44336">
          <Heading size={1} fit caps lineHeight={1} textColor="#fff">
            I'm Vijay Dev
          </Heading>
          <Text margin="10px 0 0" textColor="#FFAB91" size={1} fit bold>I build stuff.</Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="#f44336">
          <Heading size={1} fit caps lineHeight={1} textColor="#fff">
            But first...
          </Heading>
          <Terminal title="~(zsh)" output={[
            "echo \"Gotta install some npm packages...\"",
            "echo \"I hope everyone has already installed node and npm\"",
            "echo \"Let's begin!\"",
            "npm install http-server firebase-tools --global",
            <div>
                [................] / rollbackFailedOptional: <span style={{
                color: "#29B6F6"
              }}>verb</span> <span style={{
                color: "#9CCC65"
              }}>npm-session</span> 1c987dd8nn08
            </div>
            ]}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="#fff">
            Say hello to Firebase
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={6} bold>Before that, we need to take a look at the two basic components of a web browser.</Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={6} bold>Address and content. Meaning there is a machine on the internet that serves the content for the address.</Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={6} bold>Building an infrastructure for building and maintaining such a machine requires effort and machine.</Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={6} bold>What if someone can provide the infrastructure that we can make use of and build our product.</Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="#f44336">
          <Heading size={1} fit caps lineHeight={1} textColor="#fff">
            JSON
          </Heading>
          <Text margin="10px 0 0" textColor="#FFAB91" size={1} fit bold>JavaScript Object Notation</Text>
        </Slide>
        <CodeSlide
          bgColor="#263238"
          transition={[]}
          lang="json"
          code={require("raw-loader!../codes/json.example")}
          ranges={[
            { loc: [0, 1], title: "Starts with a curly bracket" },
            { loc: [1, 2], title: "Key value pairs" },
            { loc: [2, 3], title: "Key is always a string" },
            { loc: [3, 4], title: "Key should be unique" },
            { loc: [4, 12], title: "Comments not allowed" },
            { loc: [12, 15], title: "Standard data type values" },
            { loc: [15, 21], title: "Sub-structures possible" },
            { loc: [21, 22], title: "Ends with a curly bracket" }
          ]}
        />

        <Slide transition={["zoom"]} bgColor="#f44336">
          <Heading size={1} fit caps lineHeight={1} textColor="#fff">
            Hello World!
          </Heading>
          <Text margin="10px 0 0" textColor="#FFAB91" size={1} fit bold>Simple message editor</Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="#f44336">
          <Terminal title="~(zsh)" output={[
            "cd <downloaded path>/",
            "cd firebase-examples/",
            "cd hello-world/",
            "http-server",
            <div>
              <div style={{ color: "#DEC612" }}>Starting up http-server, serving <span style={{
                color: "#29B6F6"
              }}>./</span></div>
              <div style={{ color: "#DEC612" }}>Available on:</div>
              <div>    http://192.168.0.15:<span style={{
                color: "#9CCC65"
              }}>8080</span></div>
              <div>    http://127.0.0.1:<span style={{
                color: "#9CCC65"
              }}>8080</span></div>
              <div>Hit CTRL-C to stop the server</div>
            </div>]}
          />
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
