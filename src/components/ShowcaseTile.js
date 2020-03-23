import React from 'react';
import { withTheme, GridListTileBar, ButtonBase, Fade, Box, Typography } from '@material-ui/core';
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
                        alt={this.props.label}
                        width={1}
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
        this.setState({ loading: true });
    }
}

export default withTheme(ShowcaseTile);