import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ScrollButton extends Component {
	static propTypes = {
		type: PropTypes.oneOf(['class', 'id']),
		offset: PropTypes.number,
        timeout: PropTypes.number,
        to: PropTypes.string.isRequired,
    }
    
    static defaultProps = {
        type: 'class',
        offset: 0,
        timeout: 0,
    }

    getElement() {
        const { type, to } = this.props;

        switch (type) {
            case 'class':
                return document.getElementsByClassName(to)[0];
            case 'id':
                return document.getElementById(to);
            default:
                return null;
        }
    }

	handleClick = (e) => {
        e.preventDefault();
		const elem = this.getElement();

        if(!elem) {
            return console.warn(`Scroll: Element not found, not going to scroll!`);
        }

        return this.scrollTo(elem);
    }
    
	scrollTo(element) {
        const { timeout, offset } = this.props;

		const elemPos = element ? element.getBoundingClientRect().top + window.pageYOffset : 0;
        
        setTimeout(() => {
            window.scroll({
                top: elemPos + offset,
                behavior: 'smooth'
            });
        }, timeout);
    }
    
	render() {
        const { to, ...props } = this.props;

		return <button {...props} onClick={this.handleClick} />;
	}
}