/*
 *
 *  Air Horner
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

var EventManager = new (function() {
  var events = {};

  this.publish = function(name, data) {
    return new Promise(function(resolve, reject) {
      var handlers = events[name];
      if(!!handlers === false) return;
      handlers.forEach(function(handler) {
        handler.call(this, data);
      });
      resolve();
    });
  };

  this.subscribe = function(name, handler) {
    var handlers = events[name];
    if(!!handlers === false) {
      handlers = events[name] = [];
    }
    handlers.push(handler);
  };

  this.unsubscribe = function(name, handler) {
    var handlers = events[name];
    if(!!handlers === false) return;

    var handlerIdx = handlers.indexOf(handler);
    handlers.splice(handlerIdx);
  };
});
