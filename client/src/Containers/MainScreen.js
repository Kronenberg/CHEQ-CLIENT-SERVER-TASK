import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//@ ACTIONS
import { getAllVasts, createVast } from '../Actions/vastActions';
import { getVastById } from '../Actions/vastItemActions';

// @COMPONENTS
import VastsList from '../Components/Vasts/VastsList';

class MainScreen extends Component {

  componentWillMount() {
    this.props.getAllVasts();
  }
  
  render() {
    console.log(this.props.vasts);
    return (
      <div>
      <VastsList 
        vasts={this.props.vasts}
        singleVast={this.props.singleVast}
        getVastById={this.props.getVastById}
        getAllVasts={this.props.getAllVasts}
        createVast={this.props.createVast}
      />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vasts: state.vastReducer,
    singleVast: state.singleVastReducer
  };
};

const  mapDispatchToProps = (dispatch) => {
  return {
    getVastById: bindActionCreators(getVastById, dispatch),
    getAllVasts: bindActionCreators(getAllVasts, dispatch),
    createVast: bindActionCreators(createVast, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);


