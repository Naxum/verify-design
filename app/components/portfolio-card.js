import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['portfolio-card'],
    classNameBindings: ['useWhiteText:white', 'customBackgroundClass'],
    project: null,
    useWhiteText: Ember.computed(function(){
        return this.get('project.useWhiteText');
    }),
    customBackgroundClass: Ember.computed(function() {
        return this.get('project.customBackgroundClass');
    }),
    hideGetButton: false
});
