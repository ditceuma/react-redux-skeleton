import React from 'react'
import { Label } from "semantic-ui-react";
import '../../../App.css'

import MessageCustom from '../Message'

const HeaderTitle = ({ title, label, color = "blue" }) => (
    <React.Fragment>
        {
            title &&
            <MessageCustom>{title}</MessageCustom>
        }
        {
            label &&
            <Label content={label}
                color={color} />
        }
    </React.Fragment>
)

export default HeaderTitle