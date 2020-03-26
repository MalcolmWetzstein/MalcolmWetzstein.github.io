import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button, Box, withTheme } from '@material-ui/core';
import { CustomComponent, Center } from '.';
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
                <ButtonGroup
                    variant='outlined'
                    size='large'
                    color='secondary'
                >
                    {this.buttonsFromChildren()}
                </ButtonGroup>
            </Box>
        );
    }

    buttonsFromChildren()
    {
        return React.Children.map(this.props.children,
            (child, index) =>
            {
                return child.type.custom ? (
                    <Button onClick={this.clickHandler(index)}>
                        <Box minWidth={CONSTANTS.BUTTON_SIZE}>
                            {this.props.labels[index]}
                        </Box>
                    </Button>
                ) : (
                    React.cloneElement(child,
                        {
                            variant: 'outlined',
                            color: 'secondary'
                        }, 
                        <Box minWidth={CONSTANTS.BUTTON_SIZE}>
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
    labels: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
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
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element.isRequired), PropTypes.element]).isRequired
};

export default withTheme(Suggestions);