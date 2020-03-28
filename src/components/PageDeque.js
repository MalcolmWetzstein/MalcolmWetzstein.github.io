import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core';
import { CustomComponent } from '.';
import { reKey } from './Util';

class PageDeque extends CustomComponent
{
    constructor(props) 
    {
        super(props);

        this.state = { pageStack: [] };

        this.push = this.push.bind(this);
        this.unshift = this.unshift.bind(this);
        this.insert = this.insert.bind(this);
        this.pop = this.pop.bind(this);
        this.shift = this.shift.bind(this);
        this.remove = this.remove.bind(this);
        this.clear = this.clear.bind(this);
        this.top = this.top.bind(this);
        this.bottom = this.bottom.bind(this);
        this.pageAt = this.pageAt.bind(this);
        this.swapTop = this.swapTop.bind(this);
        this.swapBottom = this.swapBottom.bind(this);
        this.swapAt = this.swapAt.bind(this);
        this.finish = this.finish.bind(this);
        this.withDequeProps = this.withDequeProps.bind(this);

        this.stackUpdate = null;
    }

    render() 
    {
        const displayPage = this.state.pageStack.length > 0 ? [this.state.pageStack[this.state.pageStack.length - 1]] : []
        const childrenWithProps = React.Children.map(this.props.children, child => this.withDequeProps(child));
        return reKey(childrenWithProps.concat(displayPage));
    }

    clear()
    {
        this.initUpdate();
        this.stackUpdate = [];
    }

    push(jsx) 
    {
        this.initUpdate();
        this.stackUpdate = [...this.stackUpdate, this.withDequeProps(jsx)];
    }

    unshift(jsx) 
    {
        this.initUpdate();
        this.stackUpdate = [this.withDequeProps(jsx), ...this.stackUpdate];
    }

    insert(jsx, index)
    {
        this.initUpdate();
        index = this.wrapAroundIndex(index);
        this.stackUpdate = this.stackUpdate.slice(0, index).concat([this.withDequeProps(jsx), ...(this.stackUpdate.slice(index))]);
    }

    pop() 
    {
        return this.remove(-1);
    }

    shift() 
    {
        return this.remove(0);
    }

    remove(index)
    {
        this.initUpdate();
        const outPage = this.pageAt(index);
        this.stackUpdate = this.stackUpdate.filter( (page, i) => i !== index );
        return outPage;
    }

    top() 
    {
        return this.pageAt(-1);
    }

    bottom()
    {
        return this.pageAt(0);
    }

    pageAt(index) 
    {
        index = this.wrapAroundIndex(index);
        return this.stackUpdate === null ? this.state.pageStack[index] : this.stackUpdate[index];
    }

    swapTop(jsx)
    {
        this.swapAt(jsx, -1);
    }

    swapBottom(jsx)
    {
        this.swapAt(jsx, 0);
    }

    swapAt(jsx, index)
    {
        this.initUpdate();
        index = this.wrapAroundIndex(index);
        const outPage = this.pageAt(index);
        this.stackUpdate = this.stackUpdate.map( (page, i) => index === i ? this.withDequeProps(jsx) : page );
        return outPage;
    }

    finish()
    {
        this.setState( { pageStack: this.stackUpdate } );
        this.stackUpdate = null;
    }

    initUpdate()
    {
        if (this.stackUpdate === null)
            this.stackUpdate = this.state.pageStack;
    }

    wrapAroundIndex(index)
    {
        while (index < 0)
            index += this.state.pageStack.length;
        return index;
    }

    withDequeProps(jsx)
    {
        if (jsx == null || jsx.type.custom == null)
            return jsx;
        
        return React.cloneElement(jsx, {
            pageDeque: {
                push: this.push,
                unshift: this.unshift,
                insert: this.insert,
                pop: this.pop,
                shift: this.shift,
                remove: this.remove,
                clear: this.clear,
                top: this.top,
                bottom: this.bottom,
                pageAt: this.pageAt,
                swapTop: this.swapTop,
                swapBottom: this.swapBottom,
                swapAt: this.swapAt,
                finish: this.finish,
                withDequeProps: this.withDequeProps
            }
        });
    }
}

PageDeque.propTypes = { children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element.isRequired), PropTypes.element]).isRequired };

export default withTheme(PageDeque);