import Ember from 'ember';
import Project from '../objects/project'

export default Ember.Service.extend({
    projects: [
        Project.create({
            id: 'about',
            title: 'Jake Sawyer Designs and Codes Apps, Games, Websites, and More!',
            subtitle: 'Howdy',
            footnote: 'He\'s also a big goofball',
            getButton: 'Hire'
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
            customBackgroundClass: 'looty'
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
