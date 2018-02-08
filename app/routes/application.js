import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        this.transitionTo('stats-dashboard.board-overview', {queryParams: { boardId: 304 }});
    }
});
