import Ember from 'ember';
import Project from '../objects/project'
import PageSection from '../objects/page-section'

export default Ember.Service.extend({
    projects: [
        // About page
        Project.create({
            id: 'about',
            title: 'Jake Sawyer Designs and Codes Apps, Games, Websites, and More!',
            subtitle: 'About',
            footnote: 'He\'s also a big goofball',
            getButton: 'About',
            customBackgroundClass: 'about',
            useWhiteText: true,
            sections: [
                PageSection.create({
                    title: `Howdy!`,
                    text: `Nothing gets me more excited than working together with brilliant people to create next-generation experiences via apps and games. I love building prototypes to explore concepts and new technology — virtual and augmented reality are particularly exciting, as well as productivity tools for teams and professionals.`
                }),
                PageSection.create({
                    text: `Keeping up to date with technology and design patterns is one of my passions. I take pride in my ability to take a product from ideas and wireframes to functional code. Whether it's the latest feature in an iOS beta, or a new tool in a game engine, I love uncovering the possibilities they unlock.`
                }),
                PageSection.create({
                    image: 'assets/images/about/vive-jam-1.jpg',
                    imageCaption: `The Taco Illuminati team developing a virtual reality game in under 48 hours!`
                }),
                PageSection.create({
                    title: `A Man of Many Hats`,
                    text: `Constantly learning new technologies allows me to have multiple roles in many of my projects. I'm a cofounder of my games company Taco Illuminati, where I design gameplay, wireframe and implement user inferfaces, and research and create monetization strategies. I've even given formal tech talks about it!`
                }),
                PageSection.create({
                    text: `Game development isn't my only love, I also create apps and websites. For example, this website was written in Ember.js over the course of a weekend. I try to work fast! On the application side, right out of college I jumped into Objective-C with Forge, a Best of 2015 iPad app. Nowadays I build iOS application prototypes in Swift for fun (and to learn all the cool new stuff)!`
                }),
                PageSection.create({
                    title: `When I'm Not Creating...`,
                    text: `I love unwinding by playing videogames or catching up on awesome TV shows like Steven Universe and Game of Thrones. I used to practice Karate when I was younger and am a second-degree black belt in Karate! I hope to continue practicing martial arts soon.`
                }),
                PageSection.create({
                    linkUrl: 'https://www.linkedin.com/in/naxum/',
                    linkImage: 'assets/images/about/linkedin-logo.png',
                    linkTitle: 'Check out my LinkedIn',
                    linkSubtitle: 'Full work history and more!',
                    linkButton: 'View'
                })
            ]
        }),

        // Stickies page
        Project.create({
            id: 'stickies',
            title: 'Sticky Notes iPad App',
            subtitle: 'App Prototype',
            footnote: 'iOS 11, Drag and Drop, Metal 2, Swift...',
            customBackgroundClass: 'stickies',
        }),

        //FarBridge page
        Project.create({
            id: 'farbridge',
            title: 'Multiplayer VR Game for HTC Vive',
            subtitle: 'Unnanounced Game',
            customBackgroundClass: 'farbridge',
            footnote: 'Unity Engine, Photon Networking'
        }),

        //Looty Dungeon page
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
                    title: `The Little Dungeon Crawler That Could`,
                    text: `Looty Dungeon is a procedurally generated dungeon crawler for iOS. It offers over 50 playable characters with their own skillsets and abilities, and has various bosses to defeat and areas to explore. The game was implicitely designed to work with all modern iOS devices in either landscape or portrait orientations.`
                }),
                PageSection.create({
                    text: `Creating Looty Dungeon was an intense challenge. As my first full-featured game release, there turned out to be a lot of things to learn. How should levels be loaded? What should the interface look like? Are there any cool iOS features we could use to improve the experience? And it was, of course, over ambitious for a 3-4 person project.`
                }),
                PageSection.create({
                    image: `assets/images/looty/looty-1.png`,
                    imageCaption: `With over 50 different characters with their own abilities and stats, delving deep into the dungeon and battling all the different bosses offers a lot of different strategies`
                }),
                PageSection.create({
                    title: `Tools and Roles`,
                    text: `The project was developed in the Unity 3D game engine, utilizing many of its features and services including Unity Ads and Unity Cloud Build. The game was scripted in C#, and I created its website with Ember.js`
                }),
                PageSection.create({
                    text: `I held many roles on the project, including creating and implementing the interface, integrating with the Unity Ads platform, and creating a lot of the internal tools to create levels. I also started the project, and prototyped the initial gameplay.`
                }),
                PageSection.create({
                    image: `assets/images/looty/looty-office.jpg`,
                    imageCaption: `Unity even named one of their meeting rooms after Looty!`
                }),
                PageSection.create({
                    title: `Major Challenges`,
                    text: `Taco Illuminati, our indie games studio, was founded to create Looty. We had to quickly learn how to work with each other and our skillsets. For example, our team didn't have much experience with Unity's UI system, or how to make a Free to Play game monetization strategy, so I took it upon myself to get skilled in those areas. For the monetization, I found myself researching and iterating through concepts to put something together.`
                }),
                PageSection.create({
                    text: `While Looty was successful, I spent a lot of time after its release comparing trends and researching competetors to learn in which ways I could improve future projects. In addition, our after-release content strategy was pretty limited. In the future, the notion of a game having weekly events or significant reasons to return and play the game would be baked into the project's development from the start.`
                }),
                PageSection.create({
                    image: `assets/images/looty/looty-featured.jpg`,
                    imageCaption: `Featured in one of the end-of-the-year roundup categories, and in the first slot too! Though the category mentioning 'looting' might have helped us.`,
                    imageBorder: true
                }),
                PageSection.create({
                    title: `Notable Achievements`,
                    text: `Looty Dungeon was featured in its first week of release, which was super humbling, especially since we released next to Disney Crossy Road, which was basically the sequel to our main source of inspiration, Crossy Road. We were also next to another Disney title, so I'm amazed anyone saw our game at all.`
                }),
                PageSection.create({
                    text: `Our game was also featured in an end-of-year category (that I heard was originally named 'Verby Nouns'), which was extremely exciting to see. Usually such categories are only for the best games of the year, so this was an excellent result for our first game.`
                }),
                PageSection.create({
                    linkUrl: 'http://apple.co/LootyDungeon',
                    linkImage: 'assets/images/looty/looty-app-icon.png',
                    linkTitle: 'Looty Dungeon',
                    linkSubtitle: 'Free on the App Store!',
                    linkButton: 'Get'
                })
            ]
        }),

        //Job Simulator page
        Project.create({
            id: 'job-simulator',
            title: 'Job Simulator',
            subtitle: 'VR Game for HTC Vive',
            customBackgroundClass: 'job-simulator',
            useWhiteText: true,
            footnote: 'Explored designs for starting area',
            sections: [
                PageSection.create({
                    title: `Job Museum Simulator`,
                    text: `While I didn't spend enough time at Owlchemy Labs to have a major role on Job Simulator, I'm still very proud to have a role in helping define the introductory Jobs Museum area of the game, as well as implementing other minor features and props.`
                }),
                PageSection.create({
                    image: `assets/images/job-simulator/job-simulator-sketches.jpg`,
                    imageCaption: `Process sketches for defining the starting area, and interactions required to start a game.`
                }),
                PageSection.create({
                    title: `Tools and Roles`,
                    text: `All implementation was done within the Unity 3D game engine, utilizing C#. Some minor modeling was done in Autodesk Maya. Interestingly, the source control of this project was in Unity's own source control system, which was a hassle.`
                }),
                PageSection.create({
                    text: `My roles included prototyping areas and prop features. My primary responsibility was to shape the starting area of the game via sketches, models, and actual implementation. I also needed to explore the  interactions required to enter a level. My solution was Nintendo Entertainment System-style cartridges that could be plugged into a console to choose a level to play.`
                }),
                PageSection.create({
                    title: `Major Challenges`,
                    text: `One of the exciting things about working at Owlchemy Labs was the constant stream of virtual reality hardware, from the boxes and boxes of Google Cardboards to the experimental headsets and controllers that would work only occasionally.`
                }),
                PageSection.create({
                    text: `Developing a project on experimental hardware meant constant communication with the hardware teams and understanding where issues originated, and how to work around them until a proper fix was implemented.`
                })
            ]
        }),

        //Forge page
        Project.create({
            id: 'forge',
            title: 'Forge',
            subtitle: 'A Best of 2015 App',
            customBackgroundClass: 'forge',
            footnote: 'An ideation tool for power iPad users',
            sections: [
                PageSection.create({
                    title: `Forging an Idea with Iterative Sketches`,
                    text: `Right after college I was luckily employed by Adonit, an iPad stylus creator. My first major project there was Forge, an iPad app for ideating sketch designs over and over without destroying your previous iterations.`
                }),
                PageSection.create({
                    image: `assets/images/forge/forge-ipad-1.png`,
                    imageCaption: `The layers of a sketch could be individually brought over into a duplicate of your current sketch, allowing you to save your previous iteration as you continued to make edits.`
                }),
                PageSection.create({
                    title: `Tools and Roles`,
                    text: `My primary role on Forge was to define the "feel" of zooming and panning in the app, with the help of other designers and developers. I also documented discoverability audits for interface elements and gestural features, for a while things were hard to find without obvious affordances.`
                }),
                PageSection.create({
                    text: `I also explored several experimental features via mockups, videos, and interactive prototypes. Mockups and art assets were created in Sketch, videos made in Adobe After Effects and Premiere. I even made a couple prototypes in Facebook Origami. The app itself was created in Xcode with Objective-C. Developed support web interfaces for both in-app web views and fullscreen safari.`
                }),
                PageSection.create({
                    image: `assets/images/forge/forge-ipad-2.png`,
                    imageCaption: `My primary role was to implement the "feel" of zooming and panning a sketch via gestures.`
                }),
                PageSection.create({
                    title: `Major Challenges`,
                    text: `Having never worked in Objective-C before, I was given 6 months to learn the language, but ended up only needing a single month to get experienced enough to start branching the project and implementing features. I would eventually take time to learn Swift after its announcement and create a cutting edge version of a sketching app prototype.`
                }),
                PageSection.create({
                    image: `assets/images/forge/forge-ipad-3.png`,
                    imageCaption: `Forge also had a unique board collection view that implemented quick drag, drop, and reordering back in iOS 8!`
                }),
                PageSection.create({
                    title: `Notable Achievements`,
                    text: `Forge went on to earn Editor's Choice for its initial launch, and later it was deemed the Best App of February 2015 in the iPad app store. Eventually it was named in the top 30 iPad Apps of 2015.`
                }),
                PageSection.create({
                    linkUrl: 'https://itunes.apple.com/us/app/forge-brainstorm-and-organize-your-ideas/id1021428095',
                    linkImage: 'assets/images/forge/forge-app-icon.jpg',
                    linkTitle: 'Forge',
                    linkSubtitle: 'On the App Store!',
                    linkButton: '$3.99'
                })
            ]
        }),

        //Minecraft page
        Project.create({
            id: 'minecraft',
            title: 'Minecraft Overhaul',
            subtitle: 'Enhancing the Original',
            customBackgroundClass: 'minecraft',
            useWhiteText: true,
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

        //Forge Help page
        Project.create({
            id: 'forge-help',
            title: 'Forge Help',
            subtitle: 'Supplementary Aid Portal',
            customBackgroundClass: 'forge-help',
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

        //CCM page
        Project.create({
            id: 'ccm',
            title: 'Children\'s Creativity Museum Installation',
            subtitle: 'Interactive Wall',
            customBackgroundClass: 'ccm',
            useWhiteText: true,
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

        //Twitcher page
        Project.create({
            id: 'twitcher',
            title: 'Twitcher',
            subtitle: 'Inspiration Exploration',
            customBackgroundClass: 'twitcher',
            useWhiteText: true,
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

        /*
        Project.create({
            id: 'behance',
            title: 'Behance Learning Portal',
            subtitle: 'Creative Externship',
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
        */
    ]
});
