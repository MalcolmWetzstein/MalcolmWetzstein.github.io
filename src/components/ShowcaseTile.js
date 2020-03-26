import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, GridListTileBar, ButtonBase, Fade, Box, Typography, CircularProgress } from '@material-ui/core';
import { CustomComponent, Image } from '.';

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
                            bgcolor='rgba(0, 0, 0, 0.25)'
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
                {
                    this.state.loading ? (
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
                    ) : undefined
                }
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
    pageDeque: PropTypes.shape({
        push: PropTypes.func.isRequired,
        unshift: PropTypes.func.isRequired,
        insert: PropTypes.func.isRequired,
        pop: PropTypes.func.isRequired,
        shift: PropTypes.func.isRequired,
        remove: PropTypes.func.isRequired,
        clear: PropTypes.func.isRequired,
        top: PropTypes.func.isRequired,
        bottom: PropTypes.func.isRequired,
        pageAt: PropTypes.func.isRequired,
        swapTop: PropTypes.func.isRequired,
        swapBottom: PropTypes.func.isRequired,
        swapAt: PropTypes.func.isRequired,
        finish: PropTypes.func.isRequired,
        withDequeProps: PropTypes.func.isRequired
    }).isRequired,
    children: PropTypes.element.isRequired
};

export default withTheme(ShowcaseTile);