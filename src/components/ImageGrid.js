import React from 'react';
import CustomComponent from './CustomComponent';
import { Grid, withTheme, ButtonBase, Typography, Box } from '@material-ui/core';

class ImageGrid extends CustomComponent {
    render() {
        return (
            <Grid container spacing={this.props.spacing}>
                { this.items() }
            </Grid>
        );
    }

    items() {
        return this.props.images.map( (image, index) => {
            return (
                <Grid item xs={12 / (this.props.columns ? this.props.columns : 3)}>
                    <ButtonBase
                        onClick={ Array.isArray(this.props.onClick) ? this.props.onClick[index] : this.props.onClick(index) }
                        style={{ width: '100%', height: '100%', position: 'relative', textAlign: 'center' }}
                    >
                        <img
                            src={image}
                            alt=''
                            style={{ width: '100%', height: '100%', objectFit: 'fill'}}
                        />
                        <Box 
                            position='absolute'
                            top='50%'
                            left='50%'
                            style={{ transform: 'translate(-50%, -50%)' }}
                            bgcolor='rgba(0, 0, 0, 0.3)'
                            padding={ this.props.theme.spacing(1, 1, 1, 1) }
                        >
                            <Typography variant='button'>
                                { this.props.labels[index] }
                            </Typography>
                        </Box>
                    </ButtonBase>
                </Grid>
            );
        });
    }
}

export default withTheme(ImageGrid);