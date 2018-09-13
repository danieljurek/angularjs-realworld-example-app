function AppRun(AppConstants, $rootScope) {
  'ngInject';

  performance.mark('AppInit');
  performance.measure('InitMeasurement', 'navigationStart', 'AppInit');
  console.log(performance.getEntriesByName('InitMeasurement'));

  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.setPageTitle(toState.title);
  });

  // Helper method for setting the page's title
  $rootScope.setPageTitle = (title) => {
    $rootScope.pageTitle = '';
    if (title) {
      $rootScope.pageTitle += title;
      $rootScope.pageTitle += ' \u2014 ';
    }
    $rootScope.pageTitle += AppConstants.appName;
  };

}

export default AppRun;
