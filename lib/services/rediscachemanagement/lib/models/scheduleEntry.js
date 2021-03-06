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
 * Initializes a new instance of the ScheduleEntry class.
 * @constructor
 * @member {string} dayOfWeek Day of week when cache can be patched. Possible
 * values include: 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
 * 'Saturday', 'Sunday'
 * 
 * @member {number} startHourUtc Start hour after which cache patching can
 * start.
 * 
 * @member {moment.duration} [maintenanceWindow] ISO8601 timespan specifying
 * how much time cache patching can take.
 * 
 */
function ScheduleEntry() {
}

/**
 * Defines the metadata of ScheduleEntry
 *
 * @returns {object} metadata of ScheduleEntry
 *
 */
ScheduleEntry.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ScheduleEntry',
    type: {
      name: 'Composite',
      className: 'ScheduleEntry',
      modelProperties: {
        dayOfWeek: {
          required: true,
          serializedName: 'dayOfWeek',
          type: {
            name: 'String'
          }
        },
        startHourUtc: {
          required: true,
          serializedName: 'startHourUtc',
          type: {
            name: 'Number'
          }
        },
        maintenanceWindow: {
          required: false,
          serializedName: 'maintenanceWindow',
          type: {
            name: 'TimeSpan'
          }
        }
      }
    }
  };
};

module.exports = ScheduleEntry;
