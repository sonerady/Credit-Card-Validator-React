import React, { Component, useState } from 'react';
import mastercard from '../img/master.png';
import MaskedInput from 'antd-mask-input';
import { Button } from 'antd';
import swal from 'sweetalert';


export default function CardApp() {

    let [card, setCard] = useState({ "number": "6565 8652 3652 3652", "name": "FULL NAME", "date": "09/22", "cvc": "111" });

    let [transform, setTransform] = useState(0);

    return (
        <div>
            <div className={transform ? 'credit-card-conn-transform' : 'credit-card-conn'}>
                <div className={transform ? 'master-card-disp' : 'master-card-con'}><img src={mastercard} /></div>
                <div className={transform ? 'master-card-disp' : 'card-chip'}>
                    <div className="chip"><div className="liddle-chip"></div></div>
                    <div className="card-number">{card.number}</div>
                    <div className="card-userName">{card.name}</div>
                    <div className="card-date">{card.date}</div>
                </div>
                <div className={transform ? 'card-chip-cvc' : 'master-card-disp'}>
                    <div className="card-number-cvc"><input className="cvc_input_pass" type="password" value={card.cvc} /></div>
                </div>
            </div>

            <div className="card-input-conn">
                <div>Enter Card Information</div>

                <MaskedInput className="card-num-name" placeholder="6565 8652 3652 3652" mask="1111 1111 1111 1111" name="card" size="20" onChange={(e) => { setCard({ ...card, number: e.target.value }) }} />

                <input type="text" className="card-num-name" placeholder="FULL NAME" onChange={(e) => { setCard({ ...card, name: e.target.value }) }} />

                <MaskedInput className="card-number-input" mask="11/11" placeholder="09/22" name="date" size="5" onChange={(e) => { setCard({ ...card, date: e.target.value }) }} />

                <MaskedInput className="card-number-input cvc-card" onFocus={() => setTransform(() => transform + 1)} onBlur={() => setTransform(() => transform - 1)} mask="111" placeholder="CVC" name="cvc" size="3" onChange={(e) => { setCard({ ...card, cvc: e.target.value }) }} />

                <Button className="card-submit" onClick={() => swal("Congratulations!", "The purchase was successful..", "success", {button: false})}>Make the payment</Button>
            </div>
        </div>
    )

}