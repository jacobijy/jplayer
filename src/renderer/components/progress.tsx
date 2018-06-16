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
    constructor(props: IProgressProps) {
        super(props);

        this.state = {
            percent: 0
        };
    }

    render() {
        const { length = 80, height = 3, icon, backgroudcolor = '#5c5c5c', progresscolor = '#00b7c3' } = this.props;
        const { percent } = this.state;
        return (
            <div className='progressbar' style={{
                width: `${length}%`,
                marginLeft: `${(100 - length) / 2}%`,
                height: `${height}px`,
                backgroundColor: backgroudcolor,
                bottom: '100px',
                position: 'absolute'
            }}>
                <div className='fill-container'
                    style={{
                        marginLeft: 0,
                        width: `${percent}%`,
                        height: `${height}px`,
                        backgroundColor: progresscolor
                    }} >

                </div>
            </div>
        );
    }
}
