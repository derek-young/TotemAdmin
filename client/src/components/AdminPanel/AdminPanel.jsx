import React from 'react';
import { Route } from 'react-router-dom';
import { withGoogleMap } from 'react-google-maps';
import MapViewer from '../MapViewer/MapViewer';
import localStyles from './AdminStyles.css';

const AdminPanel = (props) => {
  function previewFile(){
    const preview = document.getElementById('mapPreview');
    const file = document.getElementById('fileupload').files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div>
      <header className={localStyles.header}>
        <div>
          Dashboard
        </div>
        <div>
          Profile
        </div>
      </header>
      <div>
        <nav>
          <ul>
            <li>Basic Profile</li>
            <li>Map and Geofences</li>
            <li>Schedule</li>
          </ul>
          <button>
            Save and View Dashboard
          </button>
        </nav>
        <section>
          <div>
            <form id="uploadbanner" encType="multipart/form-data" method="post" action="#">
              <input id="fileupload" name="overlayMap" type="file" onChange={previewFile} />
              <br />
              <input type="submit" value="Save" id="submit" />
            </form>
            <img src="" width="200" alt="Map Preview" id="mapPreview" />
          </div>
          <div>
            <MapViewer />
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminPanel;
