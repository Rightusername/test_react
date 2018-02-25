import React from 'react';
import { bindActionCreators } from 'redux'

import * as studiosListActions from '../../actions/studios';
import './style.css';

import { connect } from 'react-redux';
import { Link } from 'react-router';

import PropTypes from 'prop-types';

import { Slider, Switch, Row, Col, Input } from 'antd';
const Search = Input.Search;

import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(studiosListActions, dispatch)
})

class StudiosList extends React.Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        this.props.actions.getStudios();
    }

    filterPrice(e){
        this.props.actions.filterStudios(e);
    }

    render() {
        const { studios } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="wrapper">
                        <Row>
                            <Col className="studios" xs={14} sm={16} md={18} >
                                {studios.map((item, index) =>
                                    <Col xs={24} sm={12} md={8} lg={6} key={index}>
                                        <Grid key={index} style={{margin: 10}}>
                                            <Card>
                                                <CardMedia
                                                    image={item.view.toString()}
                                                    className="image"
                                                />
                                                <CardContent>
                                                    <Typography type="headline" component="h2" className="title">
                                                        {item.name}
                                                    </Typography>
                                                    <Typography component="p" className="description">
                                                        {item.price}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Col>
                                )}
                            </Col>
                            <Col className="settings" xs={10} sm={8} md={6} style={{padding : 10}}>
                                <Search placeholder="Умный поиск"/>
                                <div>
                                    Стоимость
                                    <span style={{ float: "right" }}>
                                        { this.props.state.filterStudios[0]}
                                         - 
                                        { this.props.state.filterStudios[1]}
                                    </span>
                                </div>
                                <Slider range defaultValue={[this.props.state.filterStudios[0], this.props.state.filterStudios[1]]} min={0} max={12000} onChange={this.filterPrice.bind(this)}/>
                            </Col>
                        </Row>
                        
                        <div>
                           
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        studios: state.studio.filter(item =>
            item.price > state.filterStudios[0]
        ),
        state: state,
        ownProps
    }),
    mapDispatchToProps
)(StudiosList);