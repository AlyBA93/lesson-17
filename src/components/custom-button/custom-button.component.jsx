import React from 'react';

import './custom-buttom.styles.scss';

/*import {CustomButtonConatainer} from './custom-button.styles';


const CustomButton = ({children, ...props}) => (
  <CustomButtonConatainer {...props}> {children} </CustomButtonConatainer>
);

export default CustomButton;*/

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}>
      {children}
  </button>
);

export default CustomButton;