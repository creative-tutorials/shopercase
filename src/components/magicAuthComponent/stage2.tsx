import React from "react";
export function Stage2({
  pin1,
  pin2,
  pin3,
  pin4,
  pin5,
  pin6,
  HandleSubmitingDetails,
}: any) {
  return (
    <div id="stage2">
      <div id="header">
        <h3>Enter your Magic Pin</h3>
      </div>
      <div id="stage2-input">
        <input type="text" name="pin-1" id="pin-1" maxLength={1} ref={pin1} />
        <input type="text" name="pin-2" id="pin-2" maxLength={1} ref={pin2} />
        <input type="text" name="pin-3" id="pin-3" maxLength={1} ref={pin3} />
        <input type="text" name="pin-4" id="pin-4" maxLength={1} ref={pin4} />
        <input type="text" name="pin-5" id="pin-5" maxLength={1} ref={pin5} />
        <input type="text" name="pin-6" id="pin-6" maxLength={1} ref={pin6} />
      </div>
      <div id="stage-2-submit">
        <button onClick={HandleSubmitingDetails}>Submit</button>
      </div>
    </div>
  );
}
