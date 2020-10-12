import React from 'react'

export default function Person(props){

        return (
            <ul>
                <li>{props.name}</li>
                <li>{props.age}</li>
                <li>{props.loc}</li>
            </ul>
        )

}