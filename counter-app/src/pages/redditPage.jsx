import React from 'react'
import PostComponent from '../components/post'

const RedditPage = () => {
    const data = [
        {
            name: "Road widening project, Cart Road Shimla",
            description: "This project involves widening Cart road, Shimla to allow more mobility of cars.",
            votes: {
                up:10,
                down:45
            }
        },
        {
            name: "Changing name of baby",
            description: "My gf had sex with some other guy, and I thought that baby was my child but now his biological father demands a name change.",
            votes: {
            up: 100,
            down: 4
        }
    },
    {
        name: "Sex with Russian",
        description: "How much does a Russian cost in Shimla?",
        votes: {
                up: 1000,
                down: 0
            }
        },
        {
            name: "Road widening project, Cart Road Shimla",
            description: "This project involves widening Cart road, Shimla to allow more mobility of cars.",
            votes: {
                up: 10,
                down: 45
            }
        },
        {
            name: "Road widening project, Cart Road Shimla",
            description: "This project involves widening Cart road, Shimla to allow more mobility of cars.",
            votes: {
                up: 10,
                down: 45
            }
        },
    ]
    return (
        <div>
            {(data.length) ?
                data.map((item, index) => {
                    return (
                        <PostComponent name={item.name} description={item.description} votes={item.votes} key={index} /> 
                    )
                })
            :
                <>
                <div>"Sorry but there are no words!"</div>
                </>
            }
       </div>
    )
}
export default RedditPage