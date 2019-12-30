import React from 'react';
import CustomComponent from './CustomComponent';
import { ButtonGroup, Button, Box, withTheme } from '@material-ui/core';

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
            <Box display='flex' justifyContent='center'>
                <ButtonGroup variant='outlined' size='large' color='secondary'>
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
                if (child.type.custom)
                    return (
                        <Button onClick={this.clickHandler(index)}>
                            {this.props.labels[index]}
                        </Button>
                    );
                else
                    return (
                        <Button>
                            {React.cloneElement(child, { underline: 'none', color: 'inherit'}, this.props.labels[index])}
                        </Button>
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

export default withTheme(Suggestions);