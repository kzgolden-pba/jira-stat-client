import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    queryParams: ['boardId'],
    boardId: 304,
    storyPoints: computed.mapBy('model', 'storyPoints'),
    maxPoints: computed.max('storyPoints')
});
