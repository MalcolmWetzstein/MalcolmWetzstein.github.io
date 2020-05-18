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
    MASSACHUSETTS: 'MA',
    STARLOGO: 'StarLogo Nova',
    STEP: {
        LONG: 'Scheller Teacher Education Program',
        SHORT: 'STEP Lab'
    },
    SERVCO: 'Servco Pacific'
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
export const SUGGESTION_BUTTON_SIZE = 12;
export const TAB_MARGIN = 3;
export const ICON_BUTTON_SIZE = 6;
export const ICON_BUTTON_SPACING = 1;
export const HOME_BUTTON_SIZE = 8;
export const DEFAULT_SPACE = 'md';
export const BACK_TO_TOP_BUTTON_MARGIN = 2;
export const BACK_TO_TOP_FADE_IN_POINT = 12;
export const MAX_SECTION_HEADER_LEVEL = 4;
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
export const VIEW_PUBLISHED_TEXT = 'Publication';
export const VIEW_PAPER_TEXT = 'Read Research Paper';
export const ASPECT_RATIO_16_9_PADDING = '56.25%';
export const YOUTUBE_HEADER_PADDING = 25;
export const GOOGLE_SLIDES_CONTROLS_PADDING = 29;
export const CAPTION_PADDING_SIZE = 1;
export const CAPTION_FULLSCREEN_MARGIN = 2;
export const GALLERY_SIDE_MARGIN = 4;
export const SHOWCASE_SPACING = 2;
export const TIMELINE_TILE_IMAGE_HEIGHT = 10;
export const TIMELINE_TILE_IMAGE_HEIGHT_COMPACT = 5;
export const TIMELINE_TILE_ARROW_ICON_MARGIN = 2;
export const TIMELINE_TILE_ARROW_ICON_MARGIN_COMPACT = 0.5;

export const SHOWCASE_GRID_SIZES = readOnly({
    'xs': 12,
    'sm': 6,
    'md': 4,
    'lg': 4,
    'xl': 4
});

export const SPACE_SIZES = readOnly({
    'xs': 1.0,
    'sm': 2.0,
    'md': 3.0,
    'lg': 4.0,
    'xl': 8.0
});

export const GALLERY_SIZES = readOnly({
    'xs': 180,
    'sm': 240,
    'md': 360,
    'lg': 480,
    'xl': 600
})

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
    PORTFOLIO: {
        INTRO_ARCH: 'https://flic.kr/s/aHsmLAdjiw',
        MANIFOLDS_FILTER: {
            PROJECT: 'https://github.com/MalcolmWetzstein/Implementation-of-Adaptive-Manifolds-for-Real-Time-High-Dimensional-Filtering',
            ORIGINAL: 'https://www.inf.ufrgs.br/~eslgastal/AdaptiveManifolds/'
        },
        SURFACE_FLUID: 'https://github.com/MalcolmWetzstein/Surface-Fluid-Simulation-via-Mesh-Parameterization',
        PAVILLION: 'https://flic.kr/s/aHsmLAdQ48',
        STARLOGO: 'https://dspace.mit.edu/handle/1721.1/124267',
        WEBSITE: 'https://github.com/MalcolmWetzstein/MalcolmWetzstein.github.io'
    }
});

export const IMAGES = readOnly({
    LOGO: {
        MIT: 'logos/mit_logo.svg',
        SERVCO: 'logos/servco_logo.png',
        STEP: 'logos/starlogo_logo.png'
    },
    PORTFOLIO: {
        INTRO_ARCH: {
            THUMB: 'portfolio/architecture.jpg'
        },
        MANIFOLDS_FILTER: {
            THUMB: 'portfolio/adaptive_manifolds/thumb.png',
            ROOT_MANIFOLD: 'portfolio/adaptive_manifolds/root_manifold.png',
            CLUSTERS: 'portfolio/adaptive_manifolds/clusters.png',
            WHITE_CLUSTER_MANIFOLD: 'portfolio/adaptive_manifolds/white_cluster_manifold.png',
            BLACK_CLUSTER_MANIFOLD: 'portfolio/adaptive_manifolds/black_cluster_manifold.png',
            ORIGINAL: 'portfolio/adaptive_manifolds/original.png',
            BILATERAL: 'portfolio/adaptive_manifolds/bilateral.png',
            NOISY_IMAGE: 'portfolio/adaptive_manifolds/noisy.png',
            NON_LOCAL_DENOISED: 'portfolio/adaptive_manifolds/non_local_denoised.png',
            BILATERAL_DENOISED: 'portfolio/adaptive_manifolds/bilateral_denoised.png',
            FULL_FOCUS: 'portfolio/adaptive_manifolds/full_focus.png',
            DEPTH_MAP: 'portfolio/adaptive_manifolds/depth_map.png',
            FOCAL_DISTANCE: 'portfolio/adaptive_manifolds/focal_distance.png',
            DEPTH_OF_FIELD: 'portfolio/adaptive_manifolds/depth_of_field.png'
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
        SURFACE_FLUID: 'https://www.youtube.com/embed/Jbz7SobDzok',
        AR_GAME: 'https://www.youtube.com/embed/CPJAs7iY2Qo'
    }
});

export const SLIDES = readOnly({
    PORTFOLIO: {
        SURFACE_FLUID: 'https://docs.google.com/presentation/d/e/2PACX-1vQkiVx_pSPOUIU6-0U-_VeNFfRznn5WpbcSco3txZjPrYF3CaUYe1qr-3dVYCLoUrtPmsIaC29CCY-o/embed?start=false&loop=false&delayms=5000'
    }
});

export const DOCUMENTS = readOnly({
    RESUME: 'documents/resume.pdf',
    PORTFOLIO: {
        SURFACE_FLUID: 'documents/surface_fluid_flow.pdf'
    }
});