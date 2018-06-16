import * as React from 'react';
import Progress from './components/progress';

export default class Controller extends React.Component {
    handleMouseOver(event: MouseEvent) {
        console.log(event);
    }

    handleMouseOut(event: MouseEvent) {
        console.log(event);
    }

    render() {
        return (
            <div
                id='controller'
                className='fill-container'
                onMouseOver={this.handleMouseOver.bind(this)}
                onMouseOut={this.handleMouseOut.bind(this)}
            >
                <Progress />
            </div>
        );
    }
}
