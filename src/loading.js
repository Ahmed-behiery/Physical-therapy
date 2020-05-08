import React, { Component } from 'react';
 
import LoadingBar from 'react-top-loading-bar';
 
export default class ExampleWithRefs extends Component {
  render() {
    return (
        <div>
        <LoadingBar
          progress={this.props.loadingBarProgress}
          height={3}
          color='red'
          onLoaderFinished={this.props.onLoaderFinished}
        />
      </div>
    );
  }
}