


	describe('PopupDemoCont' , function() {
      var $controller;
      modalInstance = {                    // Create a mock object using spies
        close: jasmine.createSpy('modalInstance.close'),
        dismiss: jasmine.createSpy('modalInstance.dismiss'),
        result: {
          then: jasmine.createSpy('modalInstance.result.then')
        }
      }; 
  beforeEach(module('PopupDemo'));

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));
    it('test case name', function() {
      var $scope = {};
      var controller = $controller('PopupDemoCont', { $scope: $scope });
        $scope.name = 'longerthaneightchars';
      $scope.check();
      expect($scope.strength).toEqual('strong');

    })
     it('test case add function', function() {
      var $scope = {};
      var controller = $controller('PopupDemoCont1', { $scope: $scope,  $uibModalInstance: modalInstance });
      $scope.task_id="107";
      $scope.task_name="task7"
       // $scope.obj={task_id:"107",task_name:"task7"};
       $scope.addData();
       expect(todo).toContain({task_id:"107",task_name:"task7"});

    })
});


