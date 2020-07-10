import React, { Component, useState } from 'react';
import mastercard from '../img/master.png';
import MaskedInput from 'antd-mask-input';

class Card extends Component {

    render() {

        let [user, setUser] = useState(0);

        return (
            <div>
                <div className="credit-card-conn">
                    <div className="master-card-con"><img src={mastercard} /></div>
                    <div className="card-chip">
                        <div className="chip"><div className="liddle-chip"></div></div>
                        <div className="card-number">5170 4144 3822 4970</div>
                        <div className="card-userName">FULL NAME</div>
                        <div className="card-date">09/28</div>
                    </div>
                </div>

                <div className="card-input-conn">
                    <div>Enter Card Information</div>


                    <MaskedInput className="card-num-name" placeholder="5170 4144 3822 4970" mask="1111 1111 1111 1111" name="card" size="20" onChange={(e) => { setUser({ ...user, number: e.target.value }) }} />


                    <input type="text" placeholder="FULL NAME" className="card-num-name" onChange={(e) => { setUser({ ...user, name: e.target.value }) }} />


                    <MaskedInput className="card-number-input" mask="11/11" placeholder="09/28" name="date" size="5" onChange={(e) => { setUser({ ...user, date: e.target.value }) }} />



                    <MaskedInput className="card-number-input" mask="111" placeholder="CCV" name="ccv" size="3" onChange={(e) => { setUser({ ...user, ccv: e.target.value }) }} />

                </div>
            </div>
        )
    }
}

export default Card;