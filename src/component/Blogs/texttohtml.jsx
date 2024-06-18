import React, { useEffect, useState } from 'react';

const HtmlContent = ({ content, status, words }) => {
    const [adjustedWords, setAdjustedWords] = useState(words);

    useEffect(() => {
        const handleResize = () => {
            let newWords = words;
            if (window.innerWidth < 600) {
                newWords = words;
            } else if (window.innerWidth < 1200) {
                newWords -= 25;
            } else if (window.innerWidth < 1400) {
                newWords -= 15;
            }
            setAdjustedWords(newWords);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [words]);

    const extractFirstParagraph = (html) => {
        const div = document.createElement('DIV');
        div.innerHTML = html;
        const firstParagraph = div.querySelector('p,h1,h2,h3,h4,h5,h6,span,ul,li');

        if (firstParagraph) {
            const textContent = firstParagraph.textContent;
            const wordArray = textContent.split(' ');

            if (wordArray.length > adjustedWords) {
                const trimmedText = wordArray.slice(0, adjustedWords).join(' ') + '...';
                firstParagraph.textContent = trimmedText;
            }

            return firstParagraph.outerHTML;
        }

        return '';
    };

    if (!status) {
        return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }

    const firstParagraphHtml = extractFirstParagraph(content);

    return (
        <div dangerouslySetInnerHTML={{ __html: firstParagraphHtml }} />
    );
};

export default HtmlContent;
