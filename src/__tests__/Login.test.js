import React from 'react'
import { shallow , mount} from 'enzyme'
import Login from '../components/Login/Login'
import { expect } from 'chai'
import { spy } from 'sinon'

it('renderizar sem crashing', () => {
    shallow(<Login />)
})
