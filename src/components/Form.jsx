import React, { useEffect, useState } from 'react';

const Form = () => {
  const [totalNumber, setTotalNumber] = useState(0);
  const [finishNumber, setFinishNumber] = useState(0);
  const [error, setError] = useState('');
  const [result, setResult] = useState('');

  const getTotalNumber = e => {
    setTotalNumber(Number(e.target.value));
  };

  const getFinishNumber = e => {
    setFinishNumber(Number(e.target.value));
  };

  useEffect(() => {
    if(finishNumber > totalNumber){
      setError('Finish task will be lower then total task');
      setResult('00');
      return
    }
    const getPersen = parseFloat((finishNumber / totalNumber) * 100) || '00';
    setResult(String(getPersen));
    setError('');
  }, [totalNumber, finishNumber]);

  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-64px)]">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="fieldset">
              <input onChange={getTotalNumber} type="number" className="input text-xl w-full" placeholder="Total Task" />
              <input onChange={getFinishNumber} name='finish' type="number" className="input text-xl w-full" placeholder="Finish Task" />
              <p className='text-[16px] text-red-600'>{error}</p>
              <h2 className='font-semibold text-center text-6xl'>{
                result == Infinity ? '00' : (result === '00' ? result : `${result.slice(0, 5)} %`)
              }</h2>
              <button type='reset' onClick={() => {
                setResult('00'),
                  setTotalNumber(0),
                  setFinishNumber(0)
              }} className='btn shadow-none rounded-sm text-sm p-4 mt-2 bg-[#099b83] text-white'>Clear</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;