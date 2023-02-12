import React from 'react'

class Dashboard extends React.Component {

    // step2: need to declare the value of username we used in h2 below.
    // step3: need to use constructor to define the current state using this.state.
    constructor ()
    {
        super()
        this.state = {

        'UserName' : 'Sandeep'
    }
// step6: lastly, we need to bind our functions using .bind(this) so that it can finally work.
        this.changeState = this.changeState.bind(this);
        this.changeState1 = this.changeState1.bind(this);

    }

    // step4: Now create a function to change the current state using setstate.
    // this will change the state on some event that we need to define as well.
    changeState() 

    {
        this.setState({'UserName' : 'Vivek'}) ;
    }
    changeState1() 

    {
        this.setState({'UserName' : 'Sandeep'}) ;
    }

    // Step1:- we start with what we want on our webpage. Here we defined UserName in h2.
    render() {

        return (
            
            <div>
    {/*step5: here we're now declaring the event and called the function we created */}
                <h2 onMouseEnter={this.changeState} onMouseLeave={this.changeState1}>

                    {this.state.UserName}
                </h2>

                {/* <button onClick={}>Click Me!!</button> */}

            </div>
            
            )

    }
}
export default Dashboard;