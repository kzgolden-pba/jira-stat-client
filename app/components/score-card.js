import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    classNames: ['score-card'],
    tagName: 'dl',
    score: null,

    scoreDisplay: computed('score', function(){
        return this.get('score') && this.get('score').toFixed(2);
    }),
});
