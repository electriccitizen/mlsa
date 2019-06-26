import React from "react";
let stateObj = {
      foo: "bar",
    };
function RedirectPage() {
  window.history.pushState(stateObj, "Google.com", "redirect")
  window.location.href='http://www.google.com'
  return (
    <div>Error</div>
  );
}

export default RedirectPage;



//

