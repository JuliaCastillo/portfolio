import React from "react";

function FormInput() {
  return (
    <div>
      <label for="email-input">Email address</label>
      <input
        id="email-input"
        type="email"
        name="email"
        placeholder="jane.doe@example.com"
        required
      />
    </div>
  );
}

export default FormInput;
