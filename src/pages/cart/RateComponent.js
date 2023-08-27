import {  Rate  } from 'antd';
const RateComponent = ({starCount}) => {
  return (
   
      <Rate  defaultValue={starCount} disabled />
    
  );
};

export default RateComponent