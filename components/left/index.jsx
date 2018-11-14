import React, {Component} from 'react';
import AnimatedText from 'animatedtext';
import image from 'left/me.jpg';

const texts = ["Student", "Passionate Programmer", "Linux Lover", "Software Engineer", "Gamer"];

export default class extends Component {

    constructor() {
        super();
        this.state = {
            textIndex: 0
        };
    }

    componentDidMount() {
        this.changeInterval = setInterval(() => {
            let index = this.state.textIndex;
            index = (index + 1) % texts.length;
            this.setState({
                textIndex: index
            });
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.changeInterval);
    }

    render() {

        const highlight_color = '#5793DB';

        const img_style = {
            borderRadius: '50% 50% 50% 50%',
            width: '250px',
            height: '250px',
            border: '2px solid ' + highlight_color,
            marginTop: '4%',
            marginBottom: '4%'
        };

        const root_style = {
            textAlign: 'center',
            fontFamily: 'Lato',
            fontSize: '1.5em',
            color: '#1f1f1f'
        };

        const colored = {
            color: highlight_color,
            fontStyle: 'italic',
            borderBottom: '1px dotted ' + highlight_color,
            textDecoration: 'none',
            textAlign: 'left'
        };

        return (
            <div style={root_style}>
                <img src={image} style={img_style}/>
                <h2>Hi there!</h2>
                <div>I am Sachin</div>
                <div>I am a...<br/><AnimatedText style={colored} ease={"sineIn"} type={"string"}
                                                 value={texts[this.state.textIndex]} speed={600}/></div>
                <br/>
                <br/>
                <div style={{padding: '15px', fontSize: '0.8em'}}>
                    <em>
                        "Around here, however, we don't look backwards for very long.
                        We <span style={{color: highlight_color}}><b>Keep Moving Forward</b></span>, opening up new
                        doors and doing new things,
                        because we're curious... and curiosity keeps leading us down new paths."
                        <br/><span style={{float: 'right', marginRight: '10px'}}>— Walt Disney</span>
                    </em>
                </div>
            </div>
        )
    }
}
