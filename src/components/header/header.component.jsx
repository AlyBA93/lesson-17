import React from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from "reselect";

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/trg-logoHD.svg';

import {HeaderContainer, Logocontainer, OptionContainer, OptionLink, OptionDiv} from './header.styles';

import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from  '../../redux/cart/cart.selectors';
// import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <Logocontainer to='/'>
      <Logo className='logo' />
    </Logocontainer>
    <OptionContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);
