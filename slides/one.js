import React from "react";
import {
  Heading,
  Slide,
  Text
} from "spectacle";

export class SlideOne extends React.Component {
  render() {
    return (
      <div hasSlideChildren>
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
      </div>
    );
  }
}
