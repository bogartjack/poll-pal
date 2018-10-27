import React from 'react';
import { Link } from 'react-router-dom';
import "./MainPage.css";
import Countdown from '../Countdown/';
import ZipCodeSearch from '../ZipCodeSearch/';


const MainPage = (props) => (
    <div className="container" id="greeting">
        <div className="row">
            <div className="col-lg-12">
                <h1 id="first">POLL PAL</h1>
            </div>
            <div className="col-lg-12" >
                <h3 id="second">Voting is cool, let us help you</h3>
            </div>
        </div>
        {/* <Countdown /> */}
        <ZipCodeSearch user={props.user} updateUser={props.updateUser} />
    </div>
);

export default MainPage;
