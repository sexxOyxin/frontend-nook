import React from 'react'

export default function EventProps() {
    function btnclickPT (e) {
        console.log('e: ', e);
    }

    const btnclickJT = (e) => {
        console.log('e: ', e);
    };

    function btnclickPT_p (name, e) {
        console.log('name: ', name);
        console.log('e: ', e);
    }

    const btnclickJT_p = (e, name) => {
        console.log('name: ', name);
        console.log('e: ', e);
    };

  return (
    <div>
        <button onClick={btnclickPT}>clickPT</button>
        <button onClick={btnclickJT}>clickJT</button>
        <button onClick={(e) => btnclickPT_p('btnclickPT_p', e)}>clickPT - porps</button>
        <button onClick={(e) => btnclickJT_p(e, 'btnclickJT_p')}>clickJT - porps</button>
    </div>
  )
}
