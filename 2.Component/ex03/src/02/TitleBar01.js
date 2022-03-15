import React , {Component} from 'react'

class TitleBar01 extends Component {
  
    constructor() {
        super(...arguments);
        // this.no VS this.state.no
        
        // this.no = 0;

        // init
        this.state = {
            no : 0
        };
      }

    OnClickHandler() {
        // this.no VS this.state.no
        
        // this.no++;
        // console.log(`TitleBar01 Clicked! ${this.no}`);

        // setState에서 다시 render를 한다.
        this.setState({
            no : this.state.no + 1
        });

        // render 안됨
        // this.state.no = this.state.no + 1;

        console.log(`TitleBar01 Clicked! ${this.state.no}`);
    }

    render() {
        return (
            <h1
                style={{cursor : 'pointer'}}
                onClick={this.OnClickHandler.bind(this)}>
                ex03 : Functional Event Handler (Class Component)
                <br />
                {
                    //this.no

                    this.state.no

                }
            </h1>
        );
    }

}

export default TitleBar01