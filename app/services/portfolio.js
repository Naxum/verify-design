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

        // Game Prototypes page
        Project.create({
            id: 'game-prototypes',
            title: 'Game Prototypes',
            subtitle: 'Sketches and Ideas',
            customBackgroundClass: 'game-prototypes',
            sections: [
                PageSection.create({
                    title: `Wireframes Galore`,
                    text: `After working on Looty Dungeon, I spent a lot of time creating prototypes of games that we could develop in the future. Here are the wireframes for the interfaces and some design sketches to show off my sketches-to-prototype workflow.`
                }),
                PageSection.create({
                    image: 'assets/images/game-prototypes/game-sketch-1.png',
                    imageCaption: `An interaction flow following a user watching a rewarded advertisement in a free to play game to activate an income timer. Flow also shows ways to purchase permanent upgrades to the timer.`
                }),
                PageSection.create({
                    image: 'assets/images/game-prototypes/game-sketch-9.png',
                    imageCaption: `Walkthrough of a game's in-app purchase store. Includes highlighted bundle deals, with countdown timer.`
                }),
                PageSection.create({
                    image: 'assets/images/game-prototypes/game-sketch-12.png',
                    imageCaption: `Design explorations for an individual item in a list of upgrades. Needs to show enough information to be useful, but not overcluttered on an iPhone.`
                }),
                PageSection.create({
                    image: 'assets/images/game-prototypes/game-ui-1.jpg',
                    imageCaption: `Implementation of the previous wireframes after iterating the prototype more and more.`
                }),
                PageSection.create({
                    image: 'assets/images/game-prototypes/game-sketch-6.png',
                    imageCaption: `Exploration of a pinball-style game's main interface while playing.`
                }),
                PageSection.create({
                    image: 'assets/images/game-prototypes/game-sketch-13.png',
                    imageCaption: `Breakdown of how a scene will be composed in the game engine.`
                }),
                PageSection.create({
                    title: `Ask Me Anything!`,
                    text: `I'm always trying to improve my wireframes' readability. If you'd like to learn more about my workflow, feel free to ask!`
                })
            ]
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

        // Magento page
        Project.create({
            id: 'magento',
            title: `Magento Ember.js Web Apps`,
            subtitle: `Design Implementation Flow`,
            footnote: ``,
            customBackgroundClass: 'magento',
            sections: [
                PageSection.create({
                    title: `Developing Tools for Developers to Implement Designs`,
                    text: `As a user experience prototyper at Magento, my goal was to bridge the gaps between Adobe Illustrator-based mockups designers were creating and real web applications. I utilized Ember.js as a way to rapidly implement complex interactions and state flows into large projects.`
                }),
                PageSection.create({
                    text: `I also regularly performed design audits of existing or proposed interfaces and interactions, pointing out where I thought things could be simplified, improved, or omitted.`
                }),
                PageSection.create({
                    image: `assets/images/magento/magento-markup-1.png`,
                    imageCaption: `Marked up screenshot of an existing app's interface. These were my initial thoughts on what could be improved with low effort.`
                }),
                PageSection.create({
                    title: `Technologies`,
                    text: `Primarily utilized Sketch as my tool when creating mockups, but took others' Illustrator files and implemented their state-based flows into Ember.js prototypes. These prototypes grew large enough to almost be dummy-versions of the real sites.`
                }),
                PageSection.create({
                    image: `assets/images/magento/magento-markup-2.png`,
                    imageCaption: `Another designer's inferface marked up with elements that should be changed or omitted.`
                }),
                PageSection.create({
                    image: `assets/images/magento/magento-sketches-4.png`,
                    imageCaption: `I created a reusable components library for commonly used Magento UI elements.`
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
            sections: [
                PageSection.create({
                    title: `Prototyping a Modern Sketching Application`,
                    text: `Ever since working at Adobe and Adonit, I've wanted to create my perfect drawing application for iPad Pro. Every so often, I'll throw together a prototype to keep up with all the modern technologies needed to create a cutting edge drawing app.`
                }),
                PageSection.create({
                    text: `This time around, I'm also pushing myself to learn as much as I can about UIKit, custom CollectionViews, and Interface Builder as I can in a short period of time. Also, keeping the prototype just about sticky notes helps reduce the complexity of the prototype.`
                }),
                PageSection.create({
                    image: `assets/images/stickies/stickies-1.png`,
                    imageCaption: `Mockups of each main screen in the app, including how the drawing view would look in compact width scenarios.`
                }),
                PageSection.create({
                    title: `Technologies`,
                    text: `The prototype is developed in the latest Xcode betas for iOS 11, utilizing Swift 4 and Metal 2. Also, the main board section has the new Drag and Drop feature which allows users to place sticky notes as they please in a Collection View with a custom Collection View Layout. You can even create new sections in the layout depending on where you're dragging your finger!`
                }),
                PageSection.create({
                    text: `Metal 2 pipeline renders smoothed strokes as white onto a black texture (eraser renders black strokes), then I subtract from the sticky color to get the final result. The drawing aren't yet saved to Core Data, but the sticky positions are, so the sticky notes are always in the place you left them.`
                }),
                PageSection.create({
                    image: `assets/images/stickies/stickies-2.png`,
                    imageCaption: `Current progress of the drawing screen, the basics are in place!`
                }),
                PageSection.create({
                    title: `Major Challenges`,
                    text: `Catching up with Swift 4 turned out to be easier than I expected, and even relearning the basics of Metal 2 wasn't as challenging as I worried! This is also my first time developing a Collection View with a custom Collection View Layout, as well as dealing with Core Data, but I made it work!`
                }),
                PageSection.create({
                    linkUrl: 'https://github.com/Naxum/Stickies',
                    linkImage: 'assets/images/stickies/github-logo.jpg',
                    linkTitle: 'Source on Github',
                    linkSubtitle: 'Check the current progress',
                    linkButton: 'View'
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
                    title: `Building Blocks On Top of the Masterpiece`,
                    text: `One of my favorite projects was my years-long development of a Minecraft server in which I coded the entire structure of the server to be a better version of multiplayer Minecraft.`
                }),
                PageSection.create({
                    text: `I often found others' multiplayer servers full of cluttered information, mismatched chat text colors, and unfaithful implementations of imaginary features like in-game money. My server was devoted to having a clean interface, simple but deep structure, and an extension of the vanilla gameplay.`
                }),
                PageSection.create({
                    image: `assets/images/minecraft/minecraft-1.png`,
                    imageCaption: `There were many achivable titles in my server, including the titles Master and Grand Master, referring to the user's ability to build. In order to achieve Grand Master, a Master would have to submit a masterpiece such as this.`
                }),
                PageSection.create({
                    title: `In-Game Currencies`,
                    text: `Instead of saving some number somewhere and referring to it as money, my server's economy was based on the valuable materials mined by the playerbase. Players could buy goods and services with Iron, Diamonds, and Gold. They could expand the lands they owned, add users to their lands to collaborate, or change the rules of the game inside their areas with these currency items.`
                }),
                PageSection.create({
                    text: `The best builders were even allowed to utilize a proto-Creative Mode that I implemented long before Creative Mode was in the game. I also implemented ATMs, which were like Ender Chests before they were eventually implemented.`
                }),
                PageSection.create({
                    text: `Minecraft was my canvas as a young game developer. I could utilize the nearly fully featured game as a building block in creating something better, or improving elements that existed already but weren't great in multiplayer. I focused on the user experience of the average Minecraft player being able to jump right in without learning anything new, and having everything just work as expected. I made sure to include features to report unruly users, and mute abusers, thus removing them from the game entirely.`
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
                    title: `Rapid Website Development`,
                    text: `Towards the end of Forge's development, we realized we needed a proper FAQ. We decided to implement it as a webpage available inside the app, and on its website. While working with a designer, I was the sole developer of the project.`
                }),
                PageSection.create({
                    image: `assets/images/forge/forge-help-1.png`,
                    imageCaption: `The FAQ website was available online, and in a web view inside the app. While displayed in the app, most navigation features of the site were hidden.`
                }),
                PageSection.create({
                    title: `Tools and Roles`,
                    text: `Working with mockups, I implemented the designs into a responsive website utilizing templates and media queries to hide navigation elements while appearing inside the Forge app. I alos created an automated table of contents that was based on articles created, and would automatically scroll to the section when selected.`
                }),
                PageSection.create({
                    text: `Worked from Illustrator and Sketch compositions and implemented the site in Atom. Developed with Harmony's content management system and templating engine.`
                })
            ]
        }),

        /*
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
