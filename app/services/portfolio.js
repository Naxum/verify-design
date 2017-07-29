import Ember from 'ember';
import Project from '../objects/project'
import PageSection from '../objects/page-section'

export default Ember.Service.extend({
    projects: [
        Project.create({
            id: 'about',
            title: 'Jake Sawyer Designs and Codes Apps, Games, Websites, and More!',
            subtitle: 'Howdy',
            footnote: 'He\'s also a big goofball',
            getButton: 'Contact'
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
            subtitle: 'Unnanounced Unity Game'
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
                    image: 'assets/images/looty-card.png',
                    imageCaption: 'Zach\'s custom-made arcade cabinet up close. It wasn\'t for sale. Trust us. We Tried'
                }),
                PageSection.create({
                    text: 'Another paragraph, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
            subtitle: 'A Best of 2015 App'
        }),
        Project.create({
            id: 'minecraft',
            title: 'Minecraft Overhaul',
            subtitle: 'Enhancing the Original'
        }),
        Project.create({
            id: 'forge-help',
            title: 'Forge Help',
            subtitle: 'Supplementary Aid Portal'
        }),
        Project.create({
            id: 'vive-jams',
            title: 'Vive Jams',
            subtitle: 'You Know It'
        }),
        Project.create({
            id: 'twitcher',
            title: 'Twitcher',
            subtitle: 'Yep'
        }),
        Project.create({
            id: 'ccm',
            title: 'Children\'s Creativity Museum Installation',
            subtitle: 'Interactive Wall'
        }),
        Project.create({
            id: 'behance',
            title: 'Behance Learning Portal',
            subtitle: 'Creaive Externship'
        })
    ]
});
