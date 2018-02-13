import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return this.store.query('board-issue', { boardId: params.boardId });
    },
    setupController(controller, model){
        this._super(...arguments);
        return this.store.find('board-element', model.query.boardId).then(response => {
            controller.setProperties({
                boardColumns: response.data.columns,
                boardSwimlanes: response.data.swimlanes,
                itemsOnBoard: response.data.issuesOnBoard,
            });
        });
    }
});
