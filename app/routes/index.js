import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      stories: this.store.findAll('story'),
      featured-stories: this.store.findAll('featured-story')
    });
  },

  actions: {
    saveStory(params) {
      var newStory = this.store.createRecord('story', params);
      newStory.save();
      this.transitionTo('index');
    },
  }
});
