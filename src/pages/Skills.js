import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Grid, Chip, Select, MenuItem, Box, FormControl, InputLabel, ListItemText, Checkbox, Tooltip, Button } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Space, Suggestions, FilterList, FilterItem } from '../components';
import { Home, Contact } from '.';
import { PageDequePropType } from '../components/Util';
import * as CONSTANTS from '../Constants';

const CLOSE = 'close';

class Skills extends CustomComponent 
{
    static buttonText = "Skills";

    constructor(props)
    {
        super(props);

        this.state = {
            filters: [],
            filterSelectOpen: false
        }

        this.onOpenFilters = this.onOpenFilters.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.onClearFilters = this.onClearFilters.bind(this);
    }
    
    render ()
    {
        const filterFlags = {};
        Object.values(CONSTANTS.SKILL_FILTERS).forEach(value => filterFlags[value] = this.state.filters.includes(value));

        return (
            <Page
                id='skills'
                pageDeque={this.props.pageDeque}
                maxWidth='sm'
            >
                <PageHeader>
                    {Skills.buttonText}
                </PageHeader>
                <FormControl
                    fullWidth
                    color='secondary'
                >
                    <InputLabel>
                        Filters
                    </InputLabel>
                    <Select
                        multiple
                        value={this.state.filters}
                        open={this.state.filterSelectOpen}
                        onOpen={this.onOpenFilters}
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
                        <MenuItem value={CLOSE}>
                            <Box margin='0 auto'>
                                CLOSE
                            </Box>
                        </MenuItem>
                    </Select>
                </FormControl>
                <Box
                    display='flex'
                    justifyContent='flex-end'
                >
                    <Button
                        onClick={this.onClearFilters}
                        size='small'
                        style={{ textTransform: 'none' }}
                        disabled={this.state.filters.length === 0}
                    >
                        clear
                    </Button>
                </Box>
                <Space size='xs'/>
                <Grid
                    container
                    spacing={2}
                >
                    <FilterList filters={this.state.filters}>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LIBRARIES,
                                CONSTANTS.SKILL_FILTERS.GRAPHICS,
                                CONSTANTS.SKILL_FILTERS.GAME_DEV,
                                CONSTANTS.SKILL_FILTERS.WEB_DEV
                            ]}
                        >
                            <Skill
                                label='WebGL'
                                advanced
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LANGUAGES,
                                CONSTANTS.SKILL_FILTERS.WEB_DEV
                            ]}
                        >
                            <Skill
                                label='JavaScript'
                                advanced
                            />
                        </FilterItem>
                        <FilterItem tags={[ CONSTANTS.SKILL_FILTERS.TOOLS ]}>
                            <Skill
                                label='Git'
                                advanced
                            />
                        </FilterItem>
                        <FilterItem tags={[ CONSTANTS.SKILL_FILTERS.TOOLS ]}>
                            <Skill
                                label='Visual Studio Code'
                                advanced
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LANGUAGES,
                                CONSTANTS.SKILL_FILTERS.GAME_DEV,
                                CONSTANTS.SKILL_FILTERS.GRAPHICS
                            ]}
                        >
                            <Skill
                                label='C++'
                                intermediate
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LIBRARIES,
                                CONSTANTS.SKILL_FILTERS.GRAPHICS,
                                CONSTANTS.SKILL_FILTERS.GAME_DEV
                            ]}
                        >
                            <Skill
                                label='OpenGL'
                                intermediate
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LANGUAGES,
                                CONSTANTS.SKILL_FILTERS.GRAPHICS,
                                CONSTANTS.SKILL_FILTERS.GAME_DEV
                            ]}
                        >
                            <Skill
                                label='GLSL'
                                intermediate
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LANGUAGES,
                                CONSTANTS.SKILL_FILTERS.COMP_MATH
                            ]}
                        >
                            <Skill
                                label='Python'
                                intermediate
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LIBRARIES,
                                CONSTANTS.SKILL_FILTERS.COMP_MATH
                            ]}
                        >
                            <Skill
                                label='NumPy'
                                intermediate
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LIBRARIES,
                                CONSTANTS.SKILL_FILTERS.COMP_MATH
                            ]}
                        >
                            <Skill
                                label='SciPy'
                                intermediate
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LANGUAGES,
                                CONSTANTS.SKILL_FILTERS.TOOLS,
                                CONSTANTS.SKILL_FILTERS.COMP_MATH,
                                CONSTANTS.SKILL_FILTERS.GRAPHICS
                            ]}
                        >
                            <Skill
                                label='MATLAB'
                                intermediate
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LANGUAGES,
                                CONSTANTS.SKILL_FILTERS.WEB_DEV
                            ]}
                        >
                            <Skill 
                                label='HTML'
                                intermediate
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LANGUAGES,
                                CONSTANTS.SKILL_FILTERS.WEB_DEV
                            ]}
                        >
                            <Skill
                                label='CSS'
                                intermediate
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LIBRARIES,
                                CONSTANTS.SKILL_FILTERS.WEB_DEV
                            ]}
                        >
                            <Skill
                                label='React'
                                intermediate
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LIBRARIES,
                                CONSTANTS.SKILL_FILTERS.WEB_DEV
                            ]}
                        >
                            <Skill
                                label='Material-UI'
                                intermediate
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LIBRARIES,
                                CONSTANTS.SKILL_FILTERS.WEB_DEV
                            ]}
                        >
                            <Skill
                                label='Express'
                                intermediate
                            />
                        </FilterItem>
                        <FilterItem tags={[ CONSTANTS.SKILL_FILTERS.LANGUAGES ]}>
                            <Skill
                                label='Java'
                                intermediate
                            />
                        </FilterItem>
                        <FilterItem tags={[ CONSTANTS.SKILL_FILTERS.TOOLS ]}>
                            <Skill
                                label='Visual Studio Community'
                                intermediate
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.TOOLS,
                                CONSTANTS.SKILL_FILTERS.DESIGN
                            ]}
                        >
                            <Skill
                                label='Rhino 3D'
                                intermediate
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.TOOLS,
                                CONSTANTS.SKILL_FILTERS.GAME_DEV
                            ]}
                        >
                            <Skill
                                label='Unity'
                                beginner
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LANGUAGES,
                                CONSTANTS.SKILL_FILTERS.GAME_DEV
                            ]}
                        >
                            <Skill
                                label='C#'
                                beginner
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LIBRARIES,
                                CONSTANTS.SKILL_FILTERS.GRAPHICS,
                                CONSTANTS.SKILL_FILTERS.GAME_DEV
                            ]}
                        >
                            <Skill
                                label='Vuforia'
                                beginner
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LIBRARIES,
                                CONSTANTS.SKILL_FILTERS.GRAPHICS,
                                CONSTANTS.SKILL_FILTERS.GAME_DEV
                            ]}
                        >
                            <Skill
                                label='DirectX 12'
                                beginner
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LIBRARIES,
                                CONSTANTS.SKILL_FILTERS.GRAPHICS,
                                CONSTANTS.SKILL_FILTERS.GAME_DEV
                            ]}
                        >
                            <Skill
                                label='DirectX 11'
                                beginner
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LANGUAGES,
                                CONSTANTS.SKILL_FILTERS.GRAPHICS,
                                CONSTANTS.SKILL_FILTERS.GAME_DEV
                            ]}
                        >
                            <Skill
                                label='HLSL'
                                beginner
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LANGUAGES,
                                CONSTANTS.SKILL_FILTERS.LIBRARIES,
                                CONSTANTS.SKILL_FILTERS.GRAPHICS
                            ]}
                        >
                            <Skill
                                label='Halide'
                                beginner
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.LIBRARIES,
                                CONSTANTS.SKILL_FILTERS.GRAPHICS
                            ]}
                        >
                            <Skill
                                label='libigl'
                                beginner
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.TOOLS,
                                CONSTANTS.SKILL_FILTERS.DESIGN,
                                CONSTANTS.SKILL_FILTERS.GAME_DEV
                            ]}
                        >
                            <Skill
                                label='3DS Max'
                                beginner
                            />
                        </FilterItem>
                        <FilterItem
                            tags={[
                                CONSTANTS.SKILL_FILTERS.TOOLS,
                                CONSTANTS.SKILL_FILTERS.DESIGN,
                                CONSTANTS.SKILL_FILTERS.GAME_DEV
                            ]}
                        >
                            <Skill
                                label='Photoshop'
                                beginner
                            />
                        </FilterItem>
                    </FilterList>
                </Grid>
                <Space size='lg'/>
                <Suggestions labels={['contact me', 'home']}>
                    <Contact/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }

    onOpenFilters()
    {
        this.setState({ filterSelectOpen: true });
    }

    onFilterChange(event)
    {
        if (event.target.value.includes(CLOSE))
            this.setState({ filterSelectOpen: false });
        else
            this.setState({ filters: event.target.value });
    }

    onClearFilters()
    {
        this.setState({ filters: [] });
    }
}

Skills.propTypes = {
    pageDeque: PageDequePropType.isRequired,
    children: PropTypes.oneOf([undefined, null])
};

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