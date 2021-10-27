import React from 'react'
import { useParams } from 'react-router-dom';

export default function DetailsCourses() {
    const {id} = useParams();
    return (
        <div>
            Day la khoa hoc so: {id}
        </div>
    )
}
