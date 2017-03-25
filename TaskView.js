var TaskView = function (model) {
    this.model = model;
    this.addTaskEvent = new Event(this);
    this.selectTaskEvent = new Event(this);
    this.unselectTaskEvent = new Event(this);
    this.completeTaskEvent = new Event(this);
    this.deleteTaskEvent = new Event(this);

    this.init();
};

TaskView.prototype = {
    init: function () {
        this.createChildren()
            .setupHandlers()
            .enable();
    },

    createChildren: function () {
        this.$container = $('.js-container');
        this.$addTaskButton = this.$container.find('.js-add-task-button');
        this.$taskTextBox = this.$container.find('.js-task-textbox');
        this.$tasksContainer = this.$container.find('.js-tasks-container');

        return this;
    },

    setupHandlers: function () {
        this.addTaskButtonHandler = this.addTaskButton.bind(this);

        return this;
    }
}

/*... in progress...*/
