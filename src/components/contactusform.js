import React from 'react';
import '../styles/contactus.scss';

const TextInput = (props) => {
  return (
    <div className="form-group">

      <input type="text" className="form-control" {...props} />

    </div>
  );
};

export default TextInput;
