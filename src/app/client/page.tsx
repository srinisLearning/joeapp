'use client'

import React from 'react';
import {useState} from 'react';

const ClientPage = () => {
  const [count, setCount] = useState(0)
    return (
      <div>
        <h1 className='text-7xl font-bold mb-4 text-center'>{count}</h1>
        <div className="text-center">
        <button className='btn btn-success m-4' onClick={() => setCount(count + 1)}>
           Increase Count
        </button>
        <button className='btn btn-warning m-4' onClick={() => setCount(count - 1)}>
           Decrease Count
        </button>
      </div>
      </div>
    );
  
}

export default ClientPage