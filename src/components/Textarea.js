import React from 'react';

const TextInput = (props) => {
  return (
    <div className="form-group">
      <textarea className="form-control" {...props} />
    </div>
  );
};

export default TextInput;
