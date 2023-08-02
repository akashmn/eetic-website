import React from "react";
import "./css/award.css";
import Img from "../images/awardImg.jpg";
import Vid from "../videos/awardVid.mp4";

function Award() {
  return (
    <div className="aw-main">
      <div className="aw-heading">Congratulations!</div>
      <div className="aw-content">
        <div className="aw-text">
          Muhammed Bilal O P, founder of our club EETI, has been awarded the
          prestigious Education2.0 Outstanding Leadership Award for his
          exceptional contributions to education and technology integration. His
          visionary leadership has empowered our club to thrive as a platform
          for innovation and positive change in education. Congratulations on
          this well-deserved recognition!
        </div>
        <div className="aw-awardimg">
          <img src={Img} alt="award" height="450px" width="auto" />
        </div>
      </div>
      <div className="aw-awardvid">
        <video
          controls
          src={Vid}
          type="video/mp4"
          height="600px"
          width="auto"
        />
      </div>
    </div>
  );
}

export default Award;
