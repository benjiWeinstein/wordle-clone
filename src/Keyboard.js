import React from 'react'

export const Keyboard = ({dispatch}) => {
  return (
    <div id="keyboard-cont">
    <div className="first-row">
        <button className="keyboard-button" onClick={(e) => dispatch(e,'q')} >q</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'w')}>w</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'e')}>e</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'r')}>r</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'t')}>t</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'y')}>y</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'u')}>u</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'i')}>i</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'o')}>o</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'p')}>p</button>
    </div>
    <div className="second-row">
        <button className="keyboard-button" onClick={(e) => dispatch(e,'a')}>a</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'s')}>s</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'d')}>d</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'f')}>f</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'g')}>g</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'h')}>h</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'j')}>j</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'k')}>k</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'l')}>l</button>
    </div>
    <div className="third-row">
        <button className="keyboard-button" onClick={(e) => dispatch(e,'Backspace')}>Del</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'z')}>z</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'x')}>x</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'c')}>c</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'v')}>v</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'b')}>b</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'n')}>n</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'m')}>m</button>
        <button className="keyboard-button" onClick={(e) => dispatch(e,'Enter')}>Enter</button>
    </div>
</div>
  )
}
