import React from 'react';
import {connect} from 'react-redux';
import { Route } from "react-router-dom";
 import {updateCollections} from "../../redux/shop/shop.actions";

//import {createStructuredSelector} from 'reselect';

//import {selectShopCollections} from '../../redux/shop/shop.selectors';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';

import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import  WithSpinner  from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner (CollectionOverview);
const CollectionPageWithSpinner = WithSpinner (CollectionPage);

class ShopPage extends React.Component {
  state = {
    isLoading : true
  };

  unsubscribeFromSnapshat = null; 
  
  componentDidMount (){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections')
    this.unsubscribeFromSnapshat = collectionRef.onSnapshot(async snapshot => { 
     const collectionMap = convertCollectionSnapshotToMap(snapshot);
     updateCollections(collectionMap);
     this.setState({isLoading : false});
    })
  } 

  render (){
    const {match} = this.props;
    const {isLoading} = this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render= {(props) => 
          <CollectionOverviewWithSpinner isLoading={isLoading} {...props} /> }/>
        <Route path={`${match.path}/:collectionId`} render= {(props) => 
          <CollectionPageWithSpinner isLoading={isLoading} {...props} /> }/>
      </div>
    );
  }
}  

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap => 
  dispatch(updateCollections(collectionMap))
})

export default connect (null, mapDispatchToProps)(ShopPage);
