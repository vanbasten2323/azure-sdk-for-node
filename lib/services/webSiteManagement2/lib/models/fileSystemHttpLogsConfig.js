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
 * Initializes a new instance of the FileSystemHttpLogsConfig class.
 * @constructor
 * Http logs to file system configuration
 *
 * @member {number} [retentionInMb] Maximum size in megabytes that http log
 * files can use.
 * When reached old log files will be removed to make space for
 * new ones.
 * Value can range between 25 and 100.
 * 
 * @member {number} [retentionInDays] Retention in days.
 * Remove files older than X days.
 * 0 or lower means no retention.
 * 
 * @member {boolean} [enabled] Enabled
 * 
 */
function FileSystemHttpLogsConfig() {
}

/**
 * Defines the metadata of FileSystemHttpLogsConfig
 *
 * @returns {object} metadata of FileSystemHttpLogsConfig
 *
 */
FileSystemHttpLogsConfig.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'FileSystemHttpLogsConfig',
    type: {
      name: 'Composite',
      className: 'FileSystemHttpLogsConfig',
      modelProperties: {
        retentionInMb: {
          required: false,
          serializedName: 'retentionInMb',
          type: {
            name: 'Number'
          }
        },
        retentionInDays: {
          required: false,
          serializedName: 'retentionInDays',
          type: {
            name: 'Number'
          }
        },
        enabled: {
          required: false,
          serializedName: 'enabled',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = FileSystemHttpLogsConfig;
