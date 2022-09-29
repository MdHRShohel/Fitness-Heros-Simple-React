import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <h1>Blogs of React</h1>
            <div>
                    <h2>How Does React Work?</h2>
                    <p>1. Easy to Use
                        Developers with JavaScript knowledge can learn how to use React in no time as it relies on plain JavaScript and a component-based approach. It's possible to start developing web-based applications with React after just a couple of days of studying it.</p>
                    <p>2. Supports Reusable Java Components
                        React lets you reuse components that have been developed into other applications. Since ReactJS is open source, it's possible to pre-build components, cutting down on the development time of complex web applications.
                    </p>
                    <p>3. Easier Component Writing
                        Because of JSX integration, it's easier to write React components - users can create JavaScript objects combined with HTML typography and tags. JSX also simplifies multiple function rendering, which keeps code lean without reducing the app's capabilities.</p>
                    <p>4. High Performance
                        As discussed earlier, Virtual DOM allows ReactJS to update the DOM tree in the most efficient way possible. By storing Virtual DOM in the memory, React eliminates excessive re-rendering that may harm performance.

                    </p>

                    <p>5. SEO Friendly
                        ReactJS may improve the search engine optimization (SEO) of web applications by increasing their performance. Virtual DOM implementation is one of the factors that influence faster page speeds.</p>
                </div>
                <div>
                    <h2>Differences between props and state?</h2>
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
                </div>
                <div>
                    <h2>What will be work useEffect using without data load</h2>
                    <p>You must have a thorough understanding of when components (re-)render because effects run after every render cycle.
                        Effects are always executed after render, but you have options to opt out from this behavior.</p>

                    <p>To opt out or skip effects, you have to understand basic JavaScript concepts about values. An effect is only rerun if at least one of the values specified as part of the effect's dependencies has changed since the last render cycle.
                        You should ensure that components are not re-rendered unnecessarily. This constitutes another strategy to skip unnecessary reruns of effects.</p>

                    <p>You have to understand that functions defined in the body of your function component get recreated on every render cycle. This has an impact if you use it inside of your effect. There are strategies to cope with it (hoist them outside of the component, define them inside of the effect, use useCallback).</p>

                    <p>You have to understand basic JavaScript concepts such as stale closures, otherwise you might have trouble tackling problems with outdated props or state values inside of your effect. There are strategies to solve this, e.g., with an effect's dependency array or with the useRef Hook.</p>
                </div>
            </div>
    )
};

export default Blog;