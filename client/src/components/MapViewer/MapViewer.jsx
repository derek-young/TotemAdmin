import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import GroundOverlay from './GroundOverlay';

class MapViewer extends Component {
  render() {
    console.log(this.props)
    const LoadMap = withGoogleMap(props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={16}
        defaultCenter={{ lat: 37.769403, lng: -122.49 }}
        mapTypeId= 'terrain'
        options={{ streetViewControl: false, mapTypeControl: false }}
        onClick={()=>{ console.log('map clicked') }}
        >

        <GroundOverlay
          image='https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-307385678134/outside_lands.png'
          opacity={0.7}
          imageBounds={{
            north: 37.771614,
            south: 37.765553,
            east: -122.481277,
            west: -122.496346
          }
        }/>
      </GoogleMap>
    ));

    return (
      <LoadMap
        containerElement={ <div/> }
        mapElement={ <div style={{ height: window.innerHeight - 50 }} /> }
        onMapLoad={this.handleMapLoad.bind(this)}
      />
    );
  }

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) map.getZoom();
  }
}

export default connect((store) => {
  return {
    map: store.map
  };
})(App);
