import Ember from 'ember';

export default Ember.Object.extend({
    url: 'project',
    title: 'Default Title',
    subtitle: 'Default Subtitle',
    body: null,
    footnote: null,
    getButton: null,
    useWhiteText: false,
    customBackgroundClass: null
});
