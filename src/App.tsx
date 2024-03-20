import React, { useState } from "react";

import { EventAnalyzer } from "event-analyzer";

const App: React.FC = () => {
  const [favoriteLanguage, setFavoriteLanguage] = useState("");

  const handleChange = (event: any) => {
    setFavoriteLanguage(event.target.value);
  };

  return (
    <EventAnalyzer>
      <div>
        <form method="POST">
          <label htmlFor="username">Username: </label>
          <input id="username" name="username" />
          <br />
          <br />
          <label htmlFor="password">Password: </label>
          <input id="password" name="password" type="password" />
          <p>Please select your favorite Web language:</p>
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
            checked={favoriteLanguage === "HTML"}
            onChange={handleChange}
          />
          <label htmlFor="html">HTML</label>
          <br />
          <input
            type="radio"
            id="css"
            name="fav_language"
            value="CSS"
            checked={favoriteLanguage === "CSS"}
            onChange={handleChange}
          />
          <label htmlFor="css">CSS</label>
          <br />
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
            checked={favoriteLanguage === "JavaScript"}
            onChange={handleChange}
          />

          <label htmlFor="javascript">JavaScript</label>
          <br />
          <br />
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            value="Checkbox"
          />
          <label htmlFor="checkbox"> I have a bike</label>
          <br />
          <br />
          <button type="submit">Register</button>
        </form>
        <br />
        <button>One punch</button>
      </div>
    </EventAnalyzer>
  );
};

export default App;
