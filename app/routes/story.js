import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('story', params.story_id);
  },

  actions: {
    delete(story){
      if(confirm("Are you sure that you want to delete this terrific piece of literature?")){
        story.destroyRecord();
        this.transitionTo('index');
      }
    },
    update(story, params){
      console.log("got here");
      Object.keys(params).forEach(key=>{
        if(params[key]!==undefined){
          story.set(key, params[key]);
        }
      });
      story.save();
      // this.transitionTo('index');
    }
  }
});
