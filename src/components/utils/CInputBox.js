import React from "react";
import PropTypes from "prop-types";

export default function CInputBox(props) {
  const {
    label,
    defaultValue,
    onChange,
    text,
    isError,
    errorMessage,
    type,
    isRequired,
    isReadOnly,
    keyValue,
  } = props;
  return (
    <>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-buttonColor-loginButton"
      >
        {text}
      </label>
      <div className="mt-1">
        <input
          type={type || "text"}
          name={label}
          key={keyValue || defaultValue}
          defaultValue={defaultValue}
          onChange={onChange}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          required={isRequired}
          readOnly={isReadOnly}
          autoComplete="new-password"
        />
        {isError ? (
          <p className="mt-2 text-sm text-red-600" id="email-error">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </>
  );
}
CInputBox.propTypes = {
  isRequired: PropTypes.bool,
  isReadOnly: PropTypes.bool,
};
