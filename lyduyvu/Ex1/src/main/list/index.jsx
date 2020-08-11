import React from 'react';
import Iteam from './Iteam';
import './style.css';
function list(props) {

  const { dataList } = props;
  console.log("list -> dataList", dataList)
  
  
    const listContentCss={
      padding: 16,
    }
    
  return (
    <div className="list-container">
      <div style={listContentCss}>
        <h3>lisst</h3>
        <div className="row">
          <Iteam color={dataList[0].color} name={dataList[0].name} />
          <Iteam color={dataList[1].color} name={dataList[1].name} />
          <Iteam color={dataList[2].color} name={dataList[2].name} />
          
        </div>
        
      </div>
    </div>
    
  );
}

export default list;