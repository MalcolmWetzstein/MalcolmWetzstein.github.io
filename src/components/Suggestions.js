import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button, Box, withTheme, Hidden } from '@material-ui/core';
import { CustomComponent, Center } from '.';
import { PageDequePropType, OneOrMoreElementsPropType } from './Util';
import * as CONSTANTS from '../Constants';

class Suggestions extends CustomComponent
{
    constructor(props)
    {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }

    render()
    {
        return (
            <Box
                display='flex'
                justifyContent='center'
            >
                <Hidden xsDown>
                    <ButtonGroup
                        variant='outlined'
                        size='large'
                        color='secondary'
                    >
                        {this.renderButtons()}
                    </ButtonGroup>
                </Hidden>
                <Hidden smUp>
                    <ButtonGroup
                        variant='outlined'
                        size='large'
                        color='secondary'
                        orientation={React.Children.count(this.props.children) > 2 ? 'vertical' : 'horizontal'}
                        fullWidth={React.Children.count(this.props.children) > 2}
                    >
                        {this.renderButtons()}
                    </ButtonGroup>
                </Hidden>
            </Box>
        );
    }

    renderButtons()
    {
        return React.Children.map(this.props.children, (child, index) =>
            {
                return child.type.custom ? (
                    <Button onClick={this.clickHandler(index)}>
                        <Box minWidth={this.props.theme.spacing(CONSTANTS.SUGGESTION_BUTTON_SIZE)}>
                            {this.props.labels[index]}
                        </Box>
                    </Button>
                ) : (
                    React.cloneElement(child,
                        {
                            variant: 'outlined',
                            color: 'secondary'
                        }, 
                        <Box minWidth={this.props.theme.spacing(CONSTANTS.SUGGESTION_BUTTON_SIZE)}>
                            <Center>
                                {this.props.labels[index]}
                            </Center>
                        </Box>
                    )
                );
            }
        );
    }

    clickHandler(index)
    {
        return () => {
            this.props.pageDeque.clear();
            this.props.pageDeque.push(React.Children.toArray(this.props.children)[index]);
            this.props.pageDeque.finish();
        };
    }
}

Suggestions.propTypes = {
    theme: PropTypes.object.isRequired,
    labels: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    pageDeque: PageDequePropType.isRequired,
    children: OneOrMoreElementsPropType
};

export default withTheme(Suggestions);