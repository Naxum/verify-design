import Ember from 'ember';

export default Ember.Object.extend({
    id: 'id',
    title: 'Default Title',
    subtitle: 'Default Subtitle',
    body: null,
    footnote: null,
    getButton: null,
    useWhiteText: false,
    customBackgroundClass: null
});
