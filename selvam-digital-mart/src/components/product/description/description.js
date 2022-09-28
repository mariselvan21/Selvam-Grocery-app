import './description.css';
import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';

function Description(){
    var params=useParams();
    // console.log(params.id);
    const[currentItem,setCurrentItem]=useState({});
    useEffect(()=>{
        fetch('https://633293e2573c03ab0b4b5764.mockapi.io/'+params.category+'/' +params.id).then((response)=>{
            if(response.ok){
                return response.json();
            }
            return false;
        }).then((item)=>{
            setCurrentItem(item)
        })
    },[])
    return(
        <div className='description'>
            <div className='container'>
                <div className='descriptionBox' >
                    <div className='descriptionImage'>
                        <img src={currentItem.image}></img>
                    </div>
                    <div className='descriptionDetail'>
                        <div className='descriptionName'>{currentItem.name}</div>
                        <div className='descriptiondetail'>{currentItem.detail}</div>
                        <div className='descriptionoffer'>{currentItem.offer}</div>
                        <div className='descriptionPrice'>{currentItem.price}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description;