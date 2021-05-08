import React, { useRef, useState } from 'react';
import clamp from 'lodash-es/clamp';
import swap from 'lodash-move';
import { useGesture } from 'react-use-gesture';
import { useSprings, animated, interpolate } from 'react-spring';
import './styles.css';
import LoadSpinner from 'components/LoadSpinner';
// Returns fitting styles for dragged/idle items
const fn = (order, down, originalIndex, curIndex, y) => index =>
  down && index === originalIndex
    ? { y: curIndex * 100 + y, scale: 1.1, zIndex: '1', shadow: 15, immediate: n => n === 'y' || n === 'zIndex' }
    : { y: order.indexOf(index) * 100, scale: 1, zIndex: '0', shadow: 1, immediate: false };

export default function DraggableList({ items }) {
  const [load, setLoad] = useState(false)
  const order = useRef(items.map((_, index) => index)); // Store indicies as a local ref, this represents the item order
  const [springs, setSprings] = useSprings(items.length, fn(order.current)); // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  const bind = useGesture(({ args: [originalIndex], down, delta: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex);
    const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1);
    const newOrder = swap(order.current, curIndex, curRow);
    setSprings(fn(newOrder, down, originalIndex, curIndex, y)); // Feed springs new style data, they'll animate the view without causing a single render
    if (!down) order.current = newOrder;
  });
  // console.log(bind(0));
  return (
    <div className="content" style={{ height: items.length * 500 }}>
      {
        springs.map(({ zIndex, shadow, y, scale }, i) => (
          <animated.div
            {...bind(i)}
            key={i}
            style={{
              zIndex,
              boxShadow: shadow.interpolate(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
              transform: interpolate([y, scale], (y, s) => `translate3d(0,${4 * y}px,0) scale(${s})`),
              minHeight: 400,
              "&:hover": {
                boxShadow: '0 0 2px 2px grey',
              }

            }}
            children={items[i].url ? <div className='each-project'
            // onClick={() => window.open(items[i].url, '_blank', '')}
            >
              <div className='project-label-container'>
                <a href={items[i].url} target='_blank' rel='noreferrer' className='projects-label'>
                  {items[i].title}
                </a>
                {
                  items[i].git &&
                  <i
                    style={{ fontSize: '24px' }}
                    className="fab fa-github-alt project-git"
                    onClick={() => window.open(items[i].git, '_blank', '')}
                  ></i>
                }
              </div>
              {!load && <LoadSpinner />}
              <iframe
                id={i === 0 ? 'email' : ''}
                title={items[i].title} key={i}
                className='projects-iframe' src={items[i].url}
                onLoad={() => setLoad(true)}
              >

              </iframe>
            </div> :
              <div className='each-project' onClick={() => window.open(items[i].git, '_blank', '')}>

                <div className='project-label-container'>
                  <a className='projects-label' href={items[i].git}>{items[i].title}</a>
                  {
                    items[i].git &&
                    <i
                      style={{ fontSize: '24px' }}
                      className="fab fa-github-alt project-git"
                    ></i>
                  }
                </div>
                <div style={{ backgroundImage: items[i].img, }}
                  className='jungle-screen'></div>
              </div>
            }
          />
        ))
      }
    </div>
  );
}
