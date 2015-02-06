if (Meteor.isClient) {
    //counter starts at 0
    Router.route('/', function() {
        this.render('/signup');
    });

    Router.route('/signup', function() {
        this.render();
    });

    Router.route('/signin', function() {
        this.render();
    });

    Router.route('/terms-of-use', function() {
        this.render();
    });

    AccountsTemplates.configureRoute('signIn', {
        name: 'signin',
        path: '/login',
        template: 'myLogin',
        layoutTemplate: 'myLayout',
        redirect: '/user-profile',
    });

    AccountsTemplates.configureRoute('signUp', {
        name: 'signin',
        path: '/login',
        template: 'myLogin',
        layoutTemplate: 'myLayout',
        redirect: '/user-profile',
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {});
}
