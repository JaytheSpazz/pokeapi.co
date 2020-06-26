import React from 'react';

import Link from '../components/Link';
import {PlainPage} from '../components/Page';
import styles from './about.module.scss';

const Faq = ({title, children}) => (
    <React.Fragment>
        <h3 className={styles.faq_title}>{title}</h3>
        <div className={styles.faq_body}>{children}</div>
    </React.Fragment>
);

export default function About() {
    return (
        <PlainPage title="About">
            <h1>About</h1>

            <Faq title="What is this?">
                <p>
                    This website provides a RESTful API interface to highly
                    detailed objects built from thousands of lines of data
                    related to{' '}
                    <a href="https://en.wikipedia.org/wiki/Pokemon">Pokémon</a>.
                    We specifically cover the video game franchise. Using this
                    website, you can consume information on Pokémon, their
                    moves, abilities, types, egg groups and much, much more.
                </p>
            </Faq>
            <Faq title="What is an API?">
                <p>
                    An API (Application Programming Interface) is a contract
                    that allow developers to interact with an application
                    through a set of interfaces. In this case, the application
                    is a database of thousands of Pokémon-related objects, and
                    the interfaces are URL links.
                </p>
                <p>
                    A RESTful API is an API that conforms to a set of loose
                    conventions based on HTTP verbs, errors, and hyperlinks.
                </p>
            </Faq>
            <Faq title="Aren't there 101 other Pokémon websites already?">
                <p>Yes and that's exactly the problem!</p>
                <p>
                    101 instances of the same website means 101 instances of the{' '}
                    <strong>same data</strong>.
                </p>
                <p>
                    We aim to provide a <strong>single source of data</strong>{' '}
                    that any number of other websites can consume and use.
                </p>
                <p>
                    Often, and especially when new Pokémon games or updates are
                    released, those 101+ websites take <strong>weeks</strong> to
                    update as people have to enter the same information in all
                    those different places.
                </p>
                <p>
                    This solves that problem. If all those sites consumed their
                    data from here, they would have the exact same information
                    that is updated at exactly the same time, with no errors
                    between each website. The overall benefit is a better
                    collaboration and consistency across all the different
                    Pokémon websites and applications. It's good for all!
                </p>
            </Faq>
            <Faq title="How much information is stored here?">
                <p>A lot.</p>
                <p>
                    We currently have <strong>tens of thousands</strong> of
                    individual items in our database, including:
                </p>
                <ul>
                    <li>Moves</li>
                    <li>Abilities</li>
                    <li>Pokémon (including various forms)</li>
                    <li>Types</li>
                    <li>Egg Groups</li>
                    <li>Game Versions</li>
                    <li>Items</li>
                    <li>Pokédexes</li>
                    <li>Pokémon Evolution Chains</li>
                </ul>
                <p>
                    And that's just scratching the surface! To see all the
                    different types of data we have, check out{' '}
                    <Link to="/docs/v2">the docs</Link>.
                </p>
            </Faq>
            <Faq title="The API is missing stuff!">
                <p>
                    We know! Feel free to contribute to open issues on{' '}
                    <a href="https://github.com/PokeAPI/pokeapi/">GitHub</a>.
                </p>
                <p>
                    Have ideas for new features? We're on Slack! Sign up{' '}
                    <a href="https://pokeapi-slack-invite.herokuapp.com/">
                        right here
                    </a>{' '}
                    then visit our{' '}
                    <a href="https://pokeapi.slack.com">slack team</a>.
                </p>
            </Faq>
            <Faq title="So who built this?">
                <p>
                    Pokémon V1 was created by{' '}
                    <a href="https://github.com/phalt">Paul Hallett</a> as a
                    weekend project but it quickly became more than a weekend's
                    worth of work. In{' '}
                    <a
                        href="https://phalt.github.io/posts/if-you-have-data-they-will-consume-it/"
                        target="none"
                    >
                        December of 2014
                    </a>{' '}
                    Paul deprecated V1 in favor of working on V2.
                </p>
                <p>
                    This is where{' '}
                    <a href="https://github.com/zaneadix">Zane Adickes</a>{' '}
                    jumped in. Zane thought the original project was a fantastic
                    idea and wanted to help it grow. With direction from Paul,
                    Zane created the V2 API using an exact mirror of{' '}
                    <a href="https://github.com/eevee">Veekun's</a> data related
                    to the main series of games.
                </p>
                <p>
                    During summer 2018, Paul decided to hand over the project to
                    the community. This is where Tim Malone, Mark Tse, Sargun Vohra, Charles Marttinen, Alessandro Pezze, Alberto Oliveira da Silva, Lucio Merotta came together and converted the API to serve static JSON files to improve
                    performance and cut down on hosting costs. This website was
                    also re-built by Charles Marttinen at the same time. The whole process was completed in October 2018.
                </p>
                <p>
                    After this massive redesign, PokeAPI gained many new consumers due to its new blazing fast performance. To give a quick reference, the loading of the infamous <a href="https://pokeapi.co/api/v2/pokemon/magikarp">Magikarp pokemon resouce</a> passed from seconds to ~80ms. 
                    
                    An important milestone for the PokeAPI project happened shortly after, during Summer 2020, when its Github repository hitted <b>2000 stargazers</b> and in a single month the API managed to fulfill <b>100 million calls</b>.
                </p>
                <p>
                    PokeAPI is currently equally owned by <a href="https://github.com/phalt">Paul Hallet</a>, <a href="https://github.com/tdmalone">Tim Malone</a> and <a href="https://github.com/Naramsim">Alessandro Pezze</a>. Alongside them the most active and helpful maintainers are <a href="https://github.com/cmmartti">Charles Marttinen</a> and <a href="https://github.com/sargunv">Sargun Vohra</a>.
                </p>
                <p>
                    We also have a{' '}
                    <a href="https://github.com/pokeapi">GitHub organisation</a>{' '}
                    of contributors that you are welcome to join!
                </p>
            </Faq>
            <Faq title="Where did you get all of this data?">
                <p>
                    We gathered the information on this site from various
                    resources:
                </p>
                <ul>
                    <li>
                        <a href="https://github.com/veekun" target="none">
                            Veekun
                        </a>{' '}
                        has a fantastic{' '}
                        <a href="http://veekun.com/dex" target="none">
                            Pokedex
                        </a>{' '}
                        which is also an open source{' '}
                        <a
                            href="https://github.com/veekun/pokedex"
                            target="none"
                        >
                            project
                        </a>{' '}
                        containing a ton of csv data. We used this to flesh out
                        the database that powers Pokéapi.
                    </li>
                    <li>
                        <a
                            href="http://bulbapedia.bulbagarden.net/wiki/Main_Page"
                            target="none"
                        >
                            Bulbapedia
                        </a>{' '}
                        has a ton of extra information that proved useful when
                        designing models and documenting resources.
                    </li>
                </ul>
                <p>We'd also like to thank:</p>
                <ul>
                    <li>
                        Laven Pillay, who scraped together most of the sprites
                        used on the site.
                    </li>
                    <li>
                        <a href="https://github.com/Naramsim">
                            Alessandro Pezze
                        </a>
                        , who worked tirelessly to add the Sun/Moon updates.
                    </li>
                </ul>
            </Faq>
            <Faq title="What's the technology stack?">
                <p>
                    Up until November 2018, the API and website were built
                    together in a single{' '}
                    <a href="https://python.org" target="none">
                        Python
                    </a>{' '}
                    project using the{' '}
                    <a href="https://djangoproject.com" target="none">
                        Django framework
                    </a>{' '}
                    and paired with a{' '}
                    <a href="https://www.postgresql.org" target="none">
                        PostgresQL
                    </a>{' '}
                    database to store the data.{' '}
                    <a
                        href="http://www.django-rest-framework.org/"
                        target="none"
                    >
                        Django REST Framework
                    </a>{' '}
                    was used to expose the data through a RESTful API.
                </p>

                <p>
                    In October 2018, the API was converted to serve static JSON
                    files in a fully backwards compatible manner. This allowed
                    PokéAPI to move its hosting to a cheap static hosting
                    solution (Firebase Hosting + Cloudflare Caching), which
                    increased performance and stability by a huge margin. At the
                    same time,{' '}
                    <Link to="/docs/v1">
                        support for version 1 of the API was dropped
                    </Link>{' '}
                    and this website was converted to a static site using{' '}
                    <a href="https://www.gatsbyjs.org" target="none">
                        Gatsby
                    </a>{' '}
                    (a static site generator for{' '}
                    <a href="https://reactjs.org" target="none">
                        React
                    </a>
                    ) and split off into a separate{' '}
                    <a href="https://github.com/PokeAPI/pokeapi.co">project</a>.
                </p>
                <p>
                    The move to static hosting was solved by introducing a build
                    step before deployment. This build step saves each possible
                    endpoint from the Django project as a JSON file using{' '}
                    <a href="https://github.com/PokeAPI/ditto">ditto</a>, and it
                    is these JSON files that are served from Firebase's CDN.
                </p>
            </Faq>
        </PlainPage>
    );
}