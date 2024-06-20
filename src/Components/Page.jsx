import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Page.css'
import Pagination from './Pagination'

const Page = () => {
    const[data,setData]=useState([]);
    const[perpage,setPerpage]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            res=>{setData(res.data);
                setPerpage(res.data.slice(0,10));
            }
        )
    },[])

    const pageHandler=(pageNumbers)=>{
        setPerpage(data.slice((pageNumbers*10)-10,pageNumbers*10));
    }
  return (
    <div className='page-container'>
            {data.length >= 1 ? (
                <div className='posts-container'>
                    {perpage.map(post => 
                        <div className='post'>
                            <h4 className='post-title'>{post.title}</h4>
                        </div>)}
                        <Pagination data={data} pageHandler={pageHandler} />
                </div>
            ) : (
                <p className='loading'>Data Not Loaded</p>
            )}
        </div>
    );
}
export default Page
