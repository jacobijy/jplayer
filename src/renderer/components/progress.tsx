import * as React from 'react';

interface IProgressProps {
    length?: number;
    height?: number;
    icon?: string;
    backgroudcolor?: string;
    progresscolor?: string;
}

interface IProgressState {
    percent: number;
}

export default class Progress extends React.Component<IProgressProps, IProgressState> {
    render() {
        const { length = 80, height = 4, icon, backgroudcolor = '#5c5c5c', progresscolor = '#00b7c3' } = this.props;
        const bg = {
            width: `${length}%`,
            height: `${height}px`,
        };
        return (
            <div className='progressbar' style={Object.assign({}, bg, {color:backgroudcolor})}>
                <div className='fill-container' style={Object.assign({}, bg, {color:progresscolor})}>

                </div>
            </div>
        );
    }
}
