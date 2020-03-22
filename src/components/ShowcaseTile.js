import React from 'react';
import { withTheme, GridListTileBar, ButtonBase } from '@material-ui/core';
import { CustomComponent, Image } from '.';

class ShowcaseTile extends CustomComponent
{
    constructor(props)
    {
        super(props);

        this.onOpen = this.onOpen.bind(this);
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
                >
                    <Image
                        src={this.props.image}
                        alt={this.props.label}
                        width={1}
                    />
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
}

export default withTheme(ShowcaseTile);