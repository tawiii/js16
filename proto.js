;(function ($) {
	function Human (name) {
		this.name = name;
		this.age = 20;
		this.gender = 'man';
		this.growth = 200;
		this.weigth = 90;
	}

	function Worker (name) {
		Human.apply(this, arguments);
		this.placeWork = 'office fish';
		this.salary = 15000;
	}

	Worker.prototype.work = function() {
		 console.log('JOB');
	};

	function Student (name) {
		Human.apply(this, arguments);	  
		this.placeLearn = 'Garvard';
		this.stipend = 1000;
	}

	Student.prototype.watchSerial = function(serial){
		 console.log( 'serial' + ' ' + '- nice');
	};

	var worker = new Worker('Jon');
	var student = new Student('Santa');
	console.log(worker.name);
	worker.work()
	console.log(student.name);
	student.watchSerial();
})(jQuery);