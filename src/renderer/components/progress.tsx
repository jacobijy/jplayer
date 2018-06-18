import * as React from 'react';

interface IProgressProps {
    length?: number;
    height?: number;
    icon?: string;
    backgroudcolor?: string;
    progresscolor?: string;
    percent: number;
}

export default class Progress extends React.Component<IProgressProps> {
    constructor(props: IProgressProps) {
        super(props);
    }

    render() {
        const { length = 80,
            height = 3,
            icon,
            backgroudcolor = '#5c5c5c',
            progresscolor = '#00b7c3',
            percent
        } = this.props;
        return (
            <div className='progressbar' style={{
                width: `${length}%`,
                marginLeft: `${(100 - length) / 2}%`,
                height: `${height}px`,
                backgroundColor: backgroudcolor,
                position: 'absolute'
            }}>
                <div className='fill-container'
                    style={{
                        marginLeft: 0,
                        width: `${Math.floor(percent * 100)}%`,
                        height: `${height}px`,
                        backgroundColor: progresscolor
                    }} >
                </div>
            </div>
        );
    }
}
