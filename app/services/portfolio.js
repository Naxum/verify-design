import Ember from 'ember';
import Project from '../objects/project'
import PageSection from '../objects/page-section'

export default Ember.Service.extend({
    projects: [
        Project.create({
            id: 'about',
            title: 'Jake Sawyer Designs and Codes Apps, Games, Websites, and More!',
            subtitle: 'About',
            footnote: 'He\'s also a big goofball',
            getButton: 'Contact',
            customBackgroundClass: 'about',
            useWhiteText: true,
            sections: [
                PageSection.create({
                    text: 'Hey'
                })
            ]
        }),
        Project.create({
            id: 'stickies',
            title: 'Sticky Notes iPad App',
            subtitle: 'App Prototype',
            footnote: 'iOS 11, Drag and Drop, Metal 2, Swift...'
        }),
        Project.create({
            id: 'farbridge',
            title: 'Multiplayer VR Game for HTC Vive',
            subtitle: 'Unnanounced Game',
            customBackgroundClass: 'farbridge',
            footnote: 'Unity Engine, Photon Networking'
        }),
        Project.create({
            id: 'looty-dungeon',
            title: 'Looty Dungeon',
            subtitle: 'A Best of 2016 Game',
            footnote: 'Challenging cute roguelite',
            getButton: 'View',
            useWhiteText: true,
            customBackgroundClass: 'looty',
            sections: [
                PageSection.create({
                    title: 'TypeShift instantly hooked us with its intuitive controls and inviting style. How did you come up with the concept?',
                    text: 'Hello there'
                }),
                PageSection.create({
                    image: 'assets/images/looty/looty-1.png',
                    imageCaption: 'Zach\'s custom-made arcade cabinet up close. It wasn\'t for sale. Trust us. We Tried'
                }),
                PageSection.create({
                    text: 'Another paragraph, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }),
                PageSection.create({
                    linkUrl: 'http://google.com',
                    linkImage: 'assets/images/headshot.jpg',
                    linkTitle: 'This is a Link!',
                    linkSubtitle: 'This is the subtitle of the link.',
                    linkButton: 'View'
                })
            ]
        }),
        Project.create({
            id: 'job-simulator',
            title: 'Job Simulator',
            subtitle: 'VR Game for HTC Vive',
        }),
        Project.create({
            id: 'forge',
            title: 'Forge',
            subtitle: 'A Best of 2015 App',
            customBackgroundClass: 'forge',
            footnote: 'An ideation tool for power iPad users',
            sections: [
                PageSection.create({
                    text: `
                    Participated:  8 months from Jun. 2014 to Feb. 2015.
                    Roles: interaction designer and developer, web designer and developer.
                    Team: product manager, creative director, and about 10 other designers, developers, and hybrids of the two.
                    Responsibilities: mainly designed and implemented the "feel" of zooming and panning in the app, with the help of other designers and developers. Documented discoverability audits for interface elements and gestural features. Explored several experimental features via mockups, videos, and interactive prototypes. Developed support web interfaces for both in-app web views and fullscreen safari.
                    Accomplishments: learned Objective C, Xcode, and a little bit of Swift in a matter of months as my introduction to this project. App went on to earn the Editor\'s Choice award, and later it was deemed the Best App of February 2015 in the iPad app store. (Unfortunately when transferred to a new company the app listing lost these awards).
                    Tools: created mockups and art assets in Sketch (and previewed in Sketch Mirror), video mockups in After Effects and Premiere. Some minor prototypes were done in Facebook Origami. Development done in Xcode.
                    `
                })
            ]
        }),
        Project.create({
            id: 'minecraft',
            title: 'Minecraft Overhaul',
            subtitle: 'Enhancing the Original',
            sections: [
                PageSection.create({
                    text: `
                    Duration: Feb. 2011 to Sept. 2014.
                    Roles: game designer and developer.
                    Team: substantially just myself.
                    Responsibilities: designed and developed a system that—using existing challenges in Minecraft as a resource— empowered players to create owned areas that allowed them to play the game however they liked, without the troubles of letting everyone abuse and grief each other.
                    Accomplishments: longest project I've ever worked on, and easily the biggest and most rewarding. Spanning several years through my college experience, had several devoted players and met many friends through the experience. Allowed both peaceful and warring groups of players to exist on the server in harmony.
                    Tools: developed in Java using the Eclipse IDE and Bukkit APIs to create a custom Minecraft server.
                    `
                })
            ]
        }),
        Project.create({
            id: 'forge-help',
            title: 'Forge Help',
            subtitle: 'Supplementary Aid Portal',
            sections: [
                PageSection.create({
                    text: `
                    Duration: 2 weeks in Feb. 2015.
                    Roles: web designer and developer.
                    Team: a lead designer, and myself.
                    Responsibilities: implemented and tweaked a design presented in mockups into a fully functioning responsive web interface for both iPad in-app web views and fullscreen safari.
                    Accomplishments: created a system that dynamically generates a table of contents for each support section without manual linking between sections and finished the project within a couple weeks.
                    Tools: web development in Atom, mockup design and tweaking done in Illustrator and Sketch. The website was built on top of Harmony's content management system, and the templates were built from scratch.
                    `
                })
            ]
        }),
        Project.create({
            id: 'vive-jams',
            title: 'Vive Jams',
            subtitle: 'You Know It',
            sections: [
                PageSection.create({
                    text: `
                    https://youtu.be/5tG7trta3hs
                    Duration:  Less than 48 hours in May 2015.
                    Roles: game designer and developer, set dressing, test builds on the Vive.
                    Team: small group of 3 designers and developers sharing nearly all responsibilities.
                    Responsibilities: developed a road-based node system that allows cars and people to move around semi-realistically on city streets. Also created basic artificial intelligence system that allows biplanes to circle around the players head and periodically fire at them.
                    Accomplishments: created a game for a system of which we had less than 24 hours of access, within 48 hours for a weekend-long jam.
                    Tools: used Unity as game engine, wrote C# code in Visual Studio and Visual Studio Code. Final game was created for the Vive, and was prototyped with an Oculus Rift development kit.
                    `
                })
            ]
        }),
        Project.create({
            id: 'twitcher',
            title: 'Twitcher',
            subtitle: 'Yep',
            sections: [
                PageSection.create({
                    text: `
                    Created for Adobe as an inspirational photo search engine. Tags are dragged to create a hierarchical search query to popular image sites. Originally used an Adobe-based API.
                    Poorly-maintained demo available. - http://naxite.com/twitcher/
                    Duration:  3 months from Jun. 2013 to Sept. 2013.
                    Roles: web designer and developer.
                    Team: principal designer as mentor, and myself.
                    Responsibilities: took a rough interface prototype as inspiration and transformed it into a responsive web app for discovering new inspirational photos in a hierarchical search.
                    Accomplishments: learned how to deal with REST-based APIs in Javascript for the first time. Created as my main project during my internship at Adobe.
                    Tools: code written in Adobe Edge Code CC, built on top of Brackets. Used a private Adobe-based API at first, eventually moved onto 500px's API after my time at Adobe. Also experimented with Edge Animate CC and Sketch for an intro animation that was ditched.
                    `
                })
            ]
        }),
        Project.create({
            id: 'ccm',
            title: 'Children\'s Creativity Museum Installation',
            subtitle: 'Interactive Wall',
            sections: [
                PageSection.create({
                    text: `
                    https://vimeo.com/76898836
                    Participated:  less than 2 weeks in July 2015.
                    Roles: interaction designer and developer.
                    Team: several other designer and developers, with one lead scientist.
                    Responsibilities: designed and developed a quick Flash-based app for a wall with limited access to the hardware in less than a couple weeks. Accomplishments: finished the app in a tight timeframe and crafted pixelated versions of the Children Creativity Museum's mascots.
                    Tools: Flash, and Photoshop for the pixel art.
                    `
                })
            ]
        }),
        Project.create({
            id: 'behance',
            title: 'Behance Learning Portal',
            subtitle: 'Creaive Externship',
            sections: [
                PageSection.create({
                    text: `
                    http://naxite.com/behance/
                    Participated:  prototyped in less than 2 weeks in Winter 2015, whole project was about 10 weeks long.
                    Roles: web designer and developer.
                    Team: two other designer-developers in our prototype group, with a total of 20 mixed-major students in our project.
                    Responsibilities: designed and developed several web pages using real HTML & CSS from Behance's live site. for a wall with limited access to the hardware in less than a couple weeks.
                    Accomplishments: finished the website in a tight timeframe of two weeks for a large presentation with other groups displaying a design book, video, and a stage presentation.
                    Tools: HTML & CSS.
                    `
                })
            ]
        })
    ]
});
