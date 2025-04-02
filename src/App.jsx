import React, { useState } from "react";
import './App.css';

export default function App() {
    const [color, setColor] = useState('#ffffff');
    const [rgba, setRgba] = useState('');

    const changeAction = (event) => {
        const value = event.target.value;

        if (value[0] === '#' && value.length === 7) {
            setColor(value);
            setRgba(hexToRgba(value));
        } else {
            setColor('#f45044');
            setRgba('Ошибка!');
        }
    };

    const hexToRgba = (hex) => {
        if (hex === 'Ошибка!') return hex;

        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r},${g},${b},1)`;
    };

    return (
        <div className={'mainContainer'} style={{ background: color }}>
            <form className={'mainForm'}>
                <input
                    className={'mainInput'}
                    type="text"
                    onChange={changeAction}
                    name="color"
                    placeholder={'Enter HEX color'}
                />
            </form>

            <div className={'mainText'}>
                {rgba}
            </div>
        </div>
    );
}
