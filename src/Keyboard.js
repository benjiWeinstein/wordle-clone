import React from 'react'

export const Keyboard = ({dispatch}) => {
  return (
    <div id="keyboard-cont">
    <div className="first-row">
        <button className="keyboard-button" onClick={() => dispatch('q')} >q</button>
        <button className="keyboard-button" onClick={() => dispatch('w')}>w</button>
        <button className="keyboard-button" onClick={() => dispatch('e')}>e</button>
        <button className="keyboard-button" onClick={() => dispatch('r')}>r</button>
        <button className="keyboard-button" onClick={() => dispatch('t')}>t</button>
        <button className="keyboard-button" onClick={() => dispatch('y')}>y</button>
        <button className="keyboard-button" onClick={() => dispatch('u')}>u</button>
        <button className="keyboard-button" onClick={() => dispatch('i')}>i</button>
        <button className="keyboard-button" onClick={() => dispatch('o')}>o</button>
        <button className="keyboard-button" onClick={() => dispatch('p')}>p</button>
    </div>
    <div className="second-row">
        <button className="keyboard-button" onClick={() => dispatch('a')}>a</button>
        <button className="keyboard-button" onClick={() => dispatch('s')}>s</button>
        <button className="keyboard-button" onClick={() => dispatch('d')}>d</button>
        <button className="keyboard-button" onClick={() => dispatch('f')}>f</button>
        <button className="keyboard-button" onClick={() => dispatch('g')}>g</button>
        <button className="keyboard-button" onClick={() => dispatch('h')}>h</button>
        <button className="keyboard-button" onClick={() => dispatch('j')}>j</button>
        <button className="keyboard-button" onClick={() => dispatch('k')}>k</button>
        <button className="keyboard-button" onClick={() => dispatch('l')}>l</button>
    </div>
    <div className="third-row">
        <button className="keyboard-button" onClick={() => dispatch('Backspace')}>Del</button>
        <button className="keyboard-button" onClick={() => dispatch('z')}>z</button>
        <button className="keyboard-button" onClick={() => dispatch('x')}>x</button>
        <button className="keyboard-button" onClick={() => dispatch('c')}>c</button>
        <button className="keyboard-button" onClick={() => dispatch('v')}>v</button>
        <button className="keyboard-button" onClick={() => dispatch('b')}>b</button>
        <button className="keyboard-button" onClick={() => dispatch('n')}>n</button>
        <button className="keyboard-button" onClick={() => dispatch('m')}>m</button>
        <button className="keyboard-button" onClick={() => dispatch('Enter')}>Enter</button>
    </div>
</div>
  )
}
