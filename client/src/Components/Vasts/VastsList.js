import React, { Component } from 'react';

// @COMPONENTS 
import VastItem from './VastItem';
import CreateVastForm from './CreateVastForm';

class VastsList extends Component {
    constructor() {
        super();

        this.state = {
            selectedItemID: null
        }
    }

    submitFormHandler = (values) => {
        
      this.props.createVast(values);
      this.props.getAllVasts();

    }

    render() {
        const { vasts, singleVast } = this.props;
        const selectedVast = singleVast && singleVast.success ? singleVast : singleVast;
        const vastsList = vasts && vasts.success ? vasts.response.data.json
        .reverse()
        .map(item => (
            <tr 
                key={item.id}
                onClick={() => this.props.getVastById(item.id)}
            >
            <td>{item.id}</td>
            <td>{item.vast_url}</td>
            <td>{item.position}</td>
            <td>{item.hide_ui ? "hide" : "show"} </td>
            </tr>  
        )
    ) : '';
      return (
        <div> 
            <div>
                <VastItem 
                    selectedVast={selectedVast}
                />
            </div>
            <div>
                <CreateVastForm 
                    onSubmit={this.submitFormHandler}
                />
            </div>    
          <div>
            <table className="fixed_headers">
            <thead>
                <tr>
                <th>id</th>
                <th>vast_url</th>
                <th>position</th>
                <th>hide_ui</th>
                </tr>
            </thead>
            <tbody>
                {vastsList} 
                <div>{vastsList === "" ? 'CREATE YOUR FIRST VAST' : ''}</div>
            </tbody>
            </table>
        </div>
        </div>
      )
    }
}

export default VastsList;