import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
  actions: {
    storyFormShow() {
      this.set('addNewStory', true);
    },
    saveStory() {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        body: this.get('body'),
        image: this.get('image'),
        title: this.get('title'),
      };
      this.set('addNewStory', false);
      this.sendAction('saveStory', params);
    }
  }
});
