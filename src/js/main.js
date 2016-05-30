import angular from 'angular';
import 'angular-ui-router';

//import Controllers
import { HomeController } from './controllers/home.controller';
import { AddController } from './controllers/add.controller';
import { DetailsController } from './controllers/details.controller';

//import Config
import { config } from './config';

const url = 'https://secret-forest-21470.herokuapp.com/collections/instaClone343/';

angular
//setter for a module
  .module('app', ['ui.router'])
  //register config
  .config(config)

// App URL Constant
  .constant('URL', url)
  //register Controllers
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .controller('DetailsController', DetailsController)
  ;
