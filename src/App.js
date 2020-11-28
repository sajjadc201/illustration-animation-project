import React from "react";
import "./styles.css";
import { Container } from "@material-ui/core";
import { Home } from "./component/Home";
import Main from "./component/Main";
import { WatchVideos } from "./component/WatchVideos";
import { PracticeDaily } from "./component/PracticeDaily";
import { Developer } from "./component/Developer";
import { Footer } from "./component/Footer";

export default function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Home />
        <Main />
        <WatchVideos />
        <PracticeDaily />
        <Developer />
        <Footer />
      </Container>
    </div>
  );
}
