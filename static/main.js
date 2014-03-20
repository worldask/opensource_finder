require.config({
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery.min'
    },
    shim: {
        'jquery': {exports: '$'}
    }
});

//the "main" function to bootstrap your code
require([ 'jquery'], function ($) {
    'use strict';

    $(function() {
        $("body").on("click", "#go", function() {
            console.log("go");
        });
    });
});


