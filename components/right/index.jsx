import React, {Component} from 'react';
import SVGLoader from 'svgloader';
import FaPlane from 'react-icons/lib/fa/plane';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';
import FaBriefcase from 'react-icons/lib/fa/briefcase';
import FaCode from 'react-icons/lib/fa/code';
import FaBank from 'react-icons/lib/fa/bank';
import FaFileText from 'react-icons/lib/fa/file-text';
import doon from 'right/doon.png'
import pune from 'right/pune.png'
import riverside from 'right/riverside.png'
import austin from 'right/austin.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import 'right/style.css';

export default class extends Component {

    constructor() {
        super();
        this.state = {
            tabIndex: 0
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        const highlight_color = '#5793DB';

        const root_style = {
            textAlign: 'center',
            fontFamily: 'Lato',
            fontSize: '1.5em',
            overflow: 'scroll'
        };

        const dotted_line = {
            borderBottom: '1px dotted #fff',
            margin: '1px 50px 1px 50px'
        };

        const img_style = {
            borderRadius: '50% 50% 50% 50%',
            width: '60px',
            height: '60px',
            border: '2px solid ' + highlight_color,
            marginTop: '4%',
            marginBottom: '4%'
        };

        const svg_style = {
            marginTop: '-8vh',
            marginLeft: '2vw',
            marginRight: '2vw',
            marginBottom: '0'
        };

        const tab_title_style = {
            color: '#1f1f1f',
            fontSize:'0.5em',
            justifyContent: 'center'
        };

        const about_style = {
            color: '#1f1f1f',
            fontSize: '0.7em',
            marginLeft: '1vw',
            marginRight: '1vw'
        };

        const colored_text = {
            color: highlight_color
        };

        return (
            <div style={root_style}>
                <ul className="contact">
                    <li>
                        <a id="pfacebook" target="blank" href="https://www.facebook.com/sachin.shinde2">
                            <SVGLoader value={"facebook"}/>
                        </a>
                    </li>
                    <li>
                        <a id="pandroid" target="blank"
                           href="http://play.google.com/store/apps/developer?id=sachin+shinde">
                            <SVGLoader value={"android"}/>
                        </a>
                    </li>
                    <li>
                        <a id="pgit" target="blank" href="https://github.com/sachin1092/">
                            <SVGLoader value={"git"}/>
                        </a>
                    </li>
                    <li>
                        <a id="plinkedin" target="blank" href="http://in.linkedin.com/in/sachin1092">
                            <SVGLoader value={"linkedin"}/>
                        </a>
                    </li>
                    <li>
                        <a id="pmail" target="blank" href="mailto:me@sachinshinde.com">
                            <SVGLoader value={"mail"}/>
                        </a>
                    </li>
                </ul>


                {/*<div style={dotted_line}/>*/}
                <Tabs  selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList>
                        <Tab style={{backgroundColor: '#fff', borderBottom: this.state.tabIndex === 0 ? 'thin solid #fff' : 'none'}}>
                            <div style={{width: '10vw'}}>
                                <FaInfoCircle size={35} color={'#1f1f1f'}/><br/><span style={tab_title_style}>About</span>
                            </div>
                        </Tab>
                        <Tab style={{backgroundColor: '#fff', borderBottom: this.state.tabIndex === 1 ? 'thin solid #fff' : 'none'}}>
                            <div style={{width: '10vw'}}>
                                <FaBriefcase size={35} color={'#1f1f1f'}/><br/><span style={tab_title_style}>Work</span>
                            </div>
                        </Tab>
                        <Tab style={{backgroundColor: '#fff', borderBottom: this.state.tabIndex === 2 ? 'thin solid #fff' : 'none'}}>
                            <div style={{width: '10vw'}}>
                                <FaBank size={35} color={'#1f1f1f'}/><br/><span style={tab_title_style}>School</span>
                            </div>
                        </Tab>
                        <Tab style={{backgroundColor: '#fff', borderBottom: this.state.tabIndex === 3 ? 'thin solid #fff' : 'none'}}>
                            <div style={{width: '10vw'}}>
                                <FaCode size={35} color={'#1f1f1f'}/><br/><span style={tab_title_style}>Projects</span>
                            </div>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <ul className="list-unstyled list-inline text-center">
                            <li>
                                <img src={doon} alt="Dehradun" style={img_style}/>
                                <figcaption style={{fontSize: '0.7em', color: '#1f1f1f'}}>Dehradun</figcaption>
                            </li>
                            <li>
                                <FaPlane size={35} color={'#1f1f1f'} transform="rotate(0 0 0)" style={svg_style}/>
                            </li>
                            <li>
                                <img src={pune} alt="Pune" style={img_style}/>
                                <figcaption style={{fontSize: '0.7em', color: '#1f1f1f'}}>Pune</figcaption>
                            </li>
                            <li>
                                <FaPlane size={35} color={'#1f1f1f'} transform="rotate(90 0 0)" style={svg_style}/>
                            </li>
                            <li>
                                <img src={riverside} alt="Riverside" style={img_style}/>
                                <figcaption style={{fontSize: '0.7em', color: '#1f1f1f'}}>Riverside</figcaption>
                            </li>
                            <li>
                                <FaPlane size={35} color={'#1f1f1f'} transform="rotate(0 0 0)" style={svg_style}/>
                            </li>
                            <li>
                                <img src={austin} alt="Austin" style={img_style}/>
                                <figcaption style={{fontSize: '0.7em', color: '#1f1f1f'}}>Austin</figcaption>
                            </li>
                        </ul>

                        <div style={about_style}>

                            Born and brought up in <span style={colored_text}>Dehradun, India</span>. Finished my undergrad in Computer Engineering at <span style={colored_text}>Pune, India</span> and Masters in Computer Engineering at <span style={colored_text}>Riverside, CA</span>.
                            Currently working at IBM Watson in Watson Applied Research Lab (<span style={colored_text}>Austin, TX</span>). <br/>
                            <p>
                                I love to explore and develop new stuff. Passionate about new technologies.
                                If you want to chat up or discuss about anything.<br/>
                                Feel free to shoot me an email at<br/>
                                <span style={colored_text}>me 'at' sachinshinde.com</span>
                            </p>

                            Checkout my resume to know more about me.<br/><br/>
                            <a href={"https://drive.google.com/file/d/0B9ONfV0200c2N05KMzdVVUdjUUk/view"} target={"_blank"}><FaFileText size={35} color={'#1f1f1f'}/><br/><span style={{color: '#1f1f1f', fontSize: '1em'}}>Resume</span></a>
                        </div>


                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}
