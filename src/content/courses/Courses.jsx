import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import './Courses.css'
export default function Courses() {

    const [courses, setCourses] = useState([]);
    useEffect(() => {

        axios.get('http://127.0.0.1:8000/api/courses')
        .then(res=>{
            setCourses(res.data);
        })
        .catch(err=>alert('Error: '+ err));
    }, [])
    const Evaluate = (props) =>{
        let a = [1,2,3,4,5];
        return (
            <>
                <i>
                    {
                        a.map(e=>( e-0.5 < props.evaluate)? <i key={e} className="fi fi-sr-star"> </i> : <i key={e} className="fi fi-rr-star"> </i>)
                    }
                </i>
                <span> {props.evaluate} </span>
            </>
        )
    }
    return (
        <div className='courses'>
        <h2> Suggested courses:</h2>
        <div className="row row-cols-4">
        {
            courses.map((e)=>
                <Link to={"/courses/"+e.id} key={e.id} className="col">
                    <div className="card">
                        <div className="card-main" style={{background:'linear-gradient(145deg, '+ e.color.replaceAll(';',',') +')' }}>
                            <div className="main">
                                {e.key}
                                <span>
                                    <Evaluate evaluate={e.evaluate}/>
                                </span>
                            </div>
                            <div className="desciption">
                                {e.description}
                            </div>
                        </div>
                        <div className="name">
                            {e.name}
                        </div>
                        <div className="price">
                            <span>
                                <i className="fi fi-rr-bookmark"> </i>{(e.price===0?'Khóa học miễn phí':e.price)}
                            </span>
                            <span>
                               {e.member} <i className="fi fi-rr-user"></i>
                            </span>
                        </div>
                    </div>
                </Link>  
            )
        }      
        </div>
        </div>
    )
}
