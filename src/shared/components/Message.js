import React from 'react';
import { Segment, Header, Divider } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const MessageCustom = ({children}) => (
<Segment>
    <Header as="h4" className="message-home"/>
    <Divider horizontal>{children}</Divider>
</Segment>
)

MessageCustom.propTypes = {
    children: PropTypes.string.isRequired
}

export default MessageCustom