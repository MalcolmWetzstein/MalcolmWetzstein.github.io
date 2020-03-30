import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core';
import { CustomComponent } from '.';

class ConditionalRender extends CustomComponent
{
    render()
    {
        return this.props.condition ? this.props.children : this.props.alt;
    }
}

ConditionalRender.defaultProps = { alt: null };

ConditionalRender.propTypes = {
    condition: PropTypes.any,
    alt: PropTypes.node,
    children: PropTypes.node
};

export default withTheme(ConditionalRender);