import React from 'react';
import CustomComponent from './CustomComponent';
import { ButtonGroup, Button, Box, withTheme } from '@material-ui/core';
import * as CONSTANTS from '../Constants';

const BUTTON_SIZE = 24;

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
                let icon = null;
                if (this.props.icons)
                    icon = this.props.icons[index];

                if (child.type.custom)
                    return (
                        <Button onClick={this.clickHandler(index)}>
                            <Box minWidth={CONSTANTS.UNIT_INDENT*BUTTON_SIZE}>
                                {this.fullLabel(this.props.labels[index], icon)}
                            </Box>
                        </Button>
                    );
                else
                    return (
                        <Button>
                            <Box minWidth={CONSTANTS.UNIT_INDENT*BUTTON_SIZE}>
                                {React.cloneElement(child, { underline: 'none', color: 'inherit'}, this.fullLabel(this.props.labels[index], icon))}
                            </Box>
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

    fullLabel(text, icon)
    {
        return icon ? [text+' ', React.cloneElement(icon, { key: text, fontSize: 'inherit' })] : text;
    }
}

export default withTheme(Suggestions);