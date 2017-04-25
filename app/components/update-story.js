import Ember from 'ember';

export default Ember.Component.extend({
  updateDesired: false,
  actions: {
    updateDesired(){
      this.set('updateDesired', true);
    },
    update(story){
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        body: this.get('body'),
        image: this.get('image'),
        title: this.get('title'),
      };
      this.set('updateDesired', false);
      this.sendAction('update', story, params);
    }
  }
});
