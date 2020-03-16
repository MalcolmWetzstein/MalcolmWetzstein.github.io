import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Grid, Chip, Select, MenuItem, Box, FormControl, InputLabel, ListItemText, Checkbox, Tooltip, IconButton, Zoom } from '@material-ui/core';
import { Page, PageHeader, Space, Suggestions } from '../components/Custom';
import { Home, Contact } from './Pages';
import * as CONSTANTS from '../Constants';

import ClearIcon from '@material-ui/icons/Clear';

class Skills extends CustomComponent 
{
    static buttonText = "Skills";

    constructor(props)
    {
        super(props);

        this.state = { filter: [] }

        this.onFilterChange = this.onFilterChange.bind(this);
        this.onClearFilters = this.onClearFilters.bind(this);
    }
    
    render ()
    {
        const filterFlags = {};
        Object.values(CONSTANTS.SKILL_FILTERS).forEach(value => filterFlags[value] = this.state.filter.includes(value));

        const unfiltered = this.state.filter.length === 0;

        return (
            <Page
                id='skills'
                pageDeque={this.props.pageDeque}
                maxWidth='sm'
            >
                <PageHeader>
                    {Skills.buttonText}
                </PageHeader>
                <Grid
                    container
                    justify='space-between'
                    alignItems='flex-end'
                    spacing={1}
                >
                    <Grid
                        item
                        xs={11}
                    >
                        <FormControl
                            fullWidth
                            color='secondary'
                        >
                            <InputLabel>
                                Filters
                            </InputLabel>
                            <Select
                                multiple
                                value={this.state.filter}
                                onChange={this.onFilterChange}
                                renderValue={
                                    selected => (
                                        <Box
                                            display='flex'
                                            flexWrap='wrap'
                                        >
                                            {
                                                selected.map(value => (
                                                    <Chip
                                                        label={value}
                                                        key={value}
                                                        style={{ margin: 2 }}
                                                    />
                                                ))
                                            }
                                        </Box>
                                    )
                                }
                            >
                                {renderFilter(CONSTANTS.SKILL_FILTERS.LANGUAGES, filterFlags[CONSTANTS.SKILL_FILTERS.LANGUAGES])}
                                {renderFilter(CONSTANTS.SKILL_FILTERS.LIBRARIES, filterFlags[CONSTANTS.SKILL_FILTERS.LIBRARIES])}
                                {renderFilter(CONSTANTS.SKILL_FILTERS.TOOLS, filterFlags[CONSTANTS.SKILL_FILTERS.TOOLS])}
                                {renderFilter(CONSTANTS.SKILL_FILTERS.GRAPHICS, filterFlags[CONSTANTS.SKILL_FILTERS.GRAPHICS])}
                                {renderFilter(CONSTANTS.SKILL_FILTERS.GAME_DEV, filterFlags[CONSTANTS.SKILL_FILTERS.GAME_DEV])}
                                {renderFilter(CONSTANTS.SKILL_FILTERS.WEB_DEV, filterFlags[CONSTANTS.SKILL_FILTERS.WEB_DEV])}
                                {renderFilter(CONSTANTS.SKILL_FILTERS.DESIGN, filterFlags[CONSTANTS.SKILL_FILTERS.DESIGN])}
                                {renderFilter(CONSTANTS.SKILL_FILTERS.COMP_MATH, filterFlags[CONSTANTS.SKILL_FILTERS.COMP_MATH])}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid
                        item
                        xs={1}
                    >
                        <Zoom in={this.state.filter.length !== 0}>
                            <IconButton onClick={this.onClearFilters}>
                                <ClearIcon/>
                            </IconButton>
                        </Zoom>
                    </Grid>
                </Grid>
                <Space size='md'/>
                <Grid
                    container
                    spacing={2}
                >
                    <Skill
                        label='WebGL'
                        advanced
                    />
                    <Skill
                        label='JavaScript'
                        advanced
                    />
                    <Skill
                        label='Git'
                        advanced
                    />
                    <Skill
                        label='Visual Studio Code'
                        advanced
                    />
                    <Skill
                        label='Unity'
                        intermediate
                    />
                    <Skill
                        label='OpenGL'
                        intermediate
                    />
                    <Skill
                        label='React'
                        intermediate
                    />
                    <Skill
                        label='Express'
                        intermediate
                    />
                    <Skill
                        label='NumPy'
                        intermediate
                    />
                    <Skill
                        label='SciPy'
                        intermediate
                    />
                    <Skill
                        label='C++'
                        intermediate
                    />
                    <Skill
                        label='Python'
                        intermediate
                    />
                    <Skill
                        label='GLSL'
                        intermediate
                    />
                    <Skill
                        label='MATLAB'
                        intermediate
                    />
                    <Skill
                        label='Java'
                        intermediate
                    />
                    <Skill 
                        label='HTML'
                        intermediate
                    />
                    <Skill
                        label='CSS'
                        intermediate
                    />
                    <Skill
                        label='C#'
                        beginner
                    />
                    <Skill
                        label='HLSL'
                        beginner
                    />
                    <Skill
                        label='Halide'
                        beginner
                    />
                    <Skill
                        label='DirectX'
                        beginner
                    />
                    <Skill
                        label='libigl'
                        beginner
                    />
                    <Skill
                        label='Vuforia'
                        beginner
                    />
                    <Skill
                        label='Rhino 3D'
                        beginner
                    />
                    <Skill
                        label='3DS Max'
                        beginner
                    />
                    <Skill
                        label='Photoshop'
                        beginner
                    />
                     <Skill
                        label='Visual Studio Community'
                        beginner
                    />
                </Grid>
                <Space size='lg'/>
                <Suggestions labels={['contact me', 'home']}>
                    <Contact/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }

    onFilterChange(event)
    {
        this.setState({ filter: event.target.value });
    }

    onClearFilters()
    {
        this.setState({ filter: [] });
    }
}

class Skill extends CustomComponent
{
    render()
    {
        const bgColor = (this.props.beginner && CONSTANTS.SKILL_COLORS.BEGINNER) ||
            (this.props.intermediate && CONSTANTS.SKILL_COLORS.INTERMEDIATE) ||
            (this.props.advanced && CONSTANTS.SKILL_COLORS.ADVANCED) ||
            (this.props.expert && CONSTANTS.SKILL_COLORS.EXPERT);

        const tooltip = (this.props.beginner && CONSTANTS.SKILL_TOOLTIPS.BEGINNER) ||
            (this.props.intermediate && CONSTANTS.SKILL_TOOLTIPS.INTERMEDIATE) ||
            (this.props.advanced && CONSTANTS.SKILL_TOOLTIPS.ADVANCED) ||
            (this.props.expert && CONSTANTS.SKILL_TOOLTIPS.EXPERT);

        return (
            <Grid item>
                <Tooltip title={tooltip}>
                    <Chip
                        label={this.props.label}
                        style={{ backgroundColor: bgColor }}
                    />
                </Tooltip>
            </Grid>
        );
    }
}

function renderFilter(value, checked)
{
    return (
        <MenuItem value={value}>
            <Checkbox checked={checked}/>
            <ListItemText primary={value}/>
        </MenuItem>
    );
}

export default withTheme(Skills);