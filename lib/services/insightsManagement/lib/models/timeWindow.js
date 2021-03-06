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

/**
 * @class
 * Initializes a new instance of the TimeWindow class.
 * @constructor
 * A specific date-time for the profile. This element is not used if the
 * Recurrence element is used.
 *
 * @member {string} [timeZone] the time zone of the start and end times for
 * the profile. See examples of valid timezone ids over here:
 * https://msdn.microsoft.com/en-us/library/azure/dn931928.aspx
 * 
 * @member {date} start the start time for the profile in ISO 8601 format.
 * 
 * @member {date} end the end time for the profile in ISO 8601 format.
 * 
 */
function TimeWindow() {
}

/**
 * Defines the metadata of TimeWindow
 *
 * @returns {object} metadata of TimeWindow
 *
 */
TimeWindow.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'TimeWindow',
    type: {
      name: 'Composite',
      className: 'TimeWindow',
      modelProperties: {
        timeZone: {
          required: false,
          serializedName: 'timeZone',
          type: {
            name: 'String'
          }
        },
        start: {
          required: true,
          serializedName: 'start',
          type: {
            name: 'DateTime'
          }
        },
        end: {
          required: true,
          serializedName: 'end',
          type: {
            name: 'DateTime'
          }
        }
      }
    }
  };
};

module.exports = TimeWindow;
