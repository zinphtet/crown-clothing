import React from "react";
import './shoppage.scss';
import CollectionOverview from "../../components/collectionOverview/collectionOverview";
import {connect} from 'react-redux'
import withSpinner from "../../components/hocForSpinner/withSpinner";
import { createStructuredSelector } from "reselect";
import { selectIsFetching } from "../../components/Reducer/shop/shopSelector";
import {fetchStart } from "../../components/Reducer/shop/shopAction";

const ShopPageWithSpinner  = withSpinner(CollectionOverview)

class ShopPage extends React.Component {
  
  componentDidMount(){
    const {fetchStart} = this.props
    fetchStart();
  }
        
  render(){
    const {isLoading} = this.props
    return(
      <div className="shop-page">
         <ShopPageWithSpinner isLoading={isLoading}  />
      </div>
  )
  }
  }

  const mapStateToProps = createStructuredSelector({
    isLoading : selectIsFetching
  })
  const mapDispatchToProps = dispatch =>{
    return{
      fetchStart : collectionMap=>dispatch(fetchStart(collectionMap))
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);