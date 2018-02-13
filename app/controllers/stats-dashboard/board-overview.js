import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    queryParams: ['boardId'],

    boardId: 304,
    boardColumns: null,
    boardSwimlanes: null,
    itemsOnBoard: null,

    storyPoints: computed.mapBy('model', 'storyPoints'),
    maxPoints: computed.max('storyPoints'),

    closedStatusIds: computed('boardColumns', function(){
        let columns = this.get('boardColumns');
        if (!columns){
            return [];
        } else {
            let lastCol = columns.pop();
            return lastCol.statusIds;
        }
    }),

    hideClosed: true,

    actions: {
        toggleClosedVisibility(){
            this.toggleProperty('hideClosed');
        }
    }
});
