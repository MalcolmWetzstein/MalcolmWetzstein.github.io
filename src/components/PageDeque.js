import React from 'react';

export default class PageDeque extends React.Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {
            pageStack: []
        };

        this.pushPage = this.pushPage.bind(this);
        this.unshiftPage = this.unshiftPage.bind(this);
        this.popPage = this.popPage.bind(this);
        this.shiftPage = this.shiftPage.bind(this);
    }

    render() 
    {
        return this.state.pageStack;
    }

    componentDidMount() 
    {
        if (this.props.landingPage)
            this.pushPage(this.props.landingPage);
    }

    clear()
    {
        while (this.state.pageStack.length > 0)
            this.popPage();

        this.setState( { pageStack: this.state.pageStack } );
    }

    pushPage(jsx) 
    {
        this.state.pageStack.push(React.cloneElement(jsx, {
                pushPage: this.pushPage,
                unshiftPage: this.unshiftPage,
                popPage: this.popPage,
                shiftPage: this.shiftPage
            }));

        this.setState( { pageStack: this.state.pageStack } );
    }

    unshiftPage(jsx) 
    {
        this.state.pageStack.unshift(React.cloneElement(jsx, {
            pushPage: this.pushPage,
            unshiftPage: this.unshiftPage,
            popPage: this.popPage,
            shiftPage: this.shiftPage
        }));

        this.setState( { pageStack: this.state.pageStack } );
    }

    popPage() 
    {
        let page = this.state.pageStack.pop();
        this.setState({ pageStack: this.state.pageStack });
        return page;
    }

    shiftPage() 
    {
        let page = this.state.pageStack.shift();
        this.setState({ pageStack: this.state.pageStack });
        return page;
    }

    topPage() 
    {
        return this.state.pageStack[this.state.pageStack.length-1];
    }

    pageAt(index) 
    {
        while (index < 0)
            index += this.state.pageStack.length;

        return this.state.pageStack[index];
    }
}