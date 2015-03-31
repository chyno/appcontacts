System.register(["aurelia-event-aggregator", "./web-api", "./app", "./messages"], function (_export) {
  var EventAggregator, WebAPI, App, ContactUpdated, ContactViewed, _createClass, _classCallCheck, ContactDetail;

  return {
    setters: [function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_webApi) {
      WebAPI = _webApi.WebAPI;
    }, function (_app) {
      App = _app.App;
    }, function (_messages) {
      ContactUpdated = _messages.ContactUpdated;
      ContactViewed = _messages.ContactViewed;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ContactDetail = _export("ContactDetail", (function () {
        function ContactDetail(app, api, ea) {
          _classCallCheck(this, ContactDetail);

          this.app = app;
          this.api = api;
          this.ea = ea;
        }

        _createClass(ContactDetail, {
          activate: {
            value: function activate(params, qs, config) {
              var _this = this;

              return this.api.getContactDetails(params.id).then(function (contact) {
                _this.contact = contact;
                config.navModel.title = contact.firstName;
                _this.originalJSON = JSON.stringify(contact);
                _this.ea.publish(new ContactViewed(contact));
              });
            }
          },
          canSave: {
            get: function () {
              return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
            }
          },
          save: {
            value: function save() {
              var _this = this;

              this.api.saveContact(this.contact).then(function (contact) {
                _this.contact = contact;
                _this.originalJSON = JSON.stringify(_this.contact);
                _this.ea.publish(new ContactUpdated(_this.contact));
              });
            }
          },
          canDeactivate: {
            value: function canDeactivate() {
              if (this.originalJSON != JSON.stringify(this.contact)) {
                var result = confirm("You have unsaved changes. Are you sure you wish to leave?");

                if (!result) {
                  this.ea.publish(new ContactViewed(this.contact));
                }

                return result;
              }

              return true;
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [App, WebAPI, EventAggregator];
            }
          }
        });

        return ContactDetail;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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