import React from 'react';
import { withTheme, Grid, Chip, Select, MenuItem, Box, FormControl, InputLabel, ListItemText, Checkbox, Button } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Space, Suggestions, FilterList, FilterItem } from '../../components';
import { Home, Contact } from '..';
import { Skill } from '.';
import { reKey, PageDequePropType, NoChildrenPropType } from '../../components/Util';
import * as CONSTANTS from '../../Constants';

const CLOSE = 'close';

class Skills extends CustomComponent 
{
    static displayText = CONSTANTS.SKILLS_DISPLAY_TEXT;

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
        return (
            <Page
                id='skills'
                pageDeque={this.props.pageDeque}
                maxWidth='sm'
            >
                <PageHeader>
                    {Skills.displayText}
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
                        {this.renderFilters()}
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
                    spacing={1}
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
                                level='advanced'
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
                                level='advanced'
                            />
                        </FilterItem>
                        <FilterItem tags={[ CONSTANTS.SKILL_FILTERS.TOOLS ]}>
                            <Skill
                                label='Git'
                                level='advanced'
                            />
                        </FilterItem>
                        <FilterItem tags={[ CONSTANTS.SKILL_FILTERS.TOOLS ]}>
                            <Skill
                                label='Visual Studio Code'
                                level='advanced'
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
                                level='intermediate'
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
                                level='intermediate'
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
                                level='intermediate'
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
                                level='intermediate'
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
                                level='intermediate'
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
                                level='intermediate'
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
                                level='intermediate'
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
                                level='intermediate'
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
                                level='intermediate'
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
                                level='intermediate'
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
                                level='intermediate'
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
                                level='intermediate'
                            />
                        </FilterItem>
                        <FilterItem tags={[ CONSTANTS.SKILL_FILTERS.LANGUAGES ]}>
                            <Skill
                                label='Java'
                                level='intermediate'
                            />
                        </FilterItem>
                        <FilterItem tags={[ CONSTANTS.SKILL_FILTERS.TOOLS ]}>
                            <Skill
                                label='Visual Studio Community'
                                level='intermediate'
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
                                level='intermediate'
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
                                level='beginner'
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
                                level='beginner'
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
                                level='beginner'
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
                                level='beginner'
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
                                level='beginner'
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
                                level='beginner'
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
                                level='beginner'
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
                                level='beginner'
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
                                level='beginner'
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
                                level='beginner'
                            />
                        </FilterItem>
                    </FilterList>
                </Grid>
                <Space size='lg'/>
                <Suggestions labels={[Contact.displayText, Home.displayText]}>
                    <Contact/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }

    renderFilters()
    {
        const filterFlags = {};
        Object.values(CONSTANTS.SKILL_FILTERS).forEach(value => filterFlags[value] = this.state.filters.includes(value));

        return reKey(Object.values(CONSTANTS.SKILL_FILTERS).map(
            filter =>
                <MenuItem value={filter}>
                    <Checkbox checked={filterFlags[filter]}/>
                    <ListItemText primary={filter}/>
                </MenuItem>
        ));
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
    children: NoChildrenPropType
};

export default withTheme(Skills);