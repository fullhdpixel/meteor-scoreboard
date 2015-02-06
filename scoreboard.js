if (Meteor.isClient) {
    //counter starts at 0
    Router.route('/', function() {
        this.render('/signup');
    });


    Router.route('/terms-of-use', function() {
        this.render();
    });

    AccountsTemplates.configureRoute('signIn', {
        name: 'signin',
        path: '/signin',
        template: 'signin',
        layoutTemplate: 'signin',
        redirect: '/signin',
    });

    AccountsTemplates.configureRoute('signUp', {
        name: 'signup',
        path: '/signup',
        template: 'signup',
        layoutTemplate: 'signup',
        redirect: '/signup',
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {});
}
