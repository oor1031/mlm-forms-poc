"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
require("@grapecity/wijmo.styles/wijmo.css");
// import './app.css'
var React = require("react");
var wijmo_react_grid_1 = require("@grapecity/wijmo.react.grid");
var wijmo_react_input_1 = require("@grapecity/wijmo.react.input");
var countries = ['US', 'Mexico', 'Canada'];
var getData = function () {
    // create some random data
    var data = [];
    for (var i = 0; i < countries.length; i++) {
        data.push({
            id: i,
            country: countries[i],
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000,
            overdue: i % 4 == 0
        });
    }
    return data;
};
var Videos = /** @class */ (function (_super) {
    __extends(Videos, _super);
    function Videos() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.countries = ['US', 'Mexico', 'Canada'];
        return _this_1;
    }
    Videos.prototype.render = function () {
        this.data = this.getData();
        return (React.createElement("div", { className: "container-fluid" },
            React.createElement(wijmo_react_grid_1.FlexGrid, { isReadOnly: true, selectionMode: "Row", initialized: this.initializeGrid.bind(this), itemsSource: [
                    {
                        "id": 1,
                        "name": "Leanne Graham",
                        "username": "Bret",
                        "email": "Sincere@april.biz",
                        "address": {
                            "street": "Kulas Light",
                            "suite": "Apt. 556",
                            "city": "Gwenborough",
                            "zipcode": "92998-3874",
                            "geo": {
                                "lat": "-37.3159",
                                "lng": "81.1496"
                            }
                        },
                        "phone": "1-770-736-8031 x56442",
                        "website": "hildegard.org",
                        "company": {
                            "name": "Romaguera-Crona",
                            "catchPhrase": "Multi-layered client-server neural-net",
                            "bs": "harness real-time e-markets"
                        }
                    },
                    {
                        "id": 2,
                        "name": "Ervin Howell",
                        "username": "Antonette",
                        "email": "Shanna@melissa.tv",
                        "address": {
                            "street": "Victor Plains",
                            "suite": "Suite 879",
                            "city": "Wisokyburgh",
                            "zipcode": "90566-7771",
                            "geo": {
                                "lat": "-43.9509",
                                "lng": "-34.4618"
                            }
                        },
                        "phone": "010-692-6593 x09125",
                        "website": "anastasia.net",
                        "company": {
                            "name": "Deckow-Crist",
                            "catchPhrase": "Proactive didactic contingency",
                            "bs": "synergize scalable supply-chains"
                        }
                    },
                    {
                        "id": 3,
                        "name": "Clementine Bauch",
                        "username": "Samantha",
                        "email": "Nathan@yesenia.net",
                        "address": {
                            "street": "Douglas Extension",
                            "suite": "Suite 847",
                            "city": "McKenziehaven",
                            "zipcode": "59590-4157",
                            "geo": {
                                "lat": "-68.6102",
                                "lng": "-47.0653"
                            }
                        },
                        "phone": "1-463-123-4447",
                        "website": "ramiro.info",
                        "company": {
                            "name": "Romaguera-Jacobson",
                            "catchPhrase": "Face to face bifurcated interface",
                            "bs": "e-enable strategic applications"
                        }
                    },
                    {
                        "id": 4,
                        "name": "Patricia Lebsack",
                        "username": "Karianne",
                        "email": "Julianne.OConner@kory.org",
                        "address": {
                            "street": "Hoeger Mall",
                            "suite": "Apt. 692",
                            "city": "South Elvis",
                            "zipcode": "53919-4257",
                            "geo": {
                                "lat": "29.4572",
                                "lng": "-164.2990"
                            }
                        },
                        "phone": "493-170-9623 x156",
                        "website": "kale.biz",
                        "company": {
                            "name": "Robel-Corkery",
                            "catchPhrase": "Multi-tiered zero tolerance productivity",
                            "bs": "transition cutting-edge web services"
                        }
                    },
                    {
                        "id": 5,
                        "name": "Chelsey Dietrich",
                        "username": "Kamren",
                        "email": "Lucio_Hettinger@annie.ca",
                        "address": {
                            "street": "Skiles Walks",
                            "suite": "Suite 351",
                            "city": "Roscoeview",
                            "zipcode": "33263",
                            "geo": {
                                "lat": "-31.8129",
                                "lng": "62.5342"
                            }
                        },
                        "phone": "(254)954-1289",
                        "website": "demarco.info",
                        "company": {
                            "name": "Keebler LLC",
                            "catchPhrase": "User-centric fault-tolerant solution",
                            "bs": "revolutionize end-to-end systems"
                        }
                    },
                    {
                        "id": 6,
                        "name": "Mrs. Dennis Schulist",
                        "username": "Leopoldo_Corkery",
                        "email": "Karley_Dach@jasper.info",
                        "address": {
                            "street": "Norberto Crossing",
                            "suite": "Apt. 950",
                            "city": "South Christy",
                            "zipcode": "23505-1337",
                            "geo": {
                                "lat": "-71.4197",
                                "lng": "71.7478"
                            }
                        },
                        "phone": "1-477-935-8478 x6430",
                        "website": "ola.org",
                        "company": {
                            "name": "Considine-Lockman",
                            "catchPhrase": "Synchronised bottom-line interface",
                            "bs": "e-enable innovative applications"
                        }
                    },
                    {
                        "id": 7,
                        "name": "Kurtis Weissnat",
                        "username": "Elwyn.Skiles",
                        "email": "Telly.Hoeger@billy.biz",
                        "address": {
                            "street": "Rex Trail",
                            "suite": "Suite 280",
                            "city": "Howemouth",
                            "zipcode": "58804-1099",
                            "geo": {
                                "lat": "24.8918",
                                "lng": "21.8984"
                            }
                        },
                        "phone": "210.067.6132",
                        "website": "elvis.io",
                        "company": {
                            "name": "Johns Group",
                            "catchPhrase": "Configurable multimedia task-force",
                            "bs": "generate enterprise e-tailers"
                        }
                    },
                    {
                        "id": 8,
                        "name": "Nicholas Runolfsdottir V",
                        "username": "Maxime_Nienow",
                        "email": "Sherwood@rosamond.me",
                        "address": {
                            "street": "Ellsworth Summit",
                            "suite": "Suite 729",
                            "city": "Aliyaview",
                            "zipcode": "45169",
                            "geo": {
                                "lat": "-14.3990",
                                "lng": "-120.7677"
                            }
                        },
                        "phone": "586.493.6943 x140",
                        "website": "jacynthe.com",
                        "company": {
                            "name": "Abernathy Group",
                            "catchPhrase": "Implemented secondary concept",
                            "bs": "e-enable extensible e-tailers"
                        }
                    },
                    {
                        "id": 9,
                        "name": "Glenna Reichert",
                        "username": "Delphine",
                        "email": "Chaim_McDermott@dana.io",
                        "address": {
                            "street": "Dayna Park",
                            "suite": "Suite 449",
                            "city": "Bartholomebury",
                            "zipcode": "76495-3109",
                            "geo": {
                                "lat": "24.6463",
                                "lng": "-168.8889"
                            }
                        },
                        "phone": "(775)976-6794 x41206",
                        "website": "conrad.com",
                        "company": {
                            "name": "Yost and Sons",
                            "catchPhrase": "Switchable contextually-based project",
                            "bs": "aggregate real-time technologies"
                        }
                    },
                    {
                        "id": 10,
                        "name": "Clementina DuBuque",
                        "username": "Moriah.Stanton",
                        "email": "Rey.Padberg@karina.biz",
                        "address": {
                            "street": "Kattie Turnpike",
                            "suite": "Suite 198",
                            "city": "Lebsackbury",
                            "zipcode": "31428-2261",
                            "geo": {
                                "lat": "-38.2386",
                                "lng": "57.2232"
                            }
                        },
                        "phone": "024-648-3804",
                        "website": "ambrose.net",
                        "company": {
                            "name": "Hoeger LLC",
                            "catchPhrase": "Centralized empowering task-force",
                            "bs": "target end-to-end models"
                        }
                    },
                    {
                        "username": "oor1031@daugherty.com",
                        "email": "oscarrojas4096@gmail.com",
                        "gender": "female",
                        "hobbies": [
                            "Reading"
                        ],
                        "review": 49,
                        "notificaiton": true,
                        "id": 11
                    },
                    {
                        "username": "sfds",
                        "email": "oscarrojas4096@gmail.com",
                        "gender": "others",
                        "hobbies": [
                            "Writing"
                        ],
                        "review": 38,
                        "id": 12
                    },
                    {
                        "username": "another",
                        "email": "oscarrojas4096@gmail.com",
                        "gender": "female",
                        "hobbies": [
                            "Writing"
                        ],
                        "review": 49,
                        "id": 13
                    },
                    {
                        "username": "oscar",
                        "email": "oscarrojas4096@gmail.com",
                        "gender": "others",
                        "hobbies": [
                            "Singing"
                        ],
                        "review": 25,
                        "notificaiton": true,
                        "id": 14
                    },
                    {
                        "username": "khkh",
                        "email": "oscarrojas4096@gmail.com",
                        "gender": "female",
                        "hobbies": [
                            "Writing"
                        ],
                        "review": 23,
                        "id": 15
                    },
                    {
                        "username": "gdfg",
                        "email": "oscarrojas4096@gmail.com",
                        "gender": "female",
                        "hobbies": [
                            "Coding"
                        ],
                        "review": 28,
                        "id": 16
                    },
                    {
                        "username": "adsfdf",
                        "email": "oscarrojas4096@gmail.com",
                        "gender": "others",
                        "hobbies": [
                            "Writing"
                        ],
                        "review": 74,
                        "id": 17
                    },
                    {
                        "username": "oor1031@daugherty.com",
                        "email": "oscarrojas4096@gmail.com",
                        "gender": "female",
                        "hobbies": [
                            "Writing"
                        ],
                        "id": 18
                    },
                    {
                        "username": "sdfdsf",
                        "email": "oscarrojas4096@gmail.com",
                        "gender": "others",
                        "hobbies": [
                            "Writing"
                        ],
                        "id": 19
                    },
                    {
                        "username": "sdfdsd",
                        "email": "oscarrojas4096@gmail.com",
                        "gender": "female",
                        "hobbies": [
                            "Coding"
                        ],
                        "id": 20
                    },
                    {
                        "username": "asdf",
                        "email": "oscarrojas4096@gmail.com",
                        "gender": "female",
                        "hobbies": [
                            "Writing"
                        ],
                        "id": 21
                    },
                    {
                        "username": "dvxf",
                        "email": "oscarrojas4096@gmail.com",
                        "gender": "female",
                        "hobbies": [
                            "Writing"
                        ],
                        "id": 22
                    },
                    {
                        "username": "dfg",
                        "email": "oscarrojas4096@gmail.com",
                        "gender": "others",
                        "hobbies": [
                            "Coding"
                        ],
                        "id": 23
                    },
                    {
                        "username": "Oscar",
                        "email": "oscarrojas4096@gmail.com",
                        "gender": "male",
                        "hobbies": [
                            "Reading"
                        ],
                        "review": 23,
                        "id": 24
                    },
                    {
                        "username": "pctr593280",
                        "email": "oscarrojas4096@gmail.com",
                        "gender": "female",
                        "hobbies": [
                            "Reading"
                        ],
                        "notificaiton": true,
                        "id": 25
                    },
                    {
                        "username": "oscar",
                        "email": "oscarrojas4096@gmail.com",
                        "gender": "female",
                        "hobbies": [
                            "Writing"
                        ],
                        "id": 26
                    }
                ] }),
            React.createElement(wijmo_react_input_1.Popup, { className: "modal-content", initialized: this.initializePopup.bind(this) })));
    };
    ;
    Videos.prototype.initializeGrid = function (flex) {
        var _this = this;
    };
    Videos.prototype.initializePopup = function (ctl) {
        this.popup = ctl;
    };
    Videos.prototype.initializeExpense = function (ctl) {
        this.numberExpenses = ctl;
    };
    Videos.prototype.initializeSales = function (ctl) {
        this.numberSales = ctl;
    };
    Videos.prototype.initializeCountry = function (ctl) {
        this.cboCountry = ctl;
    };
    Videos.prototype.getData = function () {
        // create some random data 
        var data = [];
        for (var i = 0; i < this.countries.length; i++) {
            data.push({
                id: i,
                country: this.countries[i],
                sales: Math.random() * 10000,
                expenses: Math.random() * 5000,
                overdue: i % 4 == 0
            });
        }
        return data;
    };
    return Videos;
}(React.Component));
exports["default"] = Videos;
