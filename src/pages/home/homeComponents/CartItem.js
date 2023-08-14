import { Button, Card } from 'antd';
const CardItem =({title,description,cartImg})=>{
  const { Meta } = Card;
  return(
    
    <Card className='justify-between pb-0 '
       hoverable
       style={{
         width: 240,
         minHeight:350,
       }}
       cover={<img alt="example" src={cartImg} />}
     >
       <Meta title={title} description={description}/>
      
     </Card>


  )
     
    
    
    }
    export default CardItem;