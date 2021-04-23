import React, { useEffect, useState } from 'react';
import Title from './Title';
import Project from './Project';
import '../app.css';
// import data from './data';
const Workpage = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    // const res = await fetch('http://localhost:5000', {
    const res = await fetch('/project', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data1 = await res.json();
    setData(data1);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='Workpage' id='work'>
      <div className='container height py-5 '>
        <Title
          name='project '
          subtitle='Latest Projects.'
          desc='Here you can find some of the projects that I created recently'
        />
        <div className='row gy-5 my-5'>
          {/* card */}
          {data.map((element, index) => {
            return <Project key={index} element={element} index={index} />;
          })}
          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default Workpage;
