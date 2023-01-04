import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Trade } from "../components/Trade";

const stories = storiesOf("Trade", module);

stories.add("Trade", () => {
    return (
        <div>
            <Trade/>
        </div>
    );
});
