import React from "react";

const SubmitPage = () => {
  return <div className="submission-form">
      <h1>Submit a Resource</h1>
      <p>Have you created or do you know about a really great resource for designers? Please fill out this short form to submit your resource.</p>
      <p className="notice">Only the highest-quality resources will be added to this list</p>
      <form class="submission-form" action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdNXWq8alZJdkbvWzJGXomhzGdvMKuAI5zpbsplL8tWLsYQsA/formResponse" method="post" target="hidden_iframe" onsubmit="submitted=true;" _lpchecked="1">
        <label htmlFor="submissionURL">Please provide the URL to the resource you're submitting:</label>
        <input class="submission-form__input" type="url" name="entry.1708763879" id="submissionURL" value="" required />
        <label htmlFor="submissionDesc">Why is this resource useful for designers?</label>
        <textarea class="submission-form__input" name="entry.735985047" id="submissionDesc" value="" required ></textarea>
        <label htmlFor="submissionCredit">If you'd like credit for your submission, please leave your name and website address.</label>
        <textarea class="submission-form__input" name="entry.1817374552" id="submissionCredit" value=""></textarea>
        <input class="submission-form__button" type="submit" value="Submit Resource"></input>

        
      </form>
  </div>;
};

export default SubmitPage;
