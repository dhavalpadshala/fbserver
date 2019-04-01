/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = function(app) {


    var appdata = [{
            id: "2564456450261525",
            value: "47",
            lang: "hi"
        },
        {
            id: "2727909087236130",
            value: "90",
            lang: "hi"
        },
        {
            id: "2165183620266486",
            value: "103",
            lang: "hi"
        },
        {
            id: "2340501072661328",
            value: "101",
            lang: "hi"
        },
    ];

    /**
     * POST /save-match
     *
     * Inserts or updates database match information for the specified context
     * after validating that the data sent is actually from a valid client
     *
     */
    app.post('/get-match', function(request, response) {
        //var signature = request.body.contextId;
        // console.log(request.body);
        var contextId = request.body.contextID;
        var res = appdata.filter(p => p.id == contextId);
        response.json({
            'success': true,
            'data': res
        });

    });


    /**
     * loadMatchData(contextId)
     *
     * Retrieves data from the database for the specified context
     */
    const loadMatchData = function(contextId) {
        return new Promise(function(resolve, reject) {

        });
    };

};