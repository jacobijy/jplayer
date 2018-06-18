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
    private circle: HTMLDivElement;
    private bar: HTMLDivElement;
    private circleFocused: boolean;

    constructor(props: IProgressProps) {
        super(props);
        window.addEventListener('mousemove', this.changeProgress.bind(this));
        window.addEventListener('mouseup', this.restoreCircle.bind(this));
    }

    fillCircle() {
        this.circleFocused = true;
        this.circle.style.backgroundColor = '#00b7c3'
    }

    restoreCircle() {
        this.circleFocused = false;
        this.circle.style.backgroundColor = 'black'
    }

    changeProgress(event: MouseEvent) {
        if (!this.circleFocused || event.clientX === 0) {
            return;
        }

        const { length = 90 } = this.props,
            startX = window.innerWidth * (1 - length / 100) / 2,
            totalLength = window.innerWidth * length / 100;
        this.circle.style.opacity = '1';
        let clientX = event.clientX,
            progressLength = clientX - startX;
        progressLength = progressLength >= 0 ? progressLength <= totalLength ? progressLength : totalLength : 0;
        let percent = Math.floor(progressLength * 100 / totalLength);
        this.circle.style.marginLeft = `${percent}%`;
        this.bar.style.width = `${percent}%`;
    }

    render() {
        const {
            length = 90,
            height = 3,
            icon,
            backgroudcolor = '#5c5c5c',
            progresscolor = '#00b7c3',
            percent
        } = this.props;
        return (
            <div
                className='progressbar'
                style={{
                    width: `${length}%`,
                    marginLeft: `${(100 - length) / 2}%`,
                    height: `${height}px`,
                    backgroundColor: backgroudcolor,
                    position: 'absolute'
                }}
            >
                <div
                    className='fill-container'
                    ref={ref => this.bar = ref}
                    style={{
                        marginLeft: 0,
                        width: `${Math.floor(percent * 100)}%`,
                        height: `${height}px`,
                        backgroundColor: progresscolor
                    }} >
                </div>
                <div
                    className='circle'
                    ref={ref => this.circle = ref}
                    style={{ marginLeft: `${Math.floor(percent * 100)}%` }}
                    onMouseDown={this.fillCircle.bind(this)}
                    onMouseUp={this.restoreCircle.bind(this)}
                >
                </div>
            </div>
        );
    }
}
