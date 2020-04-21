import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Box, Dialog, IconButton } from '@material-ui/core';
import { CustomComponent } from '.';
import { ZeroOrMoreElementsPropType } from './Util';
import * as CONSTANTS from '../Constants';

import CloseIcon from '@material-ui/icons/Close';

class Gallery extends CustomComponent
{
    constructor(props)
    {
        super(props);

        this.state = {
            open: false,
            fullScreenImage: null,
        };

        this.onClose = this.onClose.bind(this);
    }

    render()
    {
        return (
            <Box
                display='flex'
                flexWrap='nowrap'
                style={{ overflowX: 'scroll' }}
            >
                {
                    React.Children.map(this.props.children, child => React.cloneElement(child, {
                        height: this.props.height,
                        onClick: this.onOpenImage(child)
                    }))
                }
                <Dialog
                    fullScreen
                    open={ this.state.open }
                >
                    <Box
                        position='absolute'
                        top={0}
                        right={0}
                        margin={this.props.theme.spacing(CONSTANTS.ICON_BUTTON_SPACING, CONSTANTS.ICON_BUTTON_SPACING, 0, 0)}
                    >
                        <IconButton onClick={this.onClose}>
                            <CloseIcon/>
                        </IconButton>
                    </Box>
                    {this.state.fullScreenImage ? React.cloneElement(this.state.fullScreenImage, { width: 1 }) : undefined}
                </Dialog>
            </Box>
        );
    }

    onOpenImage(image)
    {
        return () => this.setState({
            open: true,
            fullScreenImage: image
        });
    }

    onClose()
    {
        this.setState({ open: false });
    }
}

Gallery.defaultProps = { height: 180 };

Gallery.propTypes = {
    height: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    theme: PropTypes.object.isRequired,
    children: ZeroOrMoreElementsPropType
};

export default withTheme(Gallery);