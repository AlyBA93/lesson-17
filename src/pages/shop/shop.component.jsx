import React from 'react';
import {connect} from 'react-redux';
import { Route } from "react-router-dom";

import {createStructuredSelector} from 'reselect';

import {selectShopCollections} from '../../redux/shop/shop.selectors';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';

import CollectionPage from '../collection/collection.component';

const ShopPage = ({match}) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview}/>
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
  </div>
);


const mapStateToProps = createStructuredSelector ({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);
