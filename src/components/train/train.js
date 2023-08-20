import React, {useState} from 'react'

import './train.css'

const ListItem = ({ item, isActive, onMouseEnter, onMouseLeave }) => {

    return (
        <li
            className={isActive ? 'active' : 'item'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {item.name} {item.surname}
        </li>
    );
};


const List = () => {

    const data = [{
        name: 'alex',
        surname: 'kutcevol',
        id: 1
    }, 
    {
        name: 'Mike',
        surname: 'fjjisdjf',
        id: 2
    },
    {
        name: 'Lucy',
        surname: 'dsdfsdj',
        id: 3
    }]
    
    const [activeIndex, setActiveIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
        console.log(index)
        console.log(activeIndex)
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    const onClick = () => {
        setActiveIndex('active')
    }

    return (
        <ul className='list'>
            {data.map((item, index) => (
                <ListItem
                    key={index}
                    item={item}
                    isActive={index === activeIndex}
                    onClick={onClick}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                />
            ))}
        </ul>
    );
};

export default List;