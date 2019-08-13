import React from "react";

const ThankYouPage = () => {
  return (
    <div className="page thanks-page">
      <div className="page-container">
        <h1 className="page__title">Thank You!</h1>
        <p>
          I appreciate you submitting a resource. Check back later to see if
          I've added yours or sign up for the{" "}
          <a href="/weekly-digest">Weekly Digest</a> to get regular emails about
          new resources.
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
