/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the Cat class.
 * @constructor
 * @member {string} [color]
 * 
 * @member {array} [hates]
 * 
 */
function Cat() {
  Cat['super_'].call(this);
}

util.inherits(Cat, models['Pet']);

/**
 * Defines the metadata of Cat
 *
 * @returns {object} metadata of Cat
 *
 */
Cat.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'cat',
    type: {
      name: 'Composite',
      className: 'Cat',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'Number'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        pettype: {
          required: true,
          serializedName: 'pet\\.type',
          type: {
            name: 'String'
          }
        },
        color: {
          required: false,
          serializedName: 'color',
          type: {
            name: 'String'
          }
        },
        hates: {
          required: false,
          serializedName: 'hates',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'DogElementType',
                type: {
                  name: 'Composite',
                  className: 'Dog'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = Cat;
