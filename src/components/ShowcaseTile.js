import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, GridListTileBar, ButtonBase, Fade, Box, Typography, CircularProgress } from '@material-ui/core';
import { CustomComponent, Image, ConditionalRender } from '.';
import { PageDequePropType } from './Util';
import * as CONSTANTS from '../Constants';

class ShowcaseTile extends CustomComponent
{
    constructor(props)
    {
        super(props);

        this.state = {
            loading: true,
            hovering: false
        }

        this.onOpen = this.onOpen.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onLoad = this.onLoad.bind(this);
    }

    render()
    {
        return (
            <React.Fragment>
                <ButtonBase
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    onClick={this.onOpen}
                    onMouseOver={this.onMouseOver}
                    onMouseLeave={this.onMouseLeave}
                >
                    <Image
                        src={this.props.image}
                        width={1}
                        onLoad={this.onLoad}
                    />
                    <Fade in={this.state.hovering}>
                        <Box
                            position='absolute'
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            bgcolor={CONSTANTS.SHOWCASE_TILE_HOVER_TINT}
                            width={1}
                            height={1}
                        >
                            <Typography variant='button'>
                                View Details
                            </Typography>
                        </Box>
                    </Fade>
                </ButtonBase>
                <GridListTileBar title={this.props.label}/>
                <ConditionalRender condition={this.state.loading}>
                    <Box
                        position='relative'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        paddingBottom='100%'
                        width={1}
                        height={0}
                    >
                        <Box marginTop='-100%'>
                            <CircularProgress color='secondary'/>
                        </Box>
                    </Box>
                </ConditionalRender>
            </React.Fragment>
        );
    }

    onOpen()
    {
        this.props.pageDeque.push(this.props.children);
        this.props.pageDeque.finish();
    }

    onMouseOver()
    {
        this.setState({ hovering: true });
    }

    onMouseLeave()
    {
        this.setState({ hovering: false });
    }

    onLoad()
    {
        this.setState({ loading: false });
    }
}

ShowcaseTile.propTypes = {
    image: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
    pageDeque: PageDequePropType.isRequired,
    children: PropTypes.element.isRequired
};

export default withTheme(ShowcaseTile);