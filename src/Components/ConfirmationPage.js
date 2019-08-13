import React from "react";

const ConfirmationPage = () => {
  return (
    <div className="page thanks-page">
      <div className="page-container">
        <h1 className="page__title">Yay! You're on the list!</h1>
        <p>
          Thanks for subscribing to the Weekly Digest. I'll see you in your
          inbox soon.
        </p>
        <p>
          In the meantime, you can <a href="/">check out more resources</a> or
          even consider <a href="/submissions">submitting your own</a>.
        </p>
      </div>
    </div>
  );
};

export default ConfirmationPage;
