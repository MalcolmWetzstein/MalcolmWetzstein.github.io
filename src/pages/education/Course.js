import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid, Tooltip, Divider, Box, Button, Typography } from '@material-ui/core';
import { CustomComponent, Indent, Space, Bullets } from '../../components';
import * as CONSTANTS from '../../Constants';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Course extends CustomComponent
{
    constructor(props)
    {
        super(props);

        this.state = {
            hover: false,
            open: false
        };

        this.ref = React.createRef();

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    render()
    {
        return (
            <ExpansionPanel
                expanded={this.state.open}
                TransitionProps={{ timeout: 'auto' }}
                ref={this.ref}
            >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    onClick={this.onClick}
                    onMouseOver={this.onMouseOver}
                    onMouseLeave={this.onMouseLeave}
                >
                    <Grid
                        container
                        direction='row'
                        alignItems='center'
                    >
                        <Grid
                            item
                            xs={6}
                        >
                            <Indent>
                                <Typography variant='h6'>
                                    {this.props.label}
                                </Typography>
                            </Indent>
                        </Grid>
                        <Grid
                            item
                            xs={2}
                        >
                            <Tooltip title={CONSTANTS.COURSE_LEVEL_TOOLTIPS[this.props.level]}>
                                {
                                    this.state.hover || this.state.open ? (
                                        <Typography
                                            variant='subtitle1'
                                            color='textSecondary'
                                            align='center'
                                        >
                                            {CONSTANTS.COURSE_LEVELS[this.props.level]}
                                        </Typography>
                                    ) : (
                                        <Typography
                                            variant='subtitle1'
                                            color='textSecondary'
                                            align='center'
                                        >
                                            &bull;
                                        </Typography>
                                    )
                                }
                            </Tooltip>
                        </Grid>
                        <Grid
                            item
                            xs={1}
                        />
                        <Grid
                            item
                            xs={2}
                        >
                            <Tooltip title={CONSTANTS.COURSE_ASSESSMENT_TOOLTIPS[this.props.assessment]}>
                                {
                                    this.state.hover || this.state.open ? (
                                        <Typography
                                            variant='subtitle1'
                                            color='textSecondary'
                                            align='center'
                                        >
                                            {CONSTANTS.COURSE_ASSESMENT_STYLES[this.props.assessment]}
                                        </Typography>
                                    ) : (
                                        <Typography
                                            variant='subtitle1'
                                            color='textSecondary'
                                            align='center'
                                        >
                                            &bull;
                                        </Typography>
                                    )
                                }
                            </Tooltip>
                        </Grid>
                    </Grid>
                </ExpansionPanelSummary>
                <Divider/>
                <ExpansionPanelDetails>
                    <Box paddingRight='24px'>
                        <Space size='xs'/>
                        <Indent>
                            <Typography variant='h6'>
                                {'Course ' + this.props.number}
                            </Typography>
                            <Typography
                                variant='subtitle2'
                                color='textSecondary'
                            >
                                {this.props.school}
                            </Typography>
                            <Typography
                                variant='subtitle2'
                                color='textSecondary'
                            >
                                {this.instructors()}
                            </Typography>
                            <Space size='sm'/>
                            <Indent>
                                <Typography variant='body1'>
                                    {this.props.description}
                                </Typography>
                            </Indent>
                            <Space size='sm'/>
                            <Typography variant='subtitle1'>
                                Topics:
                            </Typography>
                            <Bullets
                                focus
                                bullets={this.props.topics}
                            />
                        </Indent>
                    </Box>
                    <Box
                        position='absolute'
                        right={0}
                        bottom={0}
                        margin='0 24px 24px 0'
                    >
                        <Button
                            onClick={this.onClick}
                            size='small'
                        >
                            Close
                        </Button>
                    </Box>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }

    instructors()
    {
        if (this.props.instructors)
        {
            if (Array.isArray(this.props.instructors))
                return (this.props.instructors.length > 1 ? 'Instructors: ' : 'Instructor: ') + this.props.instructors.join(', ');
            else
                return 'Instructor: ' + this.props.instructors;
        }
    }

    onMouseOver()
    {
        this.setState({ hover: true });
    }

    onMouseLeave()
    {
        this.setState({ hover: false });
    }

    onClick()
    {
        this.setState({ open: !this.state.open });

        if (this.ref.current && this.ref.current.getBoundingClientRect().top < 0)
            this.ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
    }
}

Course.propTypes = {
    label: PropTypes.string.isRequired,
    level: PropTypes.oneOf(['graduate', 'upper', 'lower', 'intro', 'general']).isRequired,
    assessment: PropTypes.oneOf(['seminar','studio', 'lab', 'project', 'exam', 'writing', 'communication', 'ap', 'standing']).isRequired,
    number: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    topics: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])).isRequired,
    instructors: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string.isRequired), PropTypes.string]).isRequired,
    children: PropTypes.oneOf([undefined, null])
};

export default withTheme(Course);