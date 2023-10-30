import React from "react";

function Home() {
  return (
    <div className="main" id="Home">
      <div className="main_content">
        <div className="main_text">
          <h1>
            Text
            <br />
            <span>Sample</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 
            1500s, when an unknown printer took a galley of type and scrambled 
            it to make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularized in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="main_image">
          <img src="website-logo-WAK.png" alt="logo" />
        </div>
      </div>
      <div className="button">
        <a href="#">Still figuring out what to do with this button</a>
      </div>
    </div>
  );
}

export default Home;