import React from "react";
import "../design/styles.css";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import AboutSection from "./AboutSection";
import Services from "./Services";
const Home = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>RBB Electrical</title>
      </head>
      <body>
        <NavigationBar />
        <Header />

        <main>
          <AboutSection />
          <Services />
        </main>
      </body>
    </html>
  );
};
export default Home;
