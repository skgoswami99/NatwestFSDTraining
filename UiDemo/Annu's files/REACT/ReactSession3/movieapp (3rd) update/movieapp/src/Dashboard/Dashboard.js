import React from 'react'

class Dashboard extends React.Component
{  
    constructor()
    {
        super()   
        this.state = {
            'UserName':'User1',
            'Password':'User1Pass'
        };

        this.changeState = this.changeState.bind(this);

    }

    changeState()
    {
        this.setState({'UserName':'User2'});
        this.setState({'Password':'User2Password'});
    }

    render()
    {
        return(
            <div>

                <h2>
                {this.state.UserName}
                <br></br>
                {this.state.Password}
                </h2>

                <button onClick={this.changeState}>Click Me!!</button>

            </div>   
        )
    }
}

export default Dashboard;