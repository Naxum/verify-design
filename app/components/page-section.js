import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['page-section'],
    classNameBindings: ['isLink:is-link'],
    isLink: Ember.computed(function() {
        return this.get('section.linkUrl') !== null;
    })
});
