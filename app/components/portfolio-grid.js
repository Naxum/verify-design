import Ember from 'ember';

export default Ember.Component.extend({
    portfolio: Ember.inject.service(),
    classNames: ['portfolio-grid']
});
