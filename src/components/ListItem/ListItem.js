import React, {useRef} from 'react';
import { useDrag, useDrop, DragSource } from 'react-dnd';
import {ItemTypes} from "../../types";
import './listItem.css';

export function ListItem({value, id, type, handleChangePros, index, moveCard}){

    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ItemTypes[type],
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }

            if(!value) {
                return
            }

            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current && ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveCard(type, dragIndex, hoverIndex);

            item.index = hoverIndex;
        }
    });

    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes[type], id, index },
        canDrag: () => value,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0.4 : 1;
    drag(drop(ref));

    return (
        <li ref={ref} className={'list-item'} style={{ opacity }}>
            <input type="text" defaultValue={value} autoComplete={'off'} onChange={(e) => handleChangePros(index, e, type)} />
        </li>
    )
}
