import React from "react";
export function Stage1({ email, ValidateMail }: any) {
  return (
    <div id="stage1">
      <div id="header">
        <h3>
          <i className="fa-duotone fa-wand-magic-sparkles"></i> Magic Login
        </h3>
        <p>Signup using a Pin</p>
      </div>
      <div id="stage1-input">
        <input type="text" placeholder="Enter your email address" ref={email} />
        <i className="fa-regular fa-envelope"></i>
      </div>
      <div id="stage-1-submit">
        <button onClick={ValidateMail}>Next</button>
      </div>
    </div>
  );
}
