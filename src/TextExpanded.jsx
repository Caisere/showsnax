import React, { useState } from 'react'

const textExpandConStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
}

function TextExpanded() {
    return (
        <div style={textExpandConStyle} >
            <TextExpander className='box1'>
                Space travel is the ultimate adventure! Imagine soaring past the stars
                and exploring new worlds. It's the stuff of dreams and science fiction,
                but believe it or not, space travel is a real thing. Humans and robots
                are constantly venturing out into the cosmos to uncover its secrets and
                push the boundaries of what's possible.
            </TextExpander>

            <TextExpander
                collapsedNumWords={20}
                expandButtonText="Show text"
                collapseButtonText="Collapse text"
                buttonColor="#ff6622"
                className='box1'
            >
                Space travel requires some seriously amazing technology and
                collaboration between countries, private companies, and international
                space organizations. And while it's not always easy (or cheap), the
                results are out of this world. Think about the first time humans stepped
                foot on the moon or when rovers were sent to roam around on Mars.
            </TextExpander>

            <TextExpander expanded={true} className="box1">
                Space missions have given us incredible insights into our universe and
                have inspired future generations to keep reaching for the stars. Space
                travel is a pretty cool thing to think about. Who knows what we'll
                discover next!
            </TextExpander>
        </div>
    )
}

function TextExpander({children, collapsedNumWords = 10, collapseButtonText = 'Show less', expandButtonText = 'Show more', expanded = false, buttonColor = '#1f09cd', className, marginLeft = 10, tripleFullStop = '...'}) {
    const [isExpanded, setIsExpanded] = useState(expanded);
    
    const defaultShowText = children.split(" ").slice(0, collapsedNumWords).join(" ") + tripleFullStop;
    const displayText = isExpanded ? children : defaultShowText;

    function handleExpand() {
        setIsExpanded(exp => !exp)
    }
    const buttonStyle = {
        color: buttonColor,
        padding: '5px',
        font: 'inherit',
        border: 'none',
        backgroundColor: 'none',
        cursor: 'pointer',
        marginLeft: `${marginLeft}px`

    }

    return (
        <div className={className}>
            <span>{displayText}</span>
            <button style={buttonStyle} onClick={() => handleExpand()}>{isExpanded ? collapseButtonText  : expandButtonText}</button>
        </div>
    )
}

export default TextExpanded