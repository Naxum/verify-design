import Ember from 'ember';

export default Ember.LinkComponent.extend({
    classNames: ['portfolio-card'],
    classNameBindings: ['useWhiteText:white', 'customBackgroundClass'],
    project: null,
    useWhiteText: Ember.computed(function(){
        return this.get('project.useWhiteText');
    }),
    customBackgroundClass: Ember.computed(function() {
        return this.get('project.customBackgroundClass');
    })
});
