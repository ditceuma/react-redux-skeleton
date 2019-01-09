import React from 'react'
import MessageCustom from '../shared/components/Message'
import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'

test('Link changes the class when ', () => {
    const component = shallow(
        <MessageCustom>Renderizar mensagem</MessageCustom>
    )
    expect(component.find('Segment')).to.have.lengthOf(1)
})


it('renderizar children quando for passado', ()=>{
    const wrapper = shallow((
        <MessageCustom>
            Não me FUTUCA
        </MessageCustom>
    ))
    expect(wrapper.contains('Não me FUTUCA')).to.equal(true)
})