import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        this.transitionTo('stats-dashboard.version-info', {queryParams: { boardId: 304 }});
    }
});
