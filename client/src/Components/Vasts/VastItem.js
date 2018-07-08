import React, { Component } from 'react';

class SelectedVastItem extends Component {
    render() {
    const {response, success } = this.props.selectedVast;
      return (
        <div>
        {success ? <div className="card"> 
            <a className="card" href="#">
                <span className="card-header">
                    <span className="card-title">
                        <h3>{success ? response.data.json[0].vast_url : ''}</h3>
                    </span>
                </span>
                <span className="card-summary">
                <h3>XML DATA</h3>
                {success ? response.data.xml : ''}
                </span>
                <span className="card-meta">
                   {success ? response.data.json[0].id : ''}
                </span>
            </a>
        </div> : 'No item selected'}
        </div>
      )
    }
}

export default SelectedVastItem;