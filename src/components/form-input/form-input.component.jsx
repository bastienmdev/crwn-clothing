import React from 'react';

import './form-input.styles.scss';

// the label prop is contingent on the developer. The dev may or may not want the form inputs to have a label hence the conditional statement. If there is a label prop thats passed down create label...

const FormInput = ({ handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input 
            className='form-input' 
            onChange={handleChange} {...otherProps}
        />
        { label ? (<label className={ `${otherProps.value.length ? 'shrink' : ''} form-input-label` }>
            {label} 
        </label>) : null }
    </div>
);

export default FormInput;