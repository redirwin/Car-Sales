import React from "react";
import { connect } from "react-redux";

// import actions
import { addFeature } from "./actions/actions";
import { removeFeature } from "./actions/actions";

// import components
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  addItem = feature => {
    this.props.addFeature(feature);
  };

  removeItem = feature => {};

  render() {
    return (
      <div className="boxes">
        <div className="box">
          <Header car={this.props.car} />
          <AddedFeatures car={this.props.car} removeItem={this.removeItem} />
        </div>
        <div className="box">
          <AdditionalFeatures store={this.props.store} addItem={this.addItem} />
          <Total
            car={this.props.car}
            additionalPrice={this.props.additionalPrice}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  };
};

export default connect(
  mapStateToProps,
  { addFeature, removeFeature }
)(App);
