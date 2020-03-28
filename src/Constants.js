import pink from '@material-ui/core/colors/pink';
import deepPurple from '@material-ui/core/colors/deepPurple';
import lightBlue from '@material-ui/core/colors/lightBlue';
import lightGreen from '@material-ui/core/colors/lightGreen';

// Converts entire object tree to read-only.
function readOnly(obj)
{
    if (typeof obj === 'object')
    {
        for (let key of Object.keys(obj))
        {
            const child = readOnly(obj[key]);

            if (typeof child === 'object')
                obj[key] = Object.freeze(child);
            else
                obj[key] = child;
        }

        return obj;
    }
    else
        return obj;
}

export const PHONE_NUMBER = '8082182723';
export const EMAIL_ADDRESS = 'mxw002@gmail.com';

export const NAMES = readOnly({
    GITHUB: 'GitHub',
    LINKEDIN: 'LinkedIn',
    FLICKR: 'Flickr',
    MIT: 'Massachusetts Institute of Technology',
    CAMBRIDGE: 'Cambridge',
    MASSACHUSETTS: 'MA'
});

export const HOME_DISPLAY_TEXT = 'Home';
export const ABOUT_DISPLAY_TEXT = 'About Me';
export const PORTFOLIO_DISPLAY_TEXT = 'Portfolio';
export const EDUCATION_DISPLAY_TEXT = 'Education';
export const EXPERIENCE_DISPLAY_TEXT = 'Experience';
export const SKILLS_DISPLAY_TEXT = 'Skills';
export const CONTACT_DISPLAY_TEXT = 'Contact Me';

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
export const BACK_TO_TOP_BUTTON_MARGIN = 2;
export const BACK_TO_TOP_FADE_IN_POINT = 12;
export const MAX_SECTION_HEADER_LEVEL = 4;
export const TIMELINE_TILE_DISPLAY_AREA = 8;
export const TIMELINE_TILE_IMAGE_HEIGHT = 11;
export const TIMELINE_TILE_ARROW_ICON_MARGIN = 2;
export const SHOWCASE_TILE_HOVER_TINT = 'rgba(0, 0, 0, 0.25)';
export const YOUTUBE_LOADING_PANEL_TINT = 'rgba(0, 0, 0, 0.1)';
export const IMAGE_DEFAULT_OBJECT_FIT = 'contain';
export const COURSE_DETAIL_ARROW_MARGIN = 3;
export const EXPANSION_CLOSE_BUTTON_MARGIN = 3;
export const VALID_MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const HOME_LINK_BUTTONS_WIDTH = UNIT_INDENT * 6;
export const HOME_CAREER_TITLES_SPACING = 2;
export const BACK_BUTTON_TEXT = 'Back';
export const SEE_ON_GITHUB_TEXT = 'See Project on ' + NAMES.GITHUB;
export const SEE_ON_FLICKR_TEXT = 'See Project on ' + NAMES.FLICKR;

export const SPACE_SIZES = readOnly({
    'xs': 1.0,
    'sm': 2.0,
    'md': 3.0,
    'lg': 4.0,
    'xl': 8.0
});

export const COURSE_LEVELS = readOnly({
    'graduate': 'Graduate',
    'upper': 'Advanced',
    'lower': 'Intermediate',
    'intro': 'Introductory',
    'general': 'General Education'
});

export const COURSE_LEVEL_TOOLTIPS = readOnly({
    'graduate': 'graduate level course',
    'upper': 'undergraduate level, typically taken junior or senior year',
    'lower': 'undergraduate level, typically taken sophmore year after prerequesites',
    'intro': 'undergraduate level, typically taken freshman year with no prerequesites',
    'general': 'undergraduate general education requirement, typically taken freshman year'
});

export const COURSE_ASSESMENT_STYLES = readOnly({
    'seminar': 'Seminar',
    'studio': 'Studio',
    'lab': 'Lab',
    'project': 'Project',
    'exam': 'Exam',
    'writing': 'Writing',
    'communication': 'Communication',
    'ap': 'AP Credit',
    'standing': 'ASE Credit'
});

export const COURSE_ASSESSMENT_TOOLTIPS = readOnly({
    'seminar': 'seminar style instruction',
    'studio': 'studio style critiques were primary form of assessment',
    'lab': 'in class labs were primary form of assessment',
    'project': 'projects were primary form of assessment',
    'exam': 'exams were primary form of assessment',
    'writing': 'written papers were primary form of assessment',
    'communication': 'oral presentations and/or written reports were primary form of assessment',
    'ap': 'credit obtained from a College Board AP exam',
    'standing': 'credit obtained from an Advanced Standing Exam'
});

export const SKILL_COLORS = readOnly({
    'expert': pink[700],
    'advanced': deepPurple[600],
    'intermediate': lightBlue[700],
    'beginner': lightGreen[800]
});

export const SKILL_TOOLTIPS = readOnly({
    'expert': 'Expert Knowledge',
    'advanced': 'Advanced Knowledge',
    'intermediate': 'Intermediate Knowledge',
    'beginner': 'Beginner Knowledge'
});

export const SKILL_FILTERS = readOnly({
    LANGUAGES: 'Programming Languages',
    LIBRARIES: 'Libraries, Frameworks & APIs',
    TOOLS: 'Tools & Editors',
    GRAPHICS: 'Computer Graphics',
    WEB_DEV: 'Web Development',
    GAME_DEV: 'Game Development',
    DESIGN: 'Digital Design',
    COMP_MATH: 'Computational Mathematics'
});

export const LINKS = readOnly({
    LINKEDIN: 'https://www.linkedin.com/in/malcolmwetzstein',
    GITHUB: 'https://github.com/MalcolmWetzstein',
    RESUME: 'documents/resume.pdf',
    PORTFOLIO: {
        INTRO_ARCH: 'https://flic.kr/s/aHsmLAdjiw',
        MANIFOLDS_FILTER: 'https://github.com/MalcolmWetzstein/Implementation-of-Adaptive-Manifolds-for-Real-Time-High-Dimensional-Filtering',
        SURFACE_FLUID: 'https://github.com/MalcolmWetzstein/Surface-Fluid-Simulation-via-Mesh-Parameterization',
        PAVILLION: 'https://flic.kr/s/aHsmLAdQ48',
        WEBSITE: 'https://github.com/MalcolmWetzstein/MalcolmWetzstein.github.io'
    }
});

export const IMAGES = readOnly({
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

export const VIDEO = readOnly({
    PORTFOLIO: {
        STARLOGO: {
            EDITOR: 'https://www.youtube.com/embed/hpU1F6V7zWc',
            YANK_GRID: 'https://www.youtube.com/embed/oemSm6cUtDI',
            YANK_CONTINUOUS: 'https://www.youtube.com/embed/4kaQjtPlEAQ',
        },
        AR_GAME: 'https://www.youtube.com/embed/CPJAs7iY2Qo'
    }
})