import React from 'react';
import { Link } from 'react-router-dom';
import localStyles from './HomeStyles.css';

const Home = () => {
  return (
    <div className={'clearfix'}>
      <div className={localStyles.image}>
        <img src='img/totem.png' />
      </div>
      <div className={localStyles.left}>
        <h1>Welcome to Totem.</h1>
        <p>
          Totem gives you and your friends an easy and intuitive interface for
          locating one another at large events. Create a group, add your
          friends, and setup custom geolocations for your meeting places.
          Use it for festivals, conferences, or even ski areas.
        </p>
        <p>
          <span>Festivals - </span>
          Setup basecamp and broadcast it to your friends. See your location
          overlaid on the venue map. View the set list for each stage and the
          festival schedule all in one place.
        </p>
        <p>
          <span>Conferences - </span>
          View your location relative to the breakout session rooms. Set your
          itinerary and get alerts for what’s next and where to be.
        </p>
        <p>
          <span>Ski Areas - </span>
          Arrange meeting places. Pinpiont you and your friends on the ski map
          to see which run you’re about to crush, find the nearest warming hut,
          or rendezvous at the next chairlift.
        </p>
      </div>
      <div className={localStyles.right}>
        <div className={localStyles.get}>
          <p>Get the app.</p>
          <div>
            <a href="#" target="_blank">
              <img src='img/appstore.png' />
            </a>
            <a href="#" target="_blank">
              <img src='img/googleplay.png' />
            </a>
          </div>
        </div>
        <div className={localStyles.backgroundLine}>
          <p>Or</p>
        </div>
        <div className={localStyles.register}>
          <h3>Register Your Venue</h3>
            <input type="text" placeholder="Company" />
          <div className={localStyles.name}>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Create Password" />
        </div>
        <button>
          Register
        </button>
      </div>
    </div>
  );
}

export default Home;
