import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import svg from "../images/workplace.svg";

class SubmitPage extends React.Component {
  state = {
    inputs: {
      url: { id: 1708763879, value: "" },
      description: { id: 735985047, value: "" },
      credit: { id: 1817374552, value: "" }
    },
    submitted: false
  };

  handleSubmit = async event => {
    const config = {
      cors: "https://cors-anywhere.herokuapp.com/", // <optional> doesn't display the cors error
      formUrl:
        "https://docs.google.com/forms/u/2/d/e/1FAIpQLSdNXWq8alZJdkbvWzJGXomhzGdvMKuAI5zpbsplL8tWLsYQsA/formResponse"
    };

    event.preventDefault();
    const { inputs } = this.state;
    const formData = new FormData();
    const inputsArray = Object.entries(inputs);

    inputsArray.forEach(function(item) {
      formData.append(`entry.${item[1].id}`, item[1].value);
    });

    await axios({
      url: `${config.cors}${config.formUrl}`,
      method: "post",
      data: formData,
      responseType: "json"
    })
      .then(response => {
        this.setState({ submitted: true });
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  handleChange = event => {
    const { value, name } = event.target;
    const { inputs } = this.state;

    inputs[name].value = value;

    this.setState({
      inputs
    });
  };

  render() {
    if (this.state.submitted) {
      return <Redirect to="/thank-you" />;
    }
    return (
      <div className="page submit-page">
        <div className="page-half">
          <img src={svg} alt="" />
        </div>
        <div className="page-half">
          <h1 className="page__title">Submit a Resource</h1>

          <div className="submission-form">
            <p>
              Have you created or do you know about a really great resource for
              designers? Please fill out this short form to submit your
              resource.
            </p>
            <p className="notice">
              Only the highest-quality resources will be added to this list.
            </p>
            <form
              className="submission-form"
              action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSdNXWq8alZJdkbvWzJGXomhzGdvMKuAI5zpbsplL8tWLsYQsA/formResponse"
              method="post"
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="submissionURL">
                Please provide the URL to the resource you're submitting:{" "}
                <span className="required">*</span>
              </label>
              <input
                className="submission-form__input"
                type="url"
                name="url"
                id="submissionURL"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="submissionDesc">
                Why is this resource useful for designers?{" "}
                <span className="required">*</span>
              </label>
              <textarea
                className="submission-form__input"
                name="description"
                id="submissionDesc"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="submissionCredit">
                If you'd like credit for your submission, please leave your name
                and website address.
              </label>
              <textarea
                className="submission-form__input"
                name="credit"
                onChange={this.handleChange}
                id="submissionCredit"
              />
              <input
                className="submission-form__button"
                type="submit"
                value="Submit Resource"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SubmitPage;
