System.register([], function (_export) {
  var _createClass, _classCallCheck, latency, id, contacts, WebAPI;

  function getId() {
    return ++id;
  }

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      latency = 300;
      id = 0;
      //test data
      contacts = [{
        id: getId(),
        firstName: "Julian",
        lastName: "Tolkien",
        email: "tolkien@inklings.com",
        phoneNumber: "867-5309"
      }, {
        id: getId(),
        firstName: "Clive",
        lastName: "Lewis",
        email: "lewis@inklings.com",
        phoneNumber: "867-5309"
      }, {
        id: getId(),
        firstName: "Owen",
        lastName: "Barfield",
        email: "barfield@inklings.com",
        phoneNumber: "867-5309"
      }, {
        id: getId(),
        firstName: "Charles",
        lastName: "Williams",
        email: "williams@inklings.com",
        phoneNumber: "867-5309"
      }, {
        id: getId(),
        firstName: "Roger",
        lastName: "Green",
        email: "green@inklings.com",
        phoneNumber: "867-5309"
      }];
      WebAPI = _export("WebAPI", (function () {
        function WebAPI() {
          _classCallCheck(this, WebAPI);
        }

        _createClass(WebAPI, {
          getContactList: {
            value: function getContactList() {
              var _this = this;

              this.isRequesting = true;
              return new Promise(function (resolve) {
                setTimeout(function () {
                  var results = contacts.map(function (x) {
                    return {
                      id: x.id,
                      firstName: x.firstName,
                      lastName: x.lastName,
                      email: x.email
                    };
                  });
                  resolve(results);
                  _this.isRequesting = false;
                }, latency);
              });
            }
          },
          getContactDetails: {
            value: function getContactDetails(id) {
              var _this = this;

              this.isRequesting = true;
              return new Promise(function (resolve) {
                setTimeout(function () {
                  var found = contacts.filter(function (x) {
                    return x.id == id;
                  })[0];
                  resolve(JSON.parse(JSON.stringify(found)));
                  _this.isRequesting = false;
                }, latency);
              });
            }
          },
          saveContact: {
            value: function saveContact(contact) {
              var _this = this;

              this.isRequesting = true;
              return new Promise(function (resolve) {
                setTimeout(function () {
                  var instance = JSON.parse(JSON.stringify(contact));
                  var found = contacts.filter(function (x) {
                    return x.id == contact.id;
                  })[0];

                  if (found) {
                    var index = contacts.indexOf(found);
                    contacts[index] = instance;
                  } else {
                    instance.id = getId();
                    contacts.push(instance);
                  }

                  _this.isRequesting = false;
                  resolve(instance);
                }, latency);
              });
            }
          }
        });

        return WebAPI;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYi1hcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtxQ0FBSSxPQUFPLEVBQ1AsRUFBRSxFQU9GLFFBQVEsRUFzQ0MsTUFBTTs7QUEzQ25CLFdBQVMsS0FBSyxHQUFFO0FBQ2QsV0FBTyxFQUFFLEVBQUUsQ0FBQztHQUNiOzs7Ozs7Ozs7OztBQUxHLGFBQU8sR0FBRyxHQUFHO0FBQ2IsUUFBRSxHQUFHLENBQUM7O0FBT04sY0FBUSxHQUFHLENBQ2I7QUFDRSxVQUFFLEVBQUMsS0FBSyxFQUFFO0FBQ1YsaUJBQVMsRUFBQyxRQUFRO0FBQ2xCLGdCQUFRLEVBQUMsU0FBUztBQUNsQixhQUFLLEVBQUMsc0JBQXNCO0FBQzVCLG1CQUFXLEVBQUMsVUFBVTtPQUN2QixFQUNEO0FBQ0UsVUFBRSxFQUFDLEtBQUssRUFBRTtBQUNWLGlCQUFTLEVBQUMsT0FBTztBQUNqQixnQkFBUSxFQUFDLE9BQU87QUFDaEIsYUFBSyxFQUFDLG9CQUFvQjtBQUMxQixtQkFBVyxFQUFDLFVBQVU7T0FDdkIsRUFDRDtBQUNFLFVBQUUsRUFBQyxLQUFLLEVBQUU7QUFDVixpQkFBUyxFQUFDLE1BQU07QUFDaEIsZ0JBQVEsRUFBQyxVQUFVO0FBQ25CLGFBQUssRUFBQyx1QkFBdUI7QUFDN0IsbUJBQVcsRUFBQyxVQUFVO09BQ3ZCLEVBQ0Q7QUFDRSxVQUFFLEVBQUMsS0FBSyxFQUFFO0FBQ1YsaUJBQVMsRUFBQyxTQUFTO0FBQ25CLGdCQUFRLEVBQUMsVUFBVTtBQUNuQixhQUFLLEVBQUMsdUJBQXVCO0FBQzdCLG1CQUFXLEVBQUMsVUFBVTtPQUN2QixFQUNEO0FBQ0UsVUFBRSxFQUFDLEtBQUssRUFBRTtBQUNWLGlCQUFTLEVBQUMsT0FBTztBQUNqQixnQkFBUSxFQUFDLE9BQU87QUFDaEIsYUFBSyxFQUFDLG9CQUFvQjtBQUMxQixtQkFBVyxFQUFDLFVBQVU7T0FDdkIsQ0FDRjtBQUVZLFlBQU07aUJBQU4sTUFBTTtnQ0FBTixNQUFNOzs7cUJBQU4sTUFBTTtBQUNqQix3QkFBYzttQkFBQSwwQkFBRTs7O0FBQ2Qsa0JBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLHFCQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQzVCLDBCQUFVLENBQUMsWUFBTTtBQUNmLHNCQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxFQUFLO0FBQUUsMkJBQU87QUFDeEMsd0JBQUUsRUFBQyxDQUFDLENBQUMsRUFBRTtBQUNQLCtCQUFTLEVBQUMsQ0FBQyxDQUFDLFNBQVM7QUFDckIsOEJBQVEsRUFBQyxDQUFDLENBQUMsUUFBUTtBQUNuQiwyQkFBSyxFQUFDLENBQUMsQ0FBQyxLQUFLO3FCQUNkLENBQUE7bUJBQUMsQ0FBQyxDQUFDO0FBQ0oseUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNqQix3QkFBSyxZQUFZLEdBQUcsS0FBSyxDQUFDO2lCQUMzQixFQUFFLE9BQU8sQ0FBQyxDQUFDO2VBQ2IsQ0FBQyxDQUFDO2FBQ0o7O0FBRUQsMkJBQWlCO21CQUFBLDJCQUFDLEVBQUUsRUFBQzs7O0FBQ25CLGtCQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUN6QixxQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUM1QiwwQkFBVSxDQUFDLFlBQU07QUFDZixzQkFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUM7MkJBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFO21CQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRCx5QkFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0Msd0JBQUssWUFBWSxHQUFHLEtBQUssQ0FBQztpQkFDM0IsRUFBRSxPQUFPLENBQUMsQ0FBQztlQUNiLENBQUMsQ0FBQzthQUNKOztBQUVELHFCQUFXO21CQUFBLHFCQUFDLE9BQU8sRUFBQzs7O0FBQ2xCLGtCQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUN6QixxQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUM1QiwwQkFBVSxDQUFDLFlBQU07QUFDZixzQkFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDbkQsc0JBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDOzJCQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLEVBQUU7bUJBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUV4RCxzQkFBRyxLQUFLLEVBQUM7QUFDUCx3QkFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQyw0QkFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQzttQkFDNUIsTUFBSTtBQUNILDRCQUFRLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDO0FBQ3RCLDRCQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO21CQUN6Qjs7QUFFRCx3QkFBSyxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQzFCLHlCQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ25CLEVBQUUsT0FBTyxDQUFDLENBQUM7ZUFDYixDQUFDLENBQUM7YUFDSjs7OztlQS9DVSxNQUFNIiwiZmlsZSI6IndlYi1hcGkuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==