import pink from '@material-ui/core/colors/pink';
import deepPurple from '@material-ui/core/colors/deepPurple';
import lightBlue from '@material-ui/core/colors/lightBlue';
import lightGreen from '@material-ui/core/colors/lightGreen';

export const UNIT_INDENT = 4;
export const PAGE_HEADER_VARIANT = 'h3';
export const SECTION_HEADER_VARIANT = 'h4';
export const BULLET_MARGIN = 10;
export const BULLET_SUBMARGIN = 5;
export const BUTTON_SIZE = 96;
export const TAB_MARGIN = 3;
export const ICON_BUTTON_SPACING = 1;
export const DEFAULT_SPACE = 'md';
export const MAX_GRID_LIST_COLUMNS = 3;
export const BACK_TO_TOP_MARGIN = 2;
export const BACK_TO_TOP_FADE_IN_POINT = 12;

export const SKILL_COLORS = Object.freeze({
    EXPERT: pink[700],
    ADVANCED: deepPurple[600],
    INTERMEDIATE: lightBlue[700],
    BEGINNER: lightGreen[800]
});

export const SKILL_TOOLTIPS = Object.freeze({
    EXPERT: 'Expert Knowledge',
    ADVANCED: 'Advanced Knowledge',
    INTERMEDIATE: 'Intermediate Knowledge',
    BEGINNER: 'Beginner Knowledge'
});

export const SKILL_FILTERS = Object.freeze({
    LANGUAGES: 'Programming Languages',
    LIBRARIES: 'Libraries, Frameworks & APIs',
    TOOLS: 'Tools & Editors',
    GRAPHICS: 'Computer Graphics',
    WEB_DEV: 'Web Development',
    GAME_DEV: 'Game Development',
    DESIGN: 'Design Software',
    COMP_MATH: 'Computational Mathematics'
});

export const SPACE_SIZES = Object.freeze({
    'xs': 1.0,
    'sm': 2.0,
    'md': 3.0,
    'lg': 4.0,
    'xl': 8.0
});

export const PHONE_NUMBER = '8082182723';
export const EMAIL_ADDRESS = 'mxw002@gmail.com';

export const NAMES = Object.freeze({
    MIT: 'Massachusetts Institute of Technology'
});

export const LINKS = Object.freeze({
    LINKEDIN: 'https://www.linkedin.com/in/malcolmwetzstein',
    GITHUB: 'https://github.com/MalcolmWetzstein',
    RESUME: 'documents/resume.pdf',
    PORTFOLIO: {
        INTRO_ARCH: 'https://flic.kr/s/aHsmLAdjiw',
        MANIFOLDS_FILTER: 'https://github.com/MalcolmWetzstein/Implementation-of-Adaptive-Manifolds-for-Real-Time-High-Dimensional-Filtering',
        SURFACE_FLUID: 'https://github.com/MalcolmWetzstein/Surface-Fluid-Simulation-via-Mesh-Parameterization',
        PAVILLION: 'https://flic.kr/s/aHsmLAdQ48',
        STARLOGO: {
            EDITOR: 'https://www.youtube.com/embed/hpU1F6V7zWc',
            YANK_GRID: 'https://www.youtube.com/embed/oemSm6cUtDI',
            YANK_CONTINUOUS: 'https://www.youtube.com/embed/4kaQjtPlEAQ',
        },
        AR_GAME: 'https://www.youtube.com/embed/CPJAs7iY2Qo',
        WEBSITE: 'https://github.com/MalcolmWetzstein/MalcolmWetzstein.github.io'
    }
});

export const IMAGES = Object.freeze({
    LOGO: {
        MIT: 'logos/mit_logo.svg',
        SERVCO: 'logos/servco_logo.png',
        STEP: 'logos/step_logo.gif'
    },
    PORTFOLIO: {
        INTRO_ARCH: {
            THUMB: 'portfolio/architecture.jpg'
        },
        MANIFOLDS_FILTER: {
            THUMB: 'portfolio/adaptive_manifolds.png'
        },
        SURFACE_FLUID: {
            THUMB: 'portfolio/surface_fluid.png'
        },
        MUSIC: {
            THUMB: 'portfolio/music.png'
        },
        PAVILLION: {
            THUMB: 'portfolio/chair.jpg'
        },
        STARLOGO: {
            THUMB: 'portfolio/mounds.png'
        },
        AR_GAME: {
            THUMB: 'portfolio/ar_game.png'
        },
        WEBSITE: {
            THUMB: 'portfolio/website_code.png'
        }
    }
});