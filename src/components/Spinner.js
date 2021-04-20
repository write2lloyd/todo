import React from "react";
import { css } from "@emotion/core";
import { SquareLoader } from "react-spinners";


// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const spinner = (props) => {
    return (
        <div className="sweet-loading">
        <SquareLoader
            css={override}
            size={50} // or 150px
            color={"#FF8A65"}
            loading={props.loading}
        />
        </div>
    );
}

export default spinner;
