import React from 'react'

export default function (code) {
    let arr = code.split('\n');
    arr.shift();
    arr.pop();
    return (
        <pre>
            {arr.map((item,index)=>(
                <p key={index}>{item.split('//')[0]}<span className="color-gray">{item.split('//').length>1?('//'+item.split('//')[1]):''}</span></p>
            ))}
        </pre>
    )
}