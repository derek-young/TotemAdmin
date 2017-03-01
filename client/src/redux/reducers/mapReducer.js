const defaults = {
  //Add map properties to MapViewer component
  mapOptions: {
    defaultZoom: 16,
    defaultCenter: { lat: 37.769403, lng: -122.49 }
  },
  overlayOptions: {
    image: 'https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-307385678134/outside_lands.png',
    opacity: 0.7,
    imageBounds: {
      north: 37.771614,
      south: 37.765553,
      east: -122.481277,
      west: -122.496346
    }
  }
};

export default function userReducer(state = defaults, action) {
  switch(action.type) {
    case 'SIGNIN_SUCCESS': return { ...state }
  }
  return state;
};
