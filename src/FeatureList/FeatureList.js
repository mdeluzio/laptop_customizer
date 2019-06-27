import React, {Component} from 'react';
import FeatureOption from '../FeatureOption/FeatureOption';

class FeatureList extends Component {
    render() {
        return (
          <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <FeatureOption 
              features={this.props.features}
              selected={this.props.selected}
              updateFeature={this.props.updateFeature} />
          </section>
        )
    }
}

export default FeatureList;