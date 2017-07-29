import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['portfolio-card'],
    classNameBindings: ['useWhiteText:white', 'customBackgroundClass'],
    useWhiteText: Ember.computed(function(){
        return this.get('project.useWhiteText');
    }),
    customBackgroundClass: Ember.computed(function() {
        return this.get('project.customBackgroundClass');
    })
});
