import Ember from 'ember';

export default Ember.Route.extend({
    classNames: ['page'],
    // portfolio: Ember.inject.service(),
    model(params) {
        // return portfolio.projects.find((p) => p.id == id);
        return Ember.getOwner(this).lookup('service:portfolio').projects.find((p) => p.id == params.id);
    }
});
