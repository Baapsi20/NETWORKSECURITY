import React, { Component } from 'react';
class Counter extends Component {
    state =
    {
        count: 0,
        tags: ['tag1','tag2','tag3'],
            imageUrl: 'https://blockonomi-9fcd.kxcdn.com/wp-content/uploads/2018/09/blockchain-governance.jpg',
            backgroundPosition:'center',
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            width: '100',
            height:'100'
    };
    constructor()
    {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    styles = 
    {
        fontSize: 50, fontWeight: "bold"
    };
    renderTags()
    {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag=><li key = {tag}>{tag}</li>)}</ul>;
    }
    handleIncrement = () => {
        this.setState({count: this.state.count + 1})
    }
    doHandleIncrement = () => {
        this.handleIncrement({id: 1});
    };
    render()
    {
        
        return(
            <div>
                {/* <img src={this.state.imageUrl} alt=""/> */}
                <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement} className="btn btn-warning btn-sm">Connect Wallet</button>
            </div>
        );
    }
    getBadgeClasses()
    {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount()
    {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}  
export default Counter;