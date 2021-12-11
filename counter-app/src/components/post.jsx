import React, {useEffect,useState} from 'react'
const PostComponent = ({name, description, votes}) => {
    const [data, setData] = useState({
        name: '', 
        description: '', 
        votes: {
            up: null, 
            down: null, 
            upvoted: false, 
            downvoted: false
        }
    })

    const updateUpVote = () =>
    {
        // upvote code here
        let countUpdate = data.votes.upvoted ? (data.votes.up - 1) : (data.votes.up+1)
        setData({...data, votes: {...data.votes, up: countUpdate, upvoted: !data.votes.upvoted}})
        refreshcomponent()
    }
    const updatedownVote = () => 
    {
        // downvote code here
        let countUpdate = data.votes.downvoted ? (data.votes.down - 1) : (data.votes.down+1)


        setData({...data, votes: {...data.votes, down: countUpdate, downvoted: !data.votes.downvoted}})
        refreshcomponent()
    }
    const refreshcomponent = () => 
    {
        //component refresher
        // setData({...data, name, description, votes })

    }

    useEffect(() => {
        return setData({...data, name, description, votes})
    }, [])
    return (
        <div className="card">
            <div className="row">
                <div className="col-2">
                    <div>
                        <button className="btn btn-link" onClick={updateUpVote}>&#8679; {data.votes.up}</button>
                        <button className="btn btn-link" onClick={updatedownVote}>&#8681; {data.votes.down}</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card-header">
                        <h3>{data.name}</h3>
                    </div>
                    <div className="card-body">
                        {data.description}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PostComponent;