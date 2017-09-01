import React, {Component} from 'react';
import SVGLoader from 'svgloader';
import FaPlane from 'react-icons/lib/fa/plane';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';
import FaBriefcase from 'react-icons/lib/fa/briefcase';
import FaCode from 'react-icons/lib/fa/code';
import FaBank from 'react-icons/lib/fa/bank';
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

        const colored = {
            color: '#87cefa',
            fontStyle: 'italic',
            borderBottom: '1px dotted #87cefa',
            textDecoration: 'none'
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

        const loc_labels_style = {
            marginLeft: '4vw',
            marginRight:'4vw'
        };

        const loc_div_style = {
            textAlign: 'justify',
            width: '60px'
        };

        const loc_img_style = {
            display: 'block',
            margin: '0 auto'
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
                        <Tab style={{backgroundColor: '#1f1f1f', borderBottom: this.state.tabIndex === 0 ? 'thin solid #1f1f1f' : 'none'}}>
                            <div style={{width: '10vw'}}>
                                <FaInfoCircle size={35} color={'#ffffff'}/><br/><span style={{color: '#fff'}}>About</span>
                            </div>
                        </Tab>
                        <Tab style={{backgroundColor: '#1f1f1f', borderBottom: this.state.tabIndex === 1 ? 'thin solid #1f1f1f' : 'none'}}>
                            <div style={{width: '10vw'}}>
                                <FaBriefcase size={35} color={'#ffffff'}/><br/><span style={{color: '#fff'}}>Work</span>
                            </div>
                        </Tab>
                        <Tab style={{backgroundColor: '#1f1f1f', borderBottom: this.state.tabIndex === 2 ? 'thin solid #1f1f1f' : 'none'}}>
                            <div style={{width: '10vw'}}>
                                <FaBank size={35} color={'#ffffff'}/><br/><span style={{color: '#fff'}}>School</span>
                            </div>
                        </Tab>
                        <Tab style={{backgroundColor: '#1f1f1f', borderBottom: this.state.tabIndex === 3 ? 'thin solid #1f1f1f' : 'none'}}>
                            <div style={{width: '10vw'}}>
                                <FaCode size={35} color={'#ffffff'}/><br/><span style={{color: '#fff'}}>Projects</span>
                            </div>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <ul className="list-unstyled list-inline text-center">
                            <li>
                                <img src={doon} alt="Dehradun" style={img_style}/>
                                <figcaption style={{fontSize: '0.7em', color: '#ffffff'}}>Dehradun</figcaption>
                            </li>
                            <li>
                                <FaPlane size={35} color={'#ffffff'} transform="rotate(0 0 0)" style={svg_style}/>
                            </li>
                            <li>
                                <img src={pune} alt="Pune" style={img_style}/>
                                <figcaption style={{fontSize: '0.7em', color: '#ffffff'}}>Pune</figcaption>
                            </li>
                            <li>
                                <FaPlane size={35} color={'#ffffff'} transform="rotate(90 0 0)" style={svg_style}/>
                            </li>
                            <li>
                                <img src={riverside} alt="Riverside" style={img_style}/>
                                <figcaption style={{fontSize: '0.7em', color: '#ffffff'}}>Riverside</figcaption>
                            </li>
                            <li>
                                <FaPlane size={35} color={'#ffffff'} transform="rotate(0 0 0)" style={svg_style}/>
                            </li>
                            <li>
                                <img src={austin} alt="Austin" style={img_style}/>
                                <figcaption style={{fontSize: '0.7em', color: '#ffffff'}}>Austin</figcaption>
                            </li>
                        </ul>
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
