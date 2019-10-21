import React from 'react'
import ColorsJson from "./colorsJson";
import './colors.css'

class Colors extends React.Component {
    constructor(props) {
        super(props);
        this.changeBakColor = this.changeBakColor.bind(this);
        this.state = {
            bakColor: '#f97d1c',
            activeIndex: '',
        }
    }

    changeBakColor(e, val, index) {
        this.setState({
            bakColor: val,
            activeIndex: index
        })
    }

    render() {
        const dataJson = ColorsJson.data;
        return (
            <div className='colors-container' style={{backgroundColor: this.state.bakColor}}>
                <div className='colors-area'>
                    <div className='colors-pick'>
                        {this.state.bakColor}
                    </div>
                    <ul>
                        {
                            dataJson.map((item, i) => (
                                <li className={this.state.activeIndex === i ? 'active' : ''}
                                    style={{borderColor: item.hex}} key={i}
                                    onClick={e => this.changeBakColor(e, item.hex, i)}>{item.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Colors;