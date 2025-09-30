import React from "react";

class Toggle_2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
    }

    // Event Handler를 함수로 정의
    handleClick=()=> {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div align={"center"}>
                <button onClick={this.handleClick}>
                    Bind 생략 {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

export default Toggle_2;