
import React from 'react';
import './BigRedButton.scss';

interface BigRedButtonProps {
  onClick(event: React.MouseEvent):void;
  sizeInPx: number;
  playAudio: boolean;
}

const defaultProps = {
    sizeInPx: 200,
    playAudio: true,
};

const BigRedButton = (props: BigRedButtonProps) => {
    const style = {
        width: `${props.sizeInPx}px`,
        height: `${props.sizeInPx}px`
    };

    const handleClick = (event: React.MouseEvent) => {
        props.onClick(event);
    };

    return (
        <div className='brb-wrapper' style={style}>
            <div className='brb-wrapper-inner'>
                <button className='brb-button' onClick={handleClick}><div className='highlight' /></button>
            </div>
        </div>
    );
};

BigRedButton.defaultProps = defaultProps;

export default BigRedButton;