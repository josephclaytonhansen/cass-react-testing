import React from 'react'
import { ListGroup } from 'react-bootstrap'

const CharacterDropdown = ({show, pos, characters}) => {
    return (
        <div className="dropdown" style={{display: show ? 'block' : 'none', position: 'absolute', top: pos.y, left: pos.x}}>
            <ListGroup>
                {characters.map((character, index) => {
                    return (
                        <ListGroup.Item key={index}>{character.name}</ListGroup.Item>
                    )
                })}
            </ListGroup>
        </div>
    )
}

export default CharacterDropdown