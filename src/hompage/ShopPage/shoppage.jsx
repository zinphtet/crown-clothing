import React from "react";
import './shoppage.scss';
import CollectionOverview from "../../components/collectionOverview/collectionOverview";
import {db,convertCollectionSnapshotToMap} from '../../firebase/firebase'
import updateCollections from "../../components/Reducer/shop/shopAction";
import {connect} from 'react-redux'
import withSpinner from "../../components/hocForSpinner/withSpinner";


const ShopPageWithSpinner  = withSpinner(CollectionOverview)

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  state={
    loading:true
  }
  componentDidMount(){
    const {updateCollections} = this.props
        const collectionRef = db.collection('collection')
      this. unsubscribeFromSnapshot=collectionRef.onSnapshot(async snapShot =>{
        const collectionMap =  convertCollectionSnapshotToMap(snapShot)
        updateCollections(collectionMap)
        this.setState({loading:false})

        })
  }
        
  render(){
    return(
      <div className="shop-page">
         <ShopPageWithSpinner isLoading={this.state.loading}  />
      </div>
  )
  }
  }

  const mapDispatchToProps = dispatch =>{
    return{
      updateCollections : collectionMap=>dispatch(updateCollections(collectionMap))
    }
  }


export default connect(null,mapDispatchToProps)(ShopPage);