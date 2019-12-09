import React, { Component } from "react";

class Calculator extends Component {
    state = {
        result: ""
    };
    btnVals = [7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", ".", 0, "=", "+"];

    handleClick(btnVal) {
        var old = this.state.result;
        if (btnVal === "=") {
            this.setState({
                result: eval(old).toString()
            });
        } else {
            this.setState({
                result: old + btnVal
            });
        }
    }
    render() {
        return (
            <div>
                <p>{this.state.result}</p>

                {this.btnVals.map((v, i) => {
                    return (
                        <span>
                            <button onClick={() => this.handleClick(v)}>{v}</button>
                            {(i + 1) % 4 == 0 ? <br /> : null}
                        </span>
                    );
                })}
            </div>
        );
    }
}

export default Calculator;
