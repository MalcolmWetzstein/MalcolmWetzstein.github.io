import React from 'react';

export default class PageDeque extends React.Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {
            pageStack: []
        };

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
        this.withDequeProps = this.withDequeProps.bind(this);
    }

    componentDidMount()
    {
        if (this.props.initialPages)
        {
            if (Array.isArray(this.props.initialPages))
                for (let page of this.props.initialPages)
                    this.push(page);
            else
                this.push(this.props.initialPages);
        }
    }

    render() 
    {
        const childrenWithProps = React.Children.map(this.props.children, child => this.withDequeProps(child));
        return this.state.pageStack.concat(childrenWithProps);
    }

    clear()
    {
        this.setState( { pageStack: [] } );
    }

    push(jsx) 
    {
        this.setState( { pageStack: [...this.state.pageStack, this.withDequeProps(jsx)] } );
    }

    unshift(jsx) 
    {
        this.setState( { pageStack: [this.withDequeProps(jsx), ...this.state.pageStack] } );
    }

    insert(jsx, index)
    {
        index = this.wrapAroundIndex(index);
        this.setState( { pageStack: this.state.pageStack.slice(0, index)
            .concat([this.withDequeProps(jsx), ...(this.state.pageStack.slice(index))]) } );
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
        const outPage = this.pageAt(index);
        this.setState( { pageStack: this.state.pageStack.filter( (page, i) => i !== index ) } );
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
        return this.state.pageStack[index];
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
        index = this.wrapAroundIndex(index);
        const outPage = this.state.pageStack[index];
        this.setState( { pageStack: this.state.pageStack.map( (page, i) => index === i ? this.withDequeProps(jsx) : page ) } );
        return outPage;
    }

    wrapAroundIndex(index)
    {
        while (index < 0)
            index += this.state.pageStack.length;
        return index;
    }

    withDequeProps(jsx)
    {
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
                withDequeProps: this.withDequeProps
            }
        });
    }
}