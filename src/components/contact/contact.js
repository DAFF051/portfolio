import React, { useState } from 'react';
import axios from 'axios';

function inputForm () {
  /* NEW: Input state handling vvvv */
  const [valiedEmail, setValiedEmail] = useState(true);
  const [inputs, setInputs] = useState({
    email: '',
    message: ''
  });
  const handleOnChange = event => {
    event.persist();
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
  };
  /* End input state handling ^^^^ */

  // Server state handling
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      setInputs({
        email: '',
        message: ''
      });
    }
  };
  const handleOnSubmit = event => {
    event.preventDefault();
    setServerState({ submitting: true });
    axios({
      method: 'POST',
      url: 'http://localhost:5000/contact',
      data: inputs
    })
      .then(r => {
        handleServerResponse(true, 'Thanks!');
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error);
        setValiedEmail(false);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center text-center align-items-center my-4">
        <div className="col-12">
          <h1 className="font-weight-bolder text-success">Contact Me!</h1>
        </div>
        <form className="col-12" onSubmit={handleOnSubmit}>
          <div className="row justify-content-center text-center my-4">
            <label className="col-2 font-weight-bold" htmlFor="email">Email:</label>
            <input
              className="col-6"
              id="email"
              type="email"
              name="email"
              required
              onChange={handleOnChange}
              value={inputs.email}
            />
            {!valiedEmail && <div className="text-warning col-8 py-2">this email is not valid</div> }
          </div>
          <div className="row justify-content-center align-items-center text-center">
            <label className="col-2 font-weight-bold" htmlFor="message">Message:</label>
            <textarea
              id="message"
              className="col-6"
              name="message"
              required
              onChange={handleOnChange}
              value={inputs.message}
              style={{ height: 150 }}
            />
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-8 my-5">
              <button type="submit" className="btn btn-lg btn-outline-secondary" disabled={serverState.submitting}>
                Submit
              </button>
            </div>
            {serverState.status && (
              <div className={!serverState.status.ok ? 'errorMsg' : 'col-8'}>
                <h3 className="font-weight-bolder text-primary"> {serverState.status.msg}</h3>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default inputForm;
